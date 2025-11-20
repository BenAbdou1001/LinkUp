"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      expand={true}
      richColors
      closeButton
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: 'group toast group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-sidenav-background group-[.toaster]:to-sidenav-background/80 group-[.toaster]:text-white group-[.toaster]:border-2 group-[.toaster]:border-white/10 group-[.toaster]:shadow-2xl group-[.toaster]:backdrop-blur-xl group-[.toaster]:rounded-xl group-[.toaster]:px-5 group-[.toaster]:py-4',
          description: 'group-[.toast]:text-white/70 group-[.toast]:text-sm',
          actionButton: 'group-[.toast]:bg-blue group-[.toast]:text-white group-[.toast]:rounded-lg group-[.toast]:px-3 group-[.toast]:py-2 group-[.toast]:font-semibold group-[.toast]:shadow-lg hover:group-[.toast]:bg-blue/80',
          cancelButton: 'group-[.toast]:bg-white/10 group-[.toast]:text-white group-[.toast]:rounded-lg group-[.toast]:px-3 group-[.toast]:py-2 hover:group-[.toast]:bg-white/20',
          closeButton: 'group-[.toast]:bg-white/10 group-[.toast]:text-white group-[.toast]:border-white/20 hover:group-[.toast]:bg-white/20 group-[.toast]:rounded-lg',
          success: 'group-[.toast]:border-green-500/30 group-[.toast]:bg-gradient-to-r group-[.toast]:from-green-500/10 group-[.toast]:via-sidenav-background group-[.toast]:to-sidenav-background/80 group-[.toast]:text-green-100',
          error: 'group-[.toast]:border-red-500/30 group-[.toast]:bg-gradient-to-r group-[.toast]:from-red-500/10 group-[.toast]:via-sidenav-background group-[.toast]:to-sidenav-background/80 group-[.toast]:text-red-100',
          warning: 'group-[.toast]:border-yellow-500/30 group-[.toast]:bg-gradient-to-r group-[.toast]:from-yellow-500/10 group-[.toast]:via-sidenav-background group-[.toast]:to-sidenav-background/80 group-[.toast]:text-yellow-100',
          info: 'group-[.toast]:border-blue/30 group-[.toast]:bg-gradient-to-r group-[.toast]:from-blue/10 group-[.toast]:via-sidenav-background group-[.toast]:to-sidenav-background/80 group-[.toast]:text-blue-100',
        },
      }}
      style={{
        '--normal-bg': 'hsl(var(--sidenav-background))',
        '--normal-text': 'hsl(var(--foreground))',
        '--normal-border': 'hsl(var(--border))',
      } as React.CSSProperties}
      {...props}
    />
  )
}

export { Toaster }
