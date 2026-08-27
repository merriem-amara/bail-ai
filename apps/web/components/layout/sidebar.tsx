"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Bot,
  Settings,
} from "lucide-react";


const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Cases",
    href: "/cases",
    icon: BriefcaseBusiness,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];


export default function Sidebar() {

  return (
    <aside className="w-64 min-h-screen border-r bg-white p-5">

      <div className="mb-8">
        <h1 className="text-xl font-bold">
          BailAI
        </h1>

        <p className="text-sm text-gray-500">
          Legal Intelligence
        </p>
      </div>


      <nav className="space-y-2">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Icon size={18}/>
              {item.name}
            </Link>
          );

        })}

      </nav>

    </aside>
  );
}
