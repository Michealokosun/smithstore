
import { z} from "zod"
import { formatnumberwithdecimal } from "./utils"

const currency = z.string().refine((value)=>/^\d+(\.\d{2})?$/.test(formatnumberwithdecimal(Number(value))), "price must have be two deciaml ")

export const insertproductschema = z.object({
  name: z.string().min(3, "Name must be at least 3 charcter"),
  
  slug: z.string().min(3, "Name must be at least 3 charcter"),
  
  category: z.string().min(3, "Name must be at least 3 charcter"),
  
  brand: z.string().min(3, "Name must be at least 3 charcter"),
  
  description: z.string().min(3, "Name must be at least 3 charcter"),

  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "must have at leat 1 product"),
 
  isFeatured: z.boolean(),
  banner: z.string().nullable( ),
  price: currency
})






//signin form schema

export const siginInFormSchema = z.object({
  email: z.string().email("invalid emial"),
  password: z.string().min(4, "password must be 6 character long")
})