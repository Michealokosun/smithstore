"use server"

import { signIn, signOut } from "@/auth";
import { siginInFormSchema } from "../schemas";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";


export async function sigiInwithCredential(prevState:unknown, formdata:FormData) {

    try {
        const user =siginInFormSchema.parse({
            email: formdata.get("email"),
            password:formdata.get("password")
        })
        

       const data =  await signIn( "credentials", user)
       if(data){
        redirect("/")
       }

        
        
      
       

        return {success:true, message:"user sigined in successfully"}
        
    } catch (error) {
        if(isRedirectError(error)){
            throw error

        }
        return {success:false, message:"invalid email or passowrd"}
        
    }
    
}



export async function siginoutUser() {
    await signOut({
        redirectTo: "/sign-in"
    })
    
}