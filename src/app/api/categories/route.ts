import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(Request) {
    const prisma = new PrismaClient();

    try {
        const categories = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        const errorText = { message: 'Failed to fetch categories', error: error };
        return new NextResponse(JSON.stringify(errorText), { status: 200 });
    } finally {
        await prisma.$disconnect();
    }
}
