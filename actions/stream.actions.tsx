'use server'

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
import dotenv from 'dotenv'

dotenv.config();

export const tokenProvider = async () => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    const apiSecret = process.env.STREAM_SEKRET_KEY;
    const user = await currentUser();
    if (!user) {
        throw new Error("User not authenticated");
    }
    if (!apiKey || !apiSecret) {
        throw new Error("Stream API key or secret is not set");
    }

    const client = new StreamClient(apiKey, apiSecret);
    const exp = Math.round(new Date().getTime()/1000) + 60 * 60; // 1 hour expiration
    const issued = Math.floor(Date.now()/1000)-60

    const token = client.generateUserToken({ 
        user_id: user.id,
        validity_in_seconds: 3600, // 1 hour expiration
        issued_at: issued,
        exp: exp,
    });

    return token;
}