import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Mock data for users
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more users as needed
];


//req is short for request
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "this is a get request" },
    { status: 200 }
  );
}
