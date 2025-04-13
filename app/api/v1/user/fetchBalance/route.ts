import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.id,
    },
    select: {
      balance: true,
    },
  });
  NextResponse.json({
    balance: user?.balance,
  });
}
