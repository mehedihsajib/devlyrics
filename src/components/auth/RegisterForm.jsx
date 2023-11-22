import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Logo";
import Error from "../ui/error";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All field are required");
      return;
    }

    try {
      // Check if user already exists
      const userExistsRes = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExistsRes.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
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
