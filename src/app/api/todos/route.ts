import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json(
      {
        success: false,
        message: "Take o Skip tienen que ser números",
      },
      { status: 400 }
    );
  }

  const todos = await prisma.todos.findMany({
    skip,
    take,
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json({
    success: true,
    data: todos,
  });
}
