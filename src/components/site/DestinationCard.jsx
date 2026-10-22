import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const gradients = [
  "from-[oklch(0.55_0.15_255)] to-[oklch(0.72_0.12_215)]",
  "from-[oklch(0.5_0.16_268)] to-[oklch(0.68_0.13_200)]",
  "from-[oklch(0.45_0.14_250)] to-[oklch(0.7_0.14_230)]",
  "from-[oklch(0.52_0.15_240)] to-[oklch(0.74_0.12_190)]",
];
export function DestinationCard({ destination, index }) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
    >
      <div
        className={`relative flex h-36 items-end bg-linear-to-br p-5 overflow-hidden ${gradients[index % gradients.length]}`}
      >
        <span className="text-primary-deep absolute top-4 right-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold shadow-xs transition-transform duration-300 group-hover:scale-105">
          {destination.universities}+ universities
        </span>
        <img
          src={`https://flagcdn.com/w80/${destination.code}.png`}
          alt={`${destination.name} flag`}
          loading="lazy"
          width={56}
          height={38}
          className="h-9 w-14 rounded-md object-cover ring-2 ring-white/70 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-[#B21941]">
          {destination.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-primary">{destination.tagline}</p>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{destination.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Explore Courses
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2" />
        </span>
      </div>
    </Link>
  );
}
