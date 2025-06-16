import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allAuctions = await prisma.auction.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        currentBid: true,
        _count: {
          select: {
            bids: true,
          },
        },
      },
    });
    return NextResponse.json({
      auctions: allAuctions
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
