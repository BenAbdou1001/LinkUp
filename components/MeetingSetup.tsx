'use client'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({ setIsSetupComplete } : { setIsSetupComplete : (value:boolean) => void}) => {
  const [isMicCamToggledOn , setIsMicCamToggledOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-8 text-white bg-gradient-to-br from-background via-sidenav-background to-background p-6 animate-fade-in'>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className='text-4xl font-bold bg-gradient-to-r from-white via-sky to-blue bg-clip-text text-transparent'>Meeting Setup</h1>
        <p className="text-white/60 text-sm">Configure your audio and video settings</p>
      </div>
      
      {/* Video Preview */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl hover:border-blue/30 transition-all duration-300">
        <VideoPreview />
        {/* Decorative corner gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue/20 to-transparent pointer-events-none" />
      </div>
      
      {/* Controls */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md'>
        <label htmlFor='mic-cam-toggle' className='flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-sidenav-background to-sidenav-background/50 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group flex-1 w-full'>
          <input 
            id='mic-cam-toggle'
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            className="w-5 h-5 rounded border-2 border-white/30 bg-white/10 checked:bg-blue checked:border-blue cursor-pointer transition-all duration-200"
          />        
          <span className="font-medium text-sm group-hover:text-sky transition-colors duration-200">Join with mic and camera off</span>
        </label>
        <div className="shrink-0">
          <DeviceSettings />
        </div>
      </div>
      
      {/* Join Button */}
      <Button 
        className='relative group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 overflow-hidden'
        onClick={()=>{
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Join Meeting
        </span>
      </Button>
    </div>
  )
}

export default MeetingSetup
