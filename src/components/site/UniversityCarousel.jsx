import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { universities } from "@/data/site";
export function UniversityCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent className="-ml-4">
        {universities.map((u) => (
          <CarouselItem key={u.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="card-hover group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40">
              <span className="bg-primary-soft text-primary-deep grid size-14 place-items-center rounded-2xl text-base font-extrabold shadow-xs transition-all duration-300 group-hover:bg-[#B21941] group-hover:text-white group-hover:scale-105">
                {u.short}
              </span>
              <h3 className="mt-4 text-base leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                {u.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {u.city}, {u.country}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <Building2 className="size-4" /> {u.courses} courses
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{u.ranking}</p>
              <Button asChild variant="outline" size="sm" className="btn-interactive mt-5">
                <Link to="/universities">View University</Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 hidden sm:flex" />
      <CarouselNext className="-right-3 hidden sm:flex" />
    </Carousel>
  );
}
