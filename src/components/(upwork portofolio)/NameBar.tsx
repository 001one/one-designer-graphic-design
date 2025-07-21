import Link from "next/link";


// GROQ query to fetch categories


export default async function CategorySidebar() {


  return (
    <aside className="w-[350px] h-full bg-white p-4 shadow-lg ">
      <h2 className="text-3xl font-semibold mb-4 whitespace-nowrap">Animation students</h2>
      <ul className="space-y-3 font-bold text-2xl">
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
        <li>John Doe</li>
      </ul>
    </aside>
  );
}