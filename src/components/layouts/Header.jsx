"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, Settings, User, BadgePlus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../Logo";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="py-5 border-b border-zinc-800">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <form>
            <div className="flex w-full max-w-xl items-center space-x-2">
              <Input
                className="bg-zinc-800 text-zinc-50 border-0 w-[800px]"
                type="email"
                placeholder="Type your keyword here..."
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
          <div className="flex gap-3 items-center">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/48852166?v=4"
                      alt="mehedihsajib"
                    />
                    <AvatarFallback>MHS</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BadgePlus className="mr-2 h-4 w-4" />
                      <span>Create a post</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <button onClick={() => signOut()}>Log out</button>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
