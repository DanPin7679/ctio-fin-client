"use client";
import React, { useState } from "react";
import ProfileBody from "./profile-body";
import ProfileSidebar, { Fund } from "./profile-sidebar";

let testFunds: Fund[] = [
  { name: "Fund 1" },
  { name: "Fund 2" },
  { name: "Fund 3" },
];

export default function FundsProvider({}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <ProfileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-900">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="relative flex">
            {/* Profile sidebar */}
            <ProfileSidebar
              profileSidebarOpen={profileSidebarOpen}
              setProfileSidebarOpen={setProfileSidebarOpen}
              funds={testFunds}
            />

            {/* Profile body */}
            <ProfileBody
              profileSidebarOpen={true}
              setProfileSidebarOpen={true}
              fund={testFunds[0]}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
