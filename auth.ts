import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter';

import { prisma } from "./db/prisma"
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
export const { handlers, auth, signIn, signOut} = NextAuth({
    pages:{
        signIn: '/sign-in',
        error: 'sign-in'

    },
    session :{
        strategy: "jwt",
        maxAge: 30*24*60*60
    },
    adapter: PrismaAdapter(prisma),
    providers:[CredentialsProvider({
        credentials: {
            email:{type: "email"},
            password: {type: 'password'}
        },
        async authorize(credentials, req) {
            if (!credentials) return null;

            const user = await prisma.user.findFirst({
                where: {
                    email: credentials.email as string
                }
            });

            if(user && user.password){
                const ismatch = compareSync(credentials.password as string, user.password as string)
                if(ismatch){
                    return {
                        id: user.id,
                        name:user.name,
                        email: user.email,
                        role:user.role
                    }
                }

            }

                return null


           
        },
    })],
    callbacks :{
         async session ({ session, user, trigger, token }: any) {
      // Set the user id on the session
      session.user.id = token.sub;
      // If there is an update, set the name on the session
      if (trigger === 'update') {
        session.user.name = user.name;
      }
      return session;
    },

    }
}) 