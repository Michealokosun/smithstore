"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/app/images/logo.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { sigiInwithCredential } from "@/lib/actions/signinuser";
import { useActionState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [data, formAction, pending] = useActionState(sigiInwithCredential, {
    success: false,
    message: "",
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <Image
            className="mx-auto"
            src={logo}
            alt="logo"
            width={50}
            height={30}
          />
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <Button disabled={pending} type="submit" className="w-full">
                {!pending ? "Login" : "Signing In"}
              </Button>
              {data && !data.success && (
                <p className="bg-red-300">{data.message}</p>
              )}
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
