import { Briefcase, Palette, FileText } from "lucide-react";

const SidebarContent = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-6 p-6 w-72 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center gap-3">
        <Briefcase className="text-blue-600" size={28} />
        <p className="text-lg font-semibold">Professional Designs</p>
      </div>
      <div className="flex items-center gap-3">
        <Palette className="text-purple-600" size={28} />
        <p className="text-lg font-semibold">Creative Concepts</p>
      </div>
      <div className="flex items-center gap-3">
        <FileText className="text-green-600" size={28} />
        <p className="text-lg font-semibold">Custom Projects</p>
      </div>
    </aside>
  );
};

export default SidebarContent;
