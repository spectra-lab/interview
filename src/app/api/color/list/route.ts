import { NextRequest, NextResponse } from "next/server"
// * * *
import { Colors } from "@/data"

export async function GET(req: NextRequest) {
  return NextResponse.json(Colors)
}
