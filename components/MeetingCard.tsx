"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constant";
import { toast } from "sonner"

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {


  return (
    <section className="group relative flex min-h-[280px] w-full flex-col justify-between rounded-[20px] bg-gradient-to-br from-sidenav-background to-sidenav-background/50 px-7 py-8 xl:max-w-[568px] border border-white/5 hover:border-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue/10 hover:scale-[1.02] overflow-hidden animate-fade-in">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <article className="relative z-10 flex flex-col gap-5">
        <div className="w-fit p-3 rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 backdrop-blur-sm border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Image src={icon} alt="upcoming" width={28} height={28} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight group-hover:text-sky transition-colors duration-300">{title}</h1>
            <p className="text-base font-normal text-white/70 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {date}
            </p>
          </div>
        </div>
      </article>
      <article className={cn("relative z-10 flex justify-center", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <div
              key={index}
              className={cn("transition-transform duration-300 hover:scale-110 hover:z-10", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            >
              <Image
                src={img}
                alt="attendees"
                width={40}
                height={40}
                className="rounded-full border-2 border-sidenav-background shadow-lg"
              />
            </div>
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[3px] border-sidenav-background bg-gradient-to-br from-[#1E2757] to-[#0E1530] text-sm font-semibold shadow-lg hover:scale-110 transition-transform duration-300">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-3">
            <Button 
              onClick={handleClick} 
              className="rounded-xl bg-gradient-to-r from-blue to-blue/80 hover:from-blue/90 hover:to-blue/70 px-4 py-2 font-semibold shadow-lg hover:shadow-blue/50 transition-all duration-300 hover:scale-105"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={12} height={12} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast.success("Link Copied!", {
                  description: "Meeting link has been copied to your clipboard"
                });
              }}
              className="rounded-xl bg-gradient-to-r from-[#252A41] to-[#1a1f35] hover:from-[#2a3047] hover:to-[#1f2439] px-4 py-2 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={12}
                height={12}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
