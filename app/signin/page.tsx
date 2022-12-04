"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function SignIn({}: Props) {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [authenticated, setauthenticated] = useState("true");
  const users = [{ email: "dany.pineault@videotron.ca", password: "dex123" }];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("login");
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      setauthenticated("true");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20"></div>
        </div>
      </header>
      <main className="relative grow flex">
        {/* Content */}
        <div className="w-full bg-gray-900">
          <div className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">
            <div className="px-4 sm:px-6">
              <div className="w-full max-w-sm mx-auto">
                <div className="py-16 md:py-20">
                  <div className="mb-8">
                    <h1 className="h2 font-uncut-sans">Welcome Back!</h1>
                  </div>
                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm text-gray-400 font-medium mb-1"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          className="form-input py-2 w-full"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            className="block text-sm text-gray-400 font-medium mb-1"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          {/* <Link
                            className="text-sm font-medium text-blue-500 hover:text-blue-400 ml-2"
                            href="/reset-password"
                          >
                            Troubles?
                          </Link> */}
                        </div>
                        <input
                          id="password"
                          className="form-input py-2 w-full"
                          type="password"
                          name="Password"
                          onChange={(e) => setpassword(e.target.value)}
                          autoComplete="on"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group">
                        Sign In{" "}
                        <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </button>
                    </div>
                  </form>

                  <div className="mt-6">
                    <div className="text-sm text-gray-400">
                      Don't you have an account?{" "}
                      <Link
                        className="font-medium text-blue-500 hover:text-blue-400"
                        href="/signup"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="hidden lg:block shrink-0 w-1/3 overflow-hidden before:bg-gray-800 before:absolute before:inset-0 before:-z-10">
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
            aria-hidden="true"
          >
            {/* Image */}
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
            aria-hidden="true"
          >
            {/* Image2 */}
          </div>
        </div>
      </main>
    </div>
  );
}
