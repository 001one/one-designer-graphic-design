import Link from "next/link";


export default function InfoCard() {
  return (
    <div className="w-full lg:w-1/3 bg-gray-200 dark:bg-gray-300 p-6 rounded-lg shadow-lg mt-3">
      <h2 className="text-2xl font-semibold mb-2">Featured Post</h2>
      <p className="text-gray-300 dark:text-gray-300">
        Check out our latest featured post with amazing content.
      </p>
    
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Read More
        </button>
      
    </div>
  );
}
