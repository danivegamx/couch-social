import { NextResponse } from "next/server";
import { mockUsers } from "../../../data/users";

export async function GET() {
  return NextResponse.json(mockUsers);
}