import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground/60 selection:bg-blue selection:text-white flex h-11 w-full min-w-0 rounded-xl border-2 border-white/10 bg-sidenav-background/50 px-4 py-2 text-base shadow-lg transition-all duration-300 outline-none backdrop-blur-sm file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-blue/50 focus:ring-4 focus:ring-blue/20 focus:bg-sidenav-background hover:border-white/20",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
