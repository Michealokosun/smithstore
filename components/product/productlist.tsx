import React from "react";
import Productcard from "./productcard";
const Productlist = ({ title, products }: { title: string; products: any }) => {
  return (
    <div className="wrapper">
      <h1 className="capitalize mb-3 text-2xl">{title}</h1>
      {products?.length === 0 ? (
        "No product found"
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product: any) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productlist;
