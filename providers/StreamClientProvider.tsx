'use client'
import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import {
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useState,useEffect } from "react";


export const StreamVideoProvider = ({children} : {children: React.ReactNode}) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || "";
  const {user , isLoaded} = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) {
      console.error("Stream API key is not set");
      return;
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
      id: user.id,
      name: user.username || user.firstName || "User",
      image: user.imageUrl,
      },
      tokenProvider: async () => {
      // Call the tokenProvider function and return the token
      const token = await tokenProvider();
      return token;
      },
    });
    setVideoClient(client);
  }, [user, isLoaded]);
  
  if (!videoClient) {
    return <Loader />;
  }

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};