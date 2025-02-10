"use server"

import { prisma } from "@/db/prisma"

export const getproductbyslug =async (slug:string)=>{
    const product = await prisma.product.findFirst({
        where: {
            slug: slug
        
        }
    }) 

    return product
}
