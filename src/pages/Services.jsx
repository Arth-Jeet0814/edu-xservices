import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Building2,
  Compass,
  FileCheck2,
  FolderCheck,
  Luggage,
  Plane,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { processSteps, services } from "@/data/site";
const title = "Study Abroad Services — Counselling, Applications and Visa Support";
const description =
  "Career counselling, university and course selection, application assistance, visa guidance, scholarships and pre-departure support in one place.";
const icons = {
  Compass,
  Building2,
  BookOpen,
  FileCheck2,
  Plane,
  Award,
  FolderCheck,
  Luggage,
};
function ServicesPage() {
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
            <Award className="size-3.5 text-emerald-400" />
            <span>School-Embedded Framework</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Institutional Services &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Infrastructure
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Edu-X Services establishes and manages the international pathways function that elevates
            your institution's global offering. From admissions coordination to scholarship
            allocation and visa compliance.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = icons[s.icon] ?? Compass;
            return (
              <div
                key={s.title}
                className="card-hover group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
              >
                <div className="size-12 rounded-2xl bg-primary-soft flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B21941] group-hover:text-white">
                  <Icon
                    className="size-6 text-primary transition-colors group-hover:text-white"
                    strokeWidth={1.6}
                  />
                </div>
                <h2 className="mt-4 text-base font-bold transition-colors group-hover:text-[#B21941]">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-muted/50">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="A clear path, step by step" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="card-hover group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
              >
                <span className="bg-[#061A3A] grid size-11 place-items-center rounded-2xl text-sm font-extrabold text-white shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B21941]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-bold transition-colors group-hover:text-[#B21941]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="btn-interactive animate-pulse-subtle bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shadow-lg hover:shadow-[#B21941]/30"
            >
              <Link to="/contact">Book an Institutional Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
