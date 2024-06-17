'use client';
import { UserButton, useAuth } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "../../components/common";
import { IconUsers } from "../../components/icons";
import Link from "next/link";


const SidebarTop = () => {

    const {userId} = useAuth();
  
  return (
    <div className="top py-3 px-5 bg-white flex items-center justify-end gap-5 static xl:fixed top-0 left-[300px] right-0 z-50 xl:h-16 shadow-sm mb-8 dark:bg-grayDarker">
            <div className="mt-auto flex items-center justify-end gap-4">
            <ModeToggle></ModeToggle>
            {!userId ? (
            <Link
                href="/sign-in"
                className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
            >
                <IconUsers />
            </Link>
            ) : (
            <UserButton />
            )}
        </div>
        </div>
  )
}

export default SidebarTop