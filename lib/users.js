import clientPromise from './mongodb';

export async function getUserByEmail(email) {
    const client = await clientPromise;
    const db = client.db('linkqueue');
    const user = await db.collection('users').findOne({ email });
    return user;
}

export async function createUser(userData) {
    const client = await clientPromise;
    const db = client.db('linkqueue');

    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const result = await db.collection('users').insertOne({
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    return result;
}

export async function updateUser(email, updates) {
    const client = await clientPromise;
    const db = client.db('linkqueue');

    const result = await db.collection('users').updateOne(
        { email },
        {
            $set: {
                ...updates,
                updatedAt: new Date()
            }
        }
    );

    return result;
}
