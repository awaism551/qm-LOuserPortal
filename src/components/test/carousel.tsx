"use client"
 
import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { cn } from "@/lib/utils"
 
type CarouselApi = UseEmblaCarouselType[1]
type CarouselOpts = Parameters<typeof useEmblaCarousel>[0]
 
const CarouselContext = React.createContext<{
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi | undefined
}>({
  carouselRef: () => {},
  api: undefined,
})
 
export function Carousel({
  opts,
  className,
  children,
}: {
  opts?: CarouselOpts
  className?: string
  children: React.ReactNode
}) {
  const [carouselRef, api] = useEmblaCarousel(opts)
 
  return (
<CarouselContext.Provider value={{ carouselRef, api }}>
<div className={cn("relative", className)}>
<div ref={carouselRef} className="overflow-hidden">
          {children}
</div>
</div>
</CarouselContext.Provider>
  )
}
 
export function CarouselContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
<div className={cn("flex", className)}>
      {children}
</div>
  )
}
 
export function CarouselItem({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
<div
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full", // default full width
        className
      )}
>
      {children}
</div>
  )
}