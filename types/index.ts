
import { insertproductschema } from "@/lib/schemas";
import { z } from "zod";


export type product = z.infer<typeof insertproductschema> &   {
    id: string;
    rating: number,
    createdAt: Date,
}