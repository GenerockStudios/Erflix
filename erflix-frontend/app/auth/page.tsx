"use client";

import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";

/**
 * This component is used for user authentification
 * @returns
 */
export default function AuthPage() {
    // Value of form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // variant
  const [variant, setVariant] = useState("login");

  // Toggle variable
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5  rounded-md w-full lg:max-w-md max-h-[600px]">
              <h2 className="text-white text-3xl mb-4">
                {variant === "login" ? "Sign in" : "Sign up"}
              </h2>
              <div className="flex flex-col gap-3">
                {variant === "register" ? (
                  <Input
                    className="bg-neutral-700 text-white border-neutral-800"
                    placeholder="Username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                ) : null}
                <Input
                  className="bg-neutral-700 text-white border-neutral-800"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Input
                  className="bg-neutral-700 text-white border-neutral-800"
                  placeholder="Password"
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant === 'login' ? "Login" : "Register"}
              </button>
              <p className="text-neutral-500 mt-12">
              {variant === 'login' ? "First time using Netflix ?" : "Already have an account ?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === 'login' ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
