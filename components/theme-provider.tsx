"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { CircularReveal } from "./circular-reveal"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <CircularReveal />
      {children}
    </NextThemesProvider>
  )
}