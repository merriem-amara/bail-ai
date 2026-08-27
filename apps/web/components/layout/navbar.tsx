"use client";

import { Bell, UserCircle } from "lucide-react";


export default function Navbar() {

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div>
        <h2 className="text-lg font-semibold">
          Lawyer Workspace
        </h2>

        <p className="text-sm text-gray-500">
          Manage your criminal cases efficiently
        </p>
      </div>


      <div className="flex items-center gap-5">

        <button
          className="rounded-full p-2 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20}/>
        </button>


        <button
          className="flex items-center gap-2 text-sm"
        >
          <UserCircle size={26}/>

          <span>
            Lawyer
          </span>
        </button>

      </div>

    </header>
  );
}
