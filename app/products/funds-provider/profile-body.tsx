import React from "react";

export interface Fund {
  name: string;
}

type Props = {
  profileSidebarOpen: boolean;
  setProfileSidebarOpen: boolean;
  fund: Fund;
};

export default function ProfileBody({
  profileSidebarOpen,
  setProfileSidebarOpen,
  fund,
}: Props) {
  return (
    <div
      className={`grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out ${
        profileSidebarOpen ? "translate-x-1/3" : "translate-x-0"
      }`}
    >
      {/* Content */}
      <div className="relative px-4 sm:px-6 pb-8">
        {/* Tabs */}
        <div className="relative mb-6">
          <div
            className="absolute bottom-0 w-full h-px bg-slate-200"
            aria-hidden="true"
          ></div>
          <ul className="relative  text-sm font-medium flex flex-nowrap pt-4 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-sky-400 whitespace-nowrap border-b-2 border-sky-400"
                href="#0"
              >
                General
              </a>
            </li>
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap"
                href="#0"
              >
                Connections
              </a>
            </li>
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap"
                href="#0"
              >
                Contributions
              </a>
            </li>
          </ul>
        </div>

        {/* Profile content */}
        <div className="flex flex-col xl:flex-row xl:space-x-16">
          {/* Main content */}
          <div className="space-y-5 mb-8 xl:mb-0">
            {/* About Me */}
            <div>
              <h2 className="text-slate-800 font-semibold mb-2">About Me</h2>
              <div className="text-sm space-y-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor magna
                  aliqua.
                </p>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-slate-800 font-semibold mb-2">Departments</h2>
              {/* Cards */}
              <div className="grid xl:grid-cols-2 gap-4">
                {/* Card */}
                <div className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                  {/* Card header */}
                  <div className="grow flex items-center truncate mb-2">
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800">
                        Acme Marketing
                      </span>
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="text-sm mb-3">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </div>
                  {/* Card footer */}
                  <div className="flex justify-between items-center">
                    {/* Avatars group */}

                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                    >
                      View -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                {/* Card header */}
                <div className="grow flex items-center truncate mb-2">
                  <div className="truncate">
                    <span className="text-sm font-medium text-slate-800">
                      Acme Product
                    </span>
                  </div>
                </div>
                {/* Card content */}
                <div className="text-sm mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </div>
                {/* Card footer */}
                <div className="flex justify-between items-center">
                  {/* Link */}
                  <div>
                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                    >
                      View -&gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work History */}
          <div>
            <h2 className="text-slate-800 font-semibold mb-2">Work History</h2>
            <div className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
              <ul className="space-y-3">
                {/* Item */}
                <li className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:grow flex items-center text-sm">
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-full shrink-0 bg-amber-500 my-2 mr-3">
                      <svg
                        className="w-8 h-8 fill-current text-amber-50"
                        viewBox="0 0 32 32"
                      >
                        <path d="M21 14a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 1-.75.75Zm-7 10a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 0 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
                      </svg>
                    </div>
                    {/* Position */}
                    <div>
                      <div className="font-medium text-slate-800">
                        Senior Product Designer
                      </div>
                      <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                        <div>Remote</div>
                        <div className="text-slate-400">·</div>
                        <div>April, 2020 - Today</div>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="sm:ml-2 mt-2 sm:mt-0">
                    <ul className="flex flex-wrap sm:justify-end -m-1">
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          Marketing
                        </button>
                      </li>
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          +4
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Item */}
                <li className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:grow flex items-center text-sm">
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg
                        className="w-8 h-8 fill-current text-indigo-50"
                        viewBox="0 0 32 32"
                      >
                        <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                      </svg>
                    </div>
                    {/* Position */}
                    <div>
                      <div className="font-medium text-slate-800">
                        Product Designer
                      </div>
                      <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                        <div>Milan, IT</div>
                        <div className="text-slate-400">·</div>
                        <div>April, 2018 - April 2020</div>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="sm:ml-2 mt-2 sm:mt-0">
                    <ul className="flex flex-wrap sm:justify-end -m-1">
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          Marketing
                        </button>
                      </li>
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          +4
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Item */}
                <li className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:grow flex items-center text-sm">
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg
                        className="w-8 h-8 fill-current text-indigo-50"
                        viewBox="0 0 32 32"
                      >
                        <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                      </svg>
                    </div>
                    {/* Position */}
                    <div>
                      <div className="font-medium text-slate-800">
                        Product Designer
                      </div>
                      <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                        <div>Milan, IT</div>
                        <div className="text-slate-400">·</div>
                        <div>April, 2018 - April 2020</div>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="sm:ml-2 mt-2 sm:mt-0">
                    <ul className="flex flex-wrap sm:justify-end -m-1">
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          Marketing
                        </button>
                      </li>
                      <li className="m-1">
                        <button className="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                          +4
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="xl:min-w-56 xl:w-56 space-y-3">
          <div className="text-sm">
            <h3 className="font-medium text-slate-800">Title</h3>
            <div>Senior Product Designer</div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium text-slate-800">Location</h3>
            <div>Milan, IT - Remote</div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium text-slate-800">Email</h3>
            <div>carolinmcneail@acme.com</div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium text-slate-800">Birthdate</h3>
            <div>4 April, 1987</div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium text-slate-800">Joined Acme</h3>
            <div>7 April, 2017</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
