import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  FolderCheck,
  Luggage,
  Plane,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatWeDoSection } from "@/components/site/WhatWeDoSection";
import { RealStoriesSection } from "@/components/site/RealStoriesSection";
import { Button } from "@/components/ui/button";
import { leadershipPrograms, processSteps, services } from "@/data/site";
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
            <span>Guiding Students &amp; Families</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Comprehensive Study Abroad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Services
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Edu-X Services provides end-to-end guidance for African students and their families.
            From academic matching and essay coaching to scholarship positioning, visa compliance,
            and pre-departure settlement.
          </p>
        </div>
      </section>

      {/* Core "What We Do" Section from edu-xservices.com */}
      <WhatWeDoSection />

      <section className="section container-page">
        <SectionHeading
          eyebrow="Student & Family Services"
          title="Personalized Guidance from Application to Campus"
          description="A complete advisory journey engineered for students and parents to navigate international admissions with clarity and confidence."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              className="btn-interactive bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shadow-md hover:shadow-[#B21941]/30"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leader Training & Student Development Programs (from edu-xservices.com) */}
      <section className="section bg-background border-t border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Structured Coaching for Long-Term Success"
            title="Leader Training & Mindset Development"
            description="Studying abroad requires more than ambition — it requires cultural intelligence, adaptability, and vision-driven leadership. We equip students with real experience, not just certificates."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPrograms.map((prog, i) => (
              <div
                key={prog.id}
                className="card-hover group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-10 place-items-center rounded-2xl bg-[#061A3A] text-white font-extrabold text-xs shadow-xs group-hover:bg-[#B21941] transition-colors">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] font-bold text-[#B21941] uppercase tracking-wider bg-[#B21941]/10 px-2.5 py-0.5 rounded-full">
                      Excellence
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-[#B21941] leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground italic mt-1">
                    {prog.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {prog.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border/50 pt-3">
                    {prog.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 text-[11px] font-semibold text-[#B21941]">
                  Edu-X Student Track
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories. Real Families. Real Results. Videos Section */}
      <RealStoriesSection />
    </>
  );
}

export default ServicesPage;
