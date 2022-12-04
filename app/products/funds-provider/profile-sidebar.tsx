import React from "react";

export interface Fund {
  name: string;
}

type Props = {
  profileSidebarOpen: boolean;
  setProfileSidebarOpen: Function;
  funds: Fund[];
};

export default function ProfileSidebar({
  profileSidebarOpen,
  setProfileSidebarOpen,
  funds,
}: Props) {
  return (
    <div
      id="profile-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out ${
        profileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sticky top-8 bg- overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-700 md:w-72 xl:w-80 h-[calc(100vh-64px)]">
        {/* Profile group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10">
            <div className="flex items-center bg-gray-900 border-b border-slate-700 px-5 h-16">
              <div className="w-full flex items-center justify-between">
                {/* Profile image */}
                <div className="relative">
                  <div className="grow flex items-center truncate">
                    <div className="truncate">
                      <span className="font-semibold text-slate-300">
                        Funds Provider
                      </span>
                    </div>
                  </div>
                </div>
                {/* Add button */}
                <button className="p-1.5 shrink-0 rounded border border-slate-700 hover:border-slate-300 shadow-sm ml-2">
                  <svg
                    className="w-4 h-4 fill-current text-orange-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Team members */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-300 uppercase mb-3">
                Team members
              </div>
              <ul className="mb-6">
                {funds.map((f) => (
                  <li key={f.name} className="-mx-2">
                    <button
                      className={`w-full p-2 rounded ${
                        f.name === "Fund 1" ? "bg-gray-800" : "bg-gray-900"
                      }`}
                      onClick={() => setProfileSidebarOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="truncate">
                          <span className="text-sm font-medium text-slate-400">
                            {f.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
