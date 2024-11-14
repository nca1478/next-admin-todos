import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  await prisma.todos.deleteMany();

  await prisma.todos.createMany({
    data: [
      { description: "Tarea 1", complete: true },
      { description: "Tarea 2" },
      { description: "Tarea 3" },
      { description: "Tarea 4" },
      { description: "Tarea 5" },
    ],
  });

  return NextResponse.json({
    success: true,
    message: "Seed Executed",
  });
}
