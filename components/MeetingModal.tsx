"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}


const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogTitle></DialogTitle>
      <DialogContent className="flex w-full max-w-[560px] flex-col gap-6 border border-white/10 bg-gradient-to-br from-sidenav-background via-background to-sidenav-background/80 px-8 py-10 text-white shadow-2xl backdrop-blur-xl">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-purple/5 to-transparent pointer-events-none rounded-lg" />
        
        <div className="relative flex flex-col gap-6 animate-fade-in">
          {image && (
            <div className="flex justify-center animate-scale-in">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue/20 to-purple/20 border border-white/10">
                <Image src={image} alt="checked" width={72} height={72} />
              </div>
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-tight bg-gradient-to-r from-white to-sky bg-clip-text text-transparent", className)}>
            {title}
          </h1>
          {children && (
            <div className="space-y-4">
              {children}
            </div>
          )}
          <Button
            className="relative group bg-gradient-to-r from-blue to-blue/80 hover:from-blue/90 hover:to-blue/70 text-white font-semibold py-6 text-base rounded-xl shadow-xl hover:shadow-blue/50 transition-all duration-300 hover:scale-105 overflow-hidden focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ pointerEvents: 'auto' }}
            onClick={handleClick}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              {buttonIcon && (
                <Image
                  src={buttonIcon}
                  alt="button icon"
                  width={16}
                  height={16}
                />
              )}
              {buttonText || "Schedule Meeting"}
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;