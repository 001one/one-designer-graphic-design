import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params);

  return {
    title: post?.title || "Post Not Found",
    description: post?.excerpt || "Explore our latest design insights and inspirations.",
    openGraph: {
      title: post?.title || "Post Not Found",
      description: post?.excerpt || "Explore our latest design insights and inspirations.",
      images: post?.image ? [{ url: urlFor(post.image)?.url() || "", alt: post.title }] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.url()
    : null;

    return (
        <main className="container mx-auto min-h-screen  p-8 flex flex-col gap-4 mt-15">
          <Link href="/" className="hover:underline">
            ← Back to posts
          </Link>
      
          {/* Image and Details Wrapper */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image */}
            {postImageUrl && (
              <img
                src={postImageUrl}
                alt={post.title}
                className="object-contain max-w-[1000px] h-[700px] rounded-lg"
               
              />
            )}
      
            {/* Post Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-600">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
              {Array.isArray(post.body) && <PortableText value={post.body} />}
            </div>
          </div>
        </main>
      );
}