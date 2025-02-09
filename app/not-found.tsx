import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants/constants";
import Image from "next/image";
import logo from "./images/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Notfound = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="w-[27rem] py-5 flex items-center justify-center flex-col p-5">
        <CardTitle>
          <h1 className="text-lg uppercase text-gray-700">{APP_NAME}</h1>
        </CardTitle>
        <CardHeader>
          <Image src={logo} alt={APP_NAME} height={50} width={50} />
        </CardHeader>
        <CardContent className="w-full text-center">
          <p className="text-sm  flex text-slate-800 font-semibold">
            The page you are trying to request does not exist
          </p>
          <Link href="/">
            <Button className="mt-5 capitalize">Go to home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notfound;
