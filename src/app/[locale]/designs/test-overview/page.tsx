"use client"
 
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/test/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
 
export default function ScrollbarCarouselWithAlignedArrows() {
  const containerRef = React.useRef<HTMLDivElement>(null)
 
  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }
  }
 
  return (
<div className="w-full">
<div className="flex items-center gap-2">
        {/* Scrollable area */}
<div
          ref={containerRef}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex-1"
>
<Carousel opts={{ align: "start" }}>
<CarouselContent>
              {Array.from({ length: 12 }).map((_, index) => (
<CarouselItem
                  key={index}
                  className="basis-1/3 flex-shrink-0 border rounded-lg bg-gray-100 p-4 text-center"
>
                  Item {index + 1}
</CarouselItem>
              ))}
</CarouselContent>
</Carousel>
</div>
 
        {/* Arrow controls aligned with scrollbar */}
<div className="flex gap-1">
<Button
            size="icon"
            variant="outline"
            onClick={() => scrollBy(-200)}
>
<ChevronLeft className="h-4 w-4" />
</Button>
<Button
            size="icon"
            variant="outline"
            onClick={() => scrollBy(200)}
>
<ChevronRight className="h-4 w-4" />
</Button>
</div>
</div>
</div>
  )
}