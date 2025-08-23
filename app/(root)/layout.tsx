import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React from 'react'
import "@stream-io/video-react-sdk/dist/css/styles.css";



const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <StreamVideoProvider>
        {children}
    </StreamVideoProvider>
  )
}

export default layout
