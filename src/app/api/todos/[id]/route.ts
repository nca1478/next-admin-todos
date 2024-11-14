import * as yup from "yup";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { todos } from "@prisma/client";

interface Segments {
  params: Promise<{ id: string }>;
}

interface ErrorResponse {
  success: false;
  error: string;
}

const getTodo = async (id: string): Promise<todos | null> => {
  return await prisma.todos.findFirst({ where: { id } });
};

export async function GET(request: NextRequest, { params }: Segments) {
  const { id } = await params;

  const todo = await getTodo(id);
  if (!todo) {
    const response: ErrorResponse = {
      success: false,
      error: `Todo con id ${id} no encontrado`,
    };
    return NextResponse.json(response, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: todo,
  });
}

const postSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional().default(false),
});

export async function PUT(request: NextRequest, { params }: Segments) {
  const { id } = await params;

  const todo = await getTodo(id);
  if (!todo) {
    const response: ErrorResponse = {
      success: false,
      error: `Todo con id ${id} no encontrado`,
    };
    return NextResponse.json(response, { status: 404 });
  }

  try {
    const { complete, description } = await postSchema.validate(
      await request.json()
    );

    const todoUpdated = await prisma.todos.update({
      where: { id },
      data: { complete, description },
    });

    return NextResponse.json({
      success: true,
      data: todoUpdated,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
