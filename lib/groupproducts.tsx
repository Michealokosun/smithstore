import { product } from "@/types";

function groupProductsByCategory(products: product[]) {
  return products.reduce((acc: any, product: any) => {
    const { category, images } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(images);
    return acc;
  }, {});
}

// Example usage:

export default groupProductsByCategory;
