import { Link } from "react-router-dom";
import { Building2, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { destinations, universities } from "@/data/site";
const title = "Partner Universities — Compare Institutions Abroad";
const description =
  "Browse partner universities across Canada, Australia, the UK, USA, Ireland, Germany and Singapore with course counts, cities and rankings.";
function UniversitiesPage() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const results = universities.filter(
    (u) =>
      (!country || u.country === country) && u.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-16 text-white lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#B21941]/20 blur-3xl pointer-events-none animate-blob" />
        <div
          className="absolute top-1/2 -left-24 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div className="container-page relative z-10 text-center max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E8A0B0] text-xs font-bold tracking-wide uppercase mb-4 animate-pulse-subtle">
            <Building2 className="size-3.5 text-emerald-400" />
            <span>Continental Direct University Pipelines</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            189+ Selective{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Partner Universities
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Connect with selective, accredited global universities across 25 destination countries
            through the Education eXcellence Services (Edu-X Services) framework — bypassing
            independent intermediaries.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search universities"
            aria-label="Search universities"
            className="h-11 rounded-xl transition-all focus:scale-[1.01]"
          />
          <select
            aria-label="Filter by country"
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm sm:w-56 cursor-pointer"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">All countries</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((u) => (
            <div
              key={u.id}
              className="card-hover group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
            >
              <span className="bg-primary-soft text-primary-deep grid size-14 place-items-center rounded-2xl font-extrabold shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B21941] group-hover:text-white">
                {u.short}
              </span>
              <h2 className="mt-4 text-base leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                {u.name}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" /> {u.city}, {u.country}
              </p>
              <p className="mt-3 flex flex-1 items-start gap-2 text-sm font-semibold text-primary">
                <Building2 className="size-4" /> {u.courses} courses · {u.ranking}
              </p>
              <Button asChild variant="outline" size="sm" className="btn-interactive mt-5">
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          ))}
        </div>
        {!results.length ? (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No universities match that search.
          </p>
        ) : null}
      </section>

      <section className="section bg-muted/50">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Not listed?"
            title="We work with 500+ institutions worldwide"
            description="Tell us your target university and we will confirm partnership status and current entry requirements."
          />
          <Button
            asChild
            size="lg"
            className="btn-interactive animate-pulse-subtle mt-8 bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shadow-lg hover:shadow-[#B21941]/30"
          >
            <Link to="/contact">Ask a Counsellor</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default UniversitiesPage;
