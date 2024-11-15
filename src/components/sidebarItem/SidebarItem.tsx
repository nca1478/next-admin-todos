"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export default function SidebarItem({ path, icon, title }: Props) {
  const currentPath = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`rounded-xl px-4 py-3 flex items-center space-x-4 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white ${
          currentPath === path
            ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
            : "rounded-md text-gray-600 group"
        }`}
      >
        {icon}
        <span className="group-hover:text-white-700">{title}</span>
      </Link>
    </li>
  );
}
