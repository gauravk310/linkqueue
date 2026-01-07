import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUser } from '@/lib/users';

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        // Validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters long' },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const result = await createUser({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        return NextResponse.json(
            {
                message: 'User created successfully',
                userId: result.insertedId
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.message === 'User already exists') {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
