"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Logo";
import Error from "../ui/error";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-zinc-900 bg-zinc-800">
        <div className="text-center">
          <Logo />
        </div>
        <h1 className="text-xl text-zinc-50 font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Error className="py-2" errorMessage={error} />
          <div>
            <Button type="submit">Login</Button>
            <Link
              className="text-sm text-zinc-300 mt-3 ml-3 text-right"
              href="/register"
            >
              Didn&apos;t have account?{" "}
              <span className="underline text-zinc-50">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
