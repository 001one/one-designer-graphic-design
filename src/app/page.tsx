import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Carousel from "@/components/Carousel";
import InfoCard from "@/components/InfoCard";
import { Suspense } from "react";
import GraphicDesignSection from "@/components/GraphicDesignSection";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hire Me for Graphic Design | YouTube Thumbnails, Posters & More",
  description:
    "Looking for high-quality graphic design? Hire me for YouTube thumbnails, posters, logos, social media graphics, business cards, and more. Professional designs, fast delivery!",
  keywords:
    "hire graphic designer, YouTube thumbnail design, poster design, logo design, social media graphics, business card design, custom designs, freelance graphic designer, affordable graphic design, digital artwork, professional design services",
  openGraph: {
    title: "Hire Me for Graphic Design | YouTube Thumbnails, Posters & More",
    description:
      "Need a professional graphic designer? I create stunning YouTube thumbnails, posters, logos, business cards, and more. Contact me today for high-quality custom designs!",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Me - Professional Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Me for Graphic Design | YouTube Thumbnails, Posters & More",
    description:
      "Get high-quality graphic designs for YouTube thumbnails, posters, logos, and more! Affordable prices and fast turnaround.",
    images: ["https://yourwebsite.com/preview-image.jpg"],
  },
};
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (

    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-20">

<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 mb-8">
        {/* Carousel Centered */}
        <div className="w-full  flex justify-center mt-5">
          <Carousel />
        </div>

        {/* Info Card */}
        {/* <InfoCard />
        <InfoCard /> */}
      </div>

      <h1 className=" font-bold  flex justify-center text-6xl mt-5 bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Graphic designs</h1>
      <Suspense fallback={<p>Loading data...</p>}>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full shadow-lg p-4 ">


  {posts.map((post) => {
    const postImageUrl = post.image ? urlFor(post.image)?.width(600).height(550).url() : null;

    return (

    
      <li className="hover:underline hover:bg-white p-2 rounded-4xl hover:text-blue-400 hover:shadow-lg" key={post._id}>
        <Link href={`/${post.slug.current}`}>
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="rounded-lg w-full h-[450px] object-contain mb-2"
              width="600"
              height="550"
              
            
            />
          )}
          <h2 className="text-xl font-semibold">{post.title}</h2>
         
        </Link>
      </li>
    );
  })}
</ul>
</Suspense>
<div className="flex justify-center mt-8  md:mt-15 ">
        <Link href="/all-posts">
          <button className="bg-blue-600 text-white px-6 cursor-pointer py-3 rounded-lg shadow-2xl hover:bg-blue-700 transition">
            View All Posts
          </button>
        </Link>
      </div>
<section className="mt-5 md:mt-15">
  <div>
    <GraphicDesignSection/>
  </div>
</section>
<section className="mt-5 md:mt-16" >
  <div className="flex justify-center" >
    <Image
    src="/services.jpg"
    alt="services"
    width={1200}
    height={1000}
    className="rounded-lg shadow-lg "
    />
  </div>
</section>

<section>
  <FAQSection/>
  <ContactSection/>
</section>

    </main>
  );
}