import Categories from "@/components/categories/categorieslist";
export const metadata = {
  title: "Home",
};
import Productlist from "@/components/product/productlist";
import getAllProduct from "@/lib/actions/getallproduct";

export default async function Home() {
  const latestproduct = await getAllProduct(4);

  return (
    <div className=" w-full  max-w-7xl mx-auto">
      <div className="">
        <Categories />
      </div>
      <Productlist products={latestproduct} title="new arrival" />
    </div>
  );
}
