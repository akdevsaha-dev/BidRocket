import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/signin"
    },
  providers: [
    Google,
  ],
})