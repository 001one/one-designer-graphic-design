// app/blender-project/page.tsx

import { client } from "@/sanity/client";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Body from "@/components/(upwork portofolio)/Body";
import { SanityDocument } from "next-sanity";




const CATEGORY_POSTS_QUERY = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
      _id, title, slug, publishedAt, body
    }
  }
`;

export const revalidate = 30;

export default async function BlenderProjectPage() {
  const data = await client.fetch(CATEGORY_POSTS_QUERY, { slug: "youtube-videos" });
  const posts = data?.posts || [];

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 mt-30">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Blender Project Videos</h1>

      <div className="flex justify-end mb-6">
        <Link href="/my-blender-3d-projects" className="group inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:underline">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-semibold">Back to Home</span>
        </Link>
      </div>

      <Suspense fallback={<p>Loading posts...</p>}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post: SanityDocument) => (
            <li key={post._id} className="hover:bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-2xl transition">
              <Link href={`/${post.slug.current}`} className="block">
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
              {Array.isArray(post.body) && post.body.length > 0 ? (
                <Body blocks={post.body} />
              ) : (
                <p className="text-gray-500 italic">No content available for this post.</p>
              )}
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
