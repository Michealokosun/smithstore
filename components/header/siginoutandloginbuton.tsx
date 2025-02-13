"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { siginoutUser } from "@/lib/actions/signinuser";
import { useState } from "react";

const Signoutbutton = () => {
  const [loading, setisloading] = useState(false);
  return (
    <Button
      onClick={async () => {
        setisloading(true);
        await siginoutUser();
        setisloading(false);
      }}
      className="flex gap-1 items-center"
      variant="default"
    >
      <LogOut />
      <span>{loading ? "loading..." : "Sign Out"}</span>
    </Button>
  );
};

export default Signoutbutton;
