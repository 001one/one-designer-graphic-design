import Link from "next/link";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Suspense } from "react";

const ALL_POSTS_QUERY = `*[  
  _type == "post"  
  && defined(slug.current)  
]|order(publishedAt desc){_id, title, slug, publishedAt, image}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function AllPostsPage() {
  const posts = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY, {}, options);

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-30">
      <h1 className="font-bold flex justify-center text-5xl mt-5 text-blue-600">
        More of Our Graphic Design Posts
      </h1>

      <Suspense fallback={<p>Loading data...</p>}>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full shadow-lg p-4">
          {posts.map((post) => {
            const postImageUrl = post.image ? urlFor(post.image)?.width(600).height(550).url() : null;
            return (
              <li className="hover:underline hover:bg-white p-2 rounded-lg hover:text-blue-400 hover:shadow-lg" key={post._id}>
                <Link href={`/${post.slug.current}`}>
                  {postImageUrl && (
                    <img src={postImageUrl} alt={post.title} className="rounded-lg w-full h-auto max-h-[450px] object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]" />
                  )}
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </Suspense>

      {/* Back Button to Homepage */}
      <div className="flex justify-end mt-6 mb-7">
        <Link href="/">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
