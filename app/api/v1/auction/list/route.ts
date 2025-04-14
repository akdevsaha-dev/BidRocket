import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auctions = await prisma.auction.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        currentBid: true,
        bids: true,
        images: true,
        endsAt: true,
      },
    });
    return NextResponse.json({
      auctions,
    });
  } catch (error) {
    console.error(error);
  }
}
