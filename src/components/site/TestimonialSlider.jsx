import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/site";
export function TestimonialSlider() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < t.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="bg-gradient-brand grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-foreground">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.place}</span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 hidden sm:flex" />
      <CarouselNext className="-right-3 hidden sm:flex" />
    </Carousel>
  );
}
