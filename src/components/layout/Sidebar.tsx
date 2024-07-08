'use client';

import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { UserButton, useAuth } from "@clerk/nextjs";
import { ActiveLink, ModeToggle } from "@/components/common";
import Link from "next/link";
import { IconUsers } from "@/components/icons";

const Sidebar = () => {


  return (
    <div className="fixed top-0 left-0 pb-8 px-5 hidden xl:block bgDarkMode bottom-0 w-[300px] z-50 sidebar border-r border-gray-200 dark:border-opacity-10">
      <a href="/" className="font-bold text-3xl inline-block mb-5 p-3">
        <span className="text-primary">U</span>
        cademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>

    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url} className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all font-medium text-gray70 dark:text-slate-500 hover:bg-primary hover:bg-opacity-10 hover:text-primary dark:hover:text-primary">
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;