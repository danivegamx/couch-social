import { NextResponse } from "next/server";
import { mockPosts } from "../../../data/posts";

export async function GET() {
  return NextResponse.json(mockPosts);
}