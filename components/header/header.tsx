import Image from "next/image";
import React from "react";
import logo from "../../app/images/logo.svg";
import { APP_NAME } from "@/lib/constants/constants";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingBag, User2 } from "lucide-react";
import Themetoggle from "../themetoggle";
import { auth } from "@/auth";
import Signoutbutton from "./siginoutandloginbuton";

export const Header = async () => {
  const session = await auth();
  return (
    <div className="w-full border-b shadow-sm ">
      <div className="wrapper  mx-auto max-w-7xl flex justify-between items-center">
        <div className="logo ">
          <Link className="flex items-center gap-1" href="/">
            <Image src={logo} width={30} height={30} alt="logo" />
            <span className=" hidden lg:flex text-gray-400  ">{APP_NAME}</span>
          </Link>
        </div>

        <div className="buttons flex items-center gap-2">
          <Themetoggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingBag />
              <span>Cart</span>
            </Link>
          </Button>
          {session ? (
            <Signoutbutton />
          ) : (
            <Button variant="default">
              <Link className="flex items-center" href="/sign-in">
                <User2 />
                <span>Login</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
