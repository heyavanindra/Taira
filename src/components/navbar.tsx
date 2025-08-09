import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./dark-mode-toggle";

const Navbar = () => {
  return (
    <div className="relative flex w-full items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        <div className="text-xl font-bold">Taira</div>
      </aside>
      <aside className="flex items-center gap-2">
        <Link href={"/agency"} className="">
          <Button className="bg-primary hover:bg-primary/80 cursor-pointer">Login</Button>
        </Link>
      <ModeToggle></ModeToggle>
      </aside>
    </div>
  );
};

export default Navbar;
