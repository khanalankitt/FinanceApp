import mongoose from 'mongoose';
import { ConnectionStr } from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET () {
    await mongoose.connect(ConnectionStr);
    return NextResponse.json({ status: 'connected', result: true });
}