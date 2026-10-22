import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import eventImage from "@/assets/event-fair.jpg";
import { Button } from "@/components/ui/button";
import { events } from "@/data/site";
const title = "Upcoming Education Events, Expos and Webinars";
const description =
  "Join our education expos, scholarship days and live webinars to meet university delegates and get spot assessments.";
function EventsPage() {
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
            <CalendarDays className="size-3.5 text-emerald-400" />
            <span>Institutional Summits &amp; Forums</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Upcoming Institutional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Events &amp; Expos
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Meet selective university delegates in person, attend closed-door principal briefings,
            and access spot assessments through Education eXcellence Services.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article
              key={e.title}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
            >
              <div className="overflow-hidden h-36">
                <img
                  src={eventImage}
                  alt={e.title}
                  loading="lazy"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-primary-deep bg-primary-soft w-fit rounded-full px-2.5 py-1 text-xs font-semibold transition-colors group-hover:bg-[#B21941] group-hover:text-white">
                  {e.online ? "Online" : "In person"}
                </span>
                <h2 className="mt-3 text-base leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                  {e.title}
                </h2>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5 text-[#B21941]" /> {e.date} · {e.time}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" /> {e.location}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.description}</p>
                <Button
                  asChild
                  size="sm"
                  className="btn-interactive mt-5 bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  <Link to="/contact">Register Now</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventsPage;
