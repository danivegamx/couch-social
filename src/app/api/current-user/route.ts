import { NextResponse } from "next/server";
import { currentUser } from "../../../data/users";

export async function GET() {
  return NextResponse.json(currentUser);
}