import { prisma } from "@/prisma";
import { title } from "process";

export async function GET(req: Request,
    { params }: { params: { id: string } }
) {
    const { id } = await params
    const auction = await prisma.auction.findFirst({
        where: {
            id
        },
        select: {
            id: true,
            title: true,
            description: true,
            currentBid: true,
            status: true,
            condition: true,
            startPrice: true,
            category: true,
            createdAt: true,
            images: true
        }
    })
}