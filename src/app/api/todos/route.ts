import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todos.findMany();

  return NextResponse.json({
    success: true,
    data: todos,
  });
}
