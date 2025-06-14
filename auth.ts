import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      credentials: {
        name: { label: "Firstname" },
        lastName: { label: "Lastname" },
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentails) => {
        const { name, lastName, email, password } = credentails as {
          email: string;
          name: string;
          lastName: string;
          password: string;
        };
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
          include: { accounts: true },
        });
        if (!user) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await prisma.user.create({
            data: {
              email,
              name,
              lastName,
              password: hashedPassword,
            },
          });
          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            lastName: newUser.lastName,
          };
        }
        if (!user.password) {
          const providers = user.accounts.map((acc) => acc.provider).join(", ");
          throw new Error(
            `Account exist via ${providers}, please login via ${providers}`,
          );
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid email or Password");
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          lastName: user.lastName,
        };
      },
    }),
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
    GitHub({
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
