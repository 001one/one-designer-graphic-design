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
import SidebarContent from "@/components/sidebarcontent";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";



export const metadata: Metadata = {
  title: "NEEO Designers | Best Graphic Design Services – Thumbnails, Logos & More",
  description:
    "Need professional graphic design? NEEO Designers create stunning YouTube thumbnails, posters, logos, business cards & more. High-quality, fast turnaround & affordable pricing!",
  keywords:
    "graphic design services, hire graphic designer, custom logo design, YouTube thumbnails, poster design, branding services, print-ready graphics, business card design, social media graphics, professional design solutions, best graphic designer, affordable designs, digital artwork, website graphics, flyer design, banner ads, packaging design, Kenya graphic designer, international graphic design services",
  openGraph: {
    title: "NEEO Designers | Professional Graphic Design Services",
    description:
      "Looking for expert graphic design? We offer premium YouTube thumbnails, social media graphics, posters, business cards, and custom branding solutions. Fast, high-quality designs!",
    url: "https://onedesignersdesign.com",
    type: "website",
    images: [
      {
        url: "https://onedesignersdesign.com/preview-image.png",
        width: 1200,
        height: 630,
        alt: "NEEO Designers - Professional Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEEO Designers | High-Quality Graphic Design Services",
    description:
      "Stunning YouTube thumbnails, posters, logos, social media graphics & more. Affordable, professional designs with fast delivery. Order now!",
    images: ["https://onedesignersdesign.com/preview-image.png"],
  },
};


const GRAPHIC_CATEGORY_POSTS_QUERY = `
  *[_type == "category" && slug.current == "graphic-design"][0]{
    title,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc)[0...12]{
      _id,
      title,
      slug,
      publishedAt,
      image
    }
  }
`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
const data = await client.fetch(GRAPHIC_CATEGORY_POSTS_QUERY, {}, options);
const posts = data?.posts || [];


  return (

    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-20">
<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 mb-8">
  {/* Carousel */}
  <div className="w-full lg:w-3/4 flex justify-center mt-5">
    <Carousel />
  </div>

  {/* Sidebar (Visible on Large Screens) */}
  <div className="hidden lg:block w-1/4">
    <SidebarContent />
  </div>
</div>


      <h1 className=" font-bold  flex justify-center text-6xl mt-5 bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Graphic designs</h1>
      <FeaturedServices />
      <CTA />
      <Suspense fallback={<p>Loading data...</p>}>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full shadow-lg p-4">
  {posts.map((post: SanityDocument) => {
    const postImageUrl = post.image ? urlFor(post.image)?.width(600).height(550).url() : null;

    return (
      <li className="hover:underline hover:bg-white p-2 rounded-4xl hover:text-blue-400 hover:shadow-lg" key={post._id}>
        <Link href={`/${post.slug.current}`}>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className="rounded-lg w-full h-auto max-h-[450px] object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
              width={600}
              height={550}
              priority // Helps with performance (remove if not needed)
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
{/* Testimonials Section */}
<Testimonials />
<section>
  <FAQSection/>
  <ContactSection/>
</section>
  {/* New Call-to-Action Section */}
  <CTA />

    </main>
  );
}