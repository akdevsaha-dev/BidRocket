"use client"

import { BACKEND_URL } from "@/config"
import { useEffect, useState } from "react"
import axios from "axios"
export interface Auction {
    id: string
    title: string
    description: string
    currentBid: number
    _count: {
        bids: number
    }
}
interface auctionResponse {
    auctions: Auction[]
}

export const useAuction = (id: string) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [auction, setAuction] = useState<Auction | null>(null)

    axios.get(`${BACKEND_URL}/api/v1/`)
}

export const useAuctions = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [auctions, setAuctions] = useState<Auction[]>([])

    useEffect(() => {

        axios
            .get<auctionResponse>(`${BACKEND_URL}/api/v1/auction/allAuctions`)
            .then((response) => {
                setAuctions(response.data.auctions)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching auctions:", error)
            })
    }, [])

    return { loading, auctions }
}