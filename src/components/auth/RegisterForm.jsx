import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Logo";
import { useState } from "react";
import Error from "../ui/error";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All field are required");
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    console.log(newUser);
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-zinc-900 bg-zinc-800">
        <div className="text-center">
          <Logo />
        </div>
        <h1 className="text-xl text-zinc-50 font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
            type="text"
            placeholder="Full Name"
          />
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
            <Button type="submit">Register</Button>
            <Link
              className="text-sm text-zinc-300 mt-3 ml-3 text-right"
              href={"/"}
            >
              Already have an account?{" "}
              <span className="underline text-zinc-50">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
