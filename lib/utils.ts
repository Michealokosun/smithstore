import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatnumberwithdecimal = (num:number): string=>{
  const [int, dec] = num.toFixed().split(".")
  return dec ? `${int}.${dec.padEnd(2, "0")}`: `${int}.00`

}