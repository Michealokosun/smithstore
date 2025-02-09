import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import Productprice from "./productprice";
import { Star } from "lucide-react";
import { product } from "@/types";

const Productcard = ({ product }: { product: product }) => {
  return (
    <Card>
      <CardHeader>
        <Link href={product.slug}>
          <Image
            src={product.images[0]}
            className="w-full"
            width={400}
            height={400}
            alt="images"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-slate-600">{product.brand}</p>
        <p className="text-sm font-semibold ">{product.name}</p>
        <div className="flex my-2  mt-4 items-center justify-between">
          <p className="flex ">
            <Star color="gold" size={20} />
            <Star color="gold" size={20} />
            <Star color="gold" size={20} />
          </p>
          {product.stock === 0 ? (
            <p className="text-red-600 capitalize">Out of stock</p>
          ) : (
            <p>
              <Productprice price={product.price} />
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Productcard;
