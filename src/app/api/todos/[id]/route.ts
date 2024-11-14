import * as yup from "yup";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Segments) {
  const { id } = await params;
  const todo = await prisma.todos.findFirst({ where: { id } });

  if (!todo) {
    return NextResponse.json(
      {
        success: false,
        message: `Todo con id ${id} no encontrado`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: todo,
  });
}

export async function PUT(request: NextRequest, { params }: Segments) {
  const { id } = await params;

  const todo = await prisma.todos.findFirst({ where: { id } });
  if (!todo) {
    return NextResponse.json(
      {
        success: false,
        message: `Todo con id ${id} no encontrado`,
      },
      { status: 404 }
    );
  }

  const body = await request.json();

  const todoUpdated = await prisma.todos.update({
    where: { id },
    data: body,
  });

  return NextResponse.json({
    success: true,
    data: todoUpdated,
  });
}
