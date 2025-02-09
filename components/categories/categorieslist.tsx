import sampleData from "@/sample-data";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import groupProductsByCategory from "@/lib/groupproducts";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import getAllProduct from "@/lib/actions/getallproduct";

const Categories = async () => {
  const productData = await getAllProduct();
  const product = productData ? productData : [];

  const groupedproduct = groupProductsByCategory(product);
  return (
    <div className=" wrapper w-full max-w-7xl mx-auto">
      <h1 className="capitalize text-3xl font-semibold">categories</h1>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="">
          {Object.keys(groupedproduct).map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-9/12   md:basis-5/12 lg:basis-4/12"
            >
              <div className="p-1">
                <Card
                  className="w-full"
                  style={{
                    backgroundImage: `url(${groupedproduct[item][0][0]})`,
                    backgroundSize: 200,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <CardContent className="flex flex-col gap-2 bg-black/25 rounded-md aspect-square items-center justify-center p-6 ">
                    <span className="text-3xl font-semibold"></span>

                    <p className="text-white text-3xl">{item}</p>
                    <Link href={`/${item}`}>
                      <Button>More..</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Categories;
