'use client'
import { Button } from '@/components/ui/button'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import React from 'react'
import { toast } from 'sonner'
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-sidenav-background to-sidenav-background/50 border border-white/5 hover:border-blue/20 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue to-purple animate-pulse shrink-0" />
        <h1 className="text-sm font-semibold text-sky/80 uppercase tracking-wider">
          {title}
        </h1>
      </div>
      <div className="flex items-start gap-3 w-full">
        <p className="break-all text-base font-medium text-white/90 flex-1 leading-relaxed group-hover:text-sky transition-colors duration-300">
          {description}
        </p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(description);
            toast.success("Copied to clipboard!");
          }}
          className="shrink-0 p-2.5 rounded-lg bg-white/5 hover:bg-blue/20 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-blue/30"
          aria-label="Copy to clipboard"
        >
          <Image src="/icons/copy.svg" alt="copy" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const MeetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${MeetingId}?personal=true`;
  const { call } = useGetCallById(MeetingId!);
  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", MeetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${MeetingId}?personal=true`);

  }
  return (
    <section className="flex size-full flex-col gap-8 text-white animate-fade-in max-w-7xl">
      {/* Header Section */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue/10 via-purple/5 to-transparent border border-white/5">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue/20 to-purple/20 backdrop-blur-sm border border-white/10 shrink-0">
          <Image src="/icons/add-personal.svg" alt="personal room" width={32} height={32} />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold lg:text-4xl bg-gradient-to-r from-white via-sky to-blue bg-clip-text text-transparent">
            Personal Meeting Room
          </h1>
          <p className="text-sm text-white/60 mt-1.5">Your dedicated space for instant meetings</p>
        </div>
      </div>
      
      {/* Meeting Details Cards */}
      <div className="flex w-full flex-col gap-5">
        <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
        <Table title="Meeting ID" description={MeetingId!} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap pt-4">
        <Button 
          className="relative group bg-gradient-to-r from-blue to-blue/80 hover:from-blue/90 hover:to-blue/70 px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-blue/50 transition-all duration-300 hover:scale-105 overflow-hidden" 
          onClick={startRoom}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <span className="relative flex items-center gap-2">
            <Image src="/icons/Video.svg" alt="start" width={20} height={20} />
            Start Meeting
          </span>
        </Button>
        <Button 
          className="px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-[#252A41] to-[#1a1f35] hover:from-[#2a3047] hover:to-[#1f2439] border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300 hover:scale-105" 
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success("Link Copied to Clipboard!");
          }}
        >
          <span className="flex items-center gap-2">
            <Image src="/icons/copy.svg" alt="copy" width={20} height={20} />
            Copy Invite Link
          </span>
        </Button>
      </div>
    </section>
  )
}

export default PersonalRoom
