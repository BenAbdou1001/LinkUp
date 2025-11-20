'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Loader from './Loader';
import EndCallButton from './EndCallButton';
import { cn } from '@/lib/utils';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-background via-sidenav-background to-background text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative flex size-full items-center justify-center px-4 py-6">
        {/* Main video area */}
        <div className="flex size-full max-w-[1200px] items-center rounded-xl overflow-hidden">
          <CallLayout />
        </div>
        
        {/* Participants sidebar */}
        <div
          className={cn(
            'flex flex-col h-[calc(100vh-3rem)] w-80 ml-3 rounded-xl overflow-hidden bg-gradient-to-br from-sidenav-background to-sidenav-background/80 border border-white/10 backdrop-blur-md transition-all duration-500 ease-in-out',
            {
              'hidden opacity-0 translate-x-8': !showParticipants,
              'flex opacity-100 translate-x-0': showParticipants,
            }
          )}
        >
          {/* Custom header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-sky" />
              <h3 className="font-semibold text-sm">Participants</h3>
            </div>
            <button
              onClick={() => setShowParticipants(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close participants"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Participants list with custom styling */}
          <div className="flex-1 overflow-hidden participants-list-container">
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
          </div>
        </div>
      </div>
      
      {/* Enhanced control panel */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 px-4">
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-sidenav-background/95 backdrop-blur-md border border-white/10">
          {/* Main call controls */}
          <CallControls onLeave={() => router.push(`/`)} />

          {/* Layout selector */}
          <div className="h-6 w-px bg-white/20" />
          <DropdownMenu>
            <DropdownMenuTrigger className="group relative cursor-pointer rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 transition-all duration-200 border border-transparent hover:border-white/10">
              <div className="flex items-center gap-2">
                <LayoutList size={18} className="text-white group-hover:text-sky transition-colors" />
                <span className="text-xs font-medium hidden sm:inline">Layout</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-white/10 bg-sidenav-background/95 backdrop-blur-md text-white rounded-lg">
              {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-md transition-colors"
                    onClick={() =>
                      setLayout(item.toLowerCase() as CallLayoutType)
                    }
                  >
                    <span className="flex items-center gap-2">
                      {layout === item.toLowerCase() && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                      )}
                      {item}
                    </span>
                  </DropdownMenuItem>
                  {index < 2 && <DropdownMenuSeparator className="bg-white/10" />}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Stats button */}
          <CallStatsButton />

          {/* Participants toggle */}
          <button 
            onClick={() => setShowParticipants((prev) => !prev)}
            className={cn(
              "group relative cursor-pointer rounded-lg px-3 py-2 transition-all duration-200 border",
              showParticipants 
                ? "bg-blue/20 border-blue/30" 
                : "bg-white/5 hover:bg-white/10 border-transparent hover:border-white/10"
            )}
          >
            <div className="flex items-center gap-2">
              <Users size={18} className={cn(
                "transition-colors",
                showParticipants ? "text-sky" : "text-white group-hover:text-sky"
              )} />
              <span className="text-xs font-medium hidden sm:inline">People</span>
            </div>
          </button>

          {/* End call button */}
          {!isPersonalRoom && (
            <>
              <div className="h-6 w-px bg-white/20" />
              <EndCallButton />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;