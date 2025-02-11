"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { siginoutUser } from "@/lib/actions/signinuser";

const Signoutbutton = () => {
  return (
    <Button
      onClick={async () => await siginoutUser()}
      className="flex gap-1 items-center"
      variant="default"
    >
      <LogOut />
      <span>Sign Out</span>
    </Button>
  );
};

export default Signoutbutton;
