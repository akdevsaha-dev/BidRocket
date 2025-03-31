import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    Credentials({
      credentials: {
        firsname: { label: "Firstname" },
        lastname: { label: "Lastname" },
        email: { label: "email", type: "email" },
        passwrod: { label: "Password", type: "password" },
      },
      authorize: async (credentails) => {
        const { firstname, lastname, email, password } = credentails;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        return null;
      },
    }),
  ],
});
