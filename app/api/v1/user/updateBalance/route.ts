import { NextRequest } from "next/server";

export async function UPDATE(req: NextRequest) {
  const { balance } = req.json();
}
