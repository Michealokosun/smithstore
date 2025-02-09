"use server";

import { prisma } from "@/db/prisma";

// import {prisma} from  "@/db/prisma"
const getAllProduct = async (limit?: number) => {
  try {
    if (limit) {
      const data = await prisma.product.findMany({
        take: limit,
        orderBy: { createdAt: "desc" },
      });
      return data;
    } else {
      const data = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
      });
      return data;
    }
  } catch (error) {
    console.log("error fetching data" + error);
  }
};

export default getAllProduct;
