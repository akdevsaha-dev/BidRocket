import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  console.log("SESSION:", session);
  const sellerId = session?.user?.id;
  try {
    const {
      title,
      description,
      startPrice,
      reservePrice,
      minBidIncrement,
      endsAt,
      status,
      category,
      condition,
      startsAt,
    } = await req.json();

    if (!sellerId) {
      return NextResponse.json({ error: "Unauthorized: sellerId is missing." }, { status: 401 });
    }

    const auction = await prisma.auction.create({
      data: {
        title,
        description,
        startPrice,
        currentBid: startPrice,
        reservePrice,
        status,
        minBidIncrement,
        endsAt,
        category,
        condition,
        startsAt: startsAt ? new Date(startsAt) : null,
        sellerId: sellerId,
      },
    });
    return NextResponse.json({
      auction,
    });
  } catch (error) {
    console.error(error);
  }
}
