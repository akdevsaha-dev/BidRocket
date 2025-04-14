import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  try {
    const { balance } = await req.json();
    await prisma.user.update({
      where: {
        id: session?.user?.id,
      },
      data: {
        balance,
      },
    });
    NextResponse.json({ message: "Balance added successfully" });
  } catch (error) {
    console.error(error);
    console.error("There is something up in the backend");
  }
}
