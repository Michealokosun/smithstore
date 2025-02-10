"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Productimages = ({ images }: { images: string[] }) => {
  const [current, setcurrent] = useState(0);
  return (
    <div className=" flex gap-2 md:flex-col items-center ">
      <div className="images">
        <Image
          src={images[current]}
          width={300}
          height={100}
          alt="imagesdetails"
        />
      </div>

      <div className="flex gap-8 flex-col md:flex-row mt-3">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setcurrent(index)}
            className={cn(
              "image-button border rounded-sm hover:border-orange-300 cursor-pointer justify-center flex flex-col items-center",
              current === index && "border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productimages;
