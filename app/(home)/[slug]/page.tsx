export const metadata = {
  title: "Product-description",
};

import Productimages from "@/components/product/product-images";
import Productprice from "@/components/product/productprice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getproductbyslug } from "@/lib/actions/getproductbyslug";
import { notFound } from "next/navigation";

const Productdetails = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getproductbyslug(slug);

  if (!product) notFound();

  return (
    <div className="wrapper">
      <div className="grid space-y-2   grid-cols-1 md:grid-cols-5">
        <div className="image col-span-2">
          <Productimages images={product.images} />
        </div>
        <div className="product-detials col-span-2">
          <div className="flex gap-4 flex-col">
            <p className="text-xs font-bold">{product.category}</p>
            <h1 className="h3-bold text-sm ">{product.name}</h1>
            <p>{product.numReviews}reviews</p>
            <Productprice
              price={product.price}
              className="text-green-700 py-2 w-24  px-5 rounded-full bg-green-100 "
            />
            <p className="text-sm">
              <p className="font-bold">Description:</p>{" "}
              <p> {product.description}</p>
            </p>
          </div>
        </div>
        <div className="addtocart">
          <Card>
            <CardContent className="p-4 w-full">
              <div className="mb-2 flex justify-between">
                <div className="font-semibold">Price</div>
                <div>
                  <Productprice price={product.price} className="" />
                </div>
              </div>
              <div className="status flex justify-between mb-2">
                <div className="font-semibold">Status</div>
                <div>
                  {product.stock <= 0 ? (
                    <Badge variant={"destructive"}>Out Of Stock </Badge>
                  ) : (
                    <Badge variant={"default"}>In Stock</Badge>
                  )}
                </div>
              </div>
              <div className=" w-full flex justify- items-center">
                {product.stock > 0 && (
                  <Button className="w-full">Add To Cart</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
