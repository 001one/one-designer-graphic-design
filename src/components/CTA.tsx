import Link from "next/link";

export default function CTA() {
  return (
    <div className="mt-12 flex justify-center">
      <Link href="#contact">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
          Get a Custom Design Now!
        </button>
      </Link>
    </div>
  );
}
