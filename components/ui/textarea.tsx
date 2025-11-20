import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground/60 selection:bg-blue selection:text-white flex field-sizing-content min-h-24 w-full rounded-xl border-2 border-white/10 bg-sidenav-background/50 px-4 py-3 text-base shadow-lg transition-all duration-300 outline-none backdrop-blur-sm resize-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-blue/50 focus:ring-4 focus:ring-blue/20 focus:bg-sidenav-background hover:border-white/20",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
