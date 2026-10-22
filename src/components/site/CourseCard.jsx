import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CourseCard({ course }) {
  return (
    <article className="card-hover group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40">
      <div className="flex min-w-0 items-center gap-3">
        <span className="bg-primary-soft text-primary-deep grid size-12 shrink-0 place-items-center rounded-2xl text-sm font-extrabold shadow-xs transition-all duration-300 group-hover:bg-[#B21941] group-hover:text-white group-hover:rotate-3">
          {course.universityShort}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{course.university}</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3" /> {course.city}, {course.country}
          </p>
        </div>
      </div>

      <h3 className="mt-4 text-lg leading-snug font-bold text-foreground transition-colors group-hover:text-[#B21941]">
        {course.name}
      </h3>
      <span className="bg-primary-soft text-primary-deep mt-2 w-fit rounded-full px-2.5 py-1 text-xs font-semibold transition-transform duration-300 group-hover:scale-105">
        {course.level} · {course.category}
      </span>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="size-4 shrink-0 text-primary" /> {course.duration}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Wallet className="size-4 shrink-0 text-primary" /> {course.currency}{" "}
          {course.tuitionFee.toLocaleString()}
        </div>
        <div className="col-span-2 flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="size-4 shrink-0 text-primary" /> {course.intakes.join(", ")}
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        <Button asChild variant="outline" size="sm" className="btn-interactive flex-1">
          <Link to={`/courses/${course.slug}`}>View Details</Link>
        </Button>
        <Button
          asChild
          variant="cta"
          size="sm"
          className="btn-interactive flex-1 bg-[#B21941] hover:bg-[#8e1233] text-white"
        >
          <Link to="/contact">Apply Now</Link>
        </Button>
      </div>
    </article>
  );
}
