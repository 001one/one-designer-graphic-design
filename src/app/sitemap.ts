import { client } from "@/sanity/client";
import { MetadataRoute } from "next";

const BASE_URL = "https://onedesignersdesign.com";

// Fetch blog posts from Sanity
const fetchBlogPosts = async () => {
  const query = `*[_type == "post" && defined(slug.current)]{ slug, _updatedAt }`;
  const posts = await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(query);
  
  return posts.map((post) => ({
    url: `${BASE_URL}/${post.slug.current}`,
    lastModified: new Date(post._updatedAt).toISOString(), // ✅ Use actual update date
  }));
};

// Generate the sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/about`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/services`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/contact`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/webdesigner`, lastModified: new Date().toISOString()  }

  ];

  return [...staticPages, ...posts];
}
