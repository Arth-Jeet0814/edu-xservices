import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  Languages,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatWeDoPillars, whatWeDoServices, whatWeDoStats } from "@/data/site";

const stepIcons = {
  BookOpen,
  Languages,
  Building2,
  FileCheck2,
  Compass,
  GraduationCap,
  ShieldCheck,
  Users,
};

export function WhatWeDoSection({ showStats = true, showPillars = true, className = "" }) {
  return (
    <section className={`section relative overflow-hidden bg-background py-16 lg:py-24 ${className}`} id="what-we-do">
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#B21941]/5 via-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 size-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B21941]/10 border border-[#B21941]/20 text-[#B21941] text-xs font-bold tracking-wide uppercase mb-4 animate-pulse-subtle">
            <Sparkles className="size-3.5" />
            <span>Edu-X Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
            What We Do?
          </h2>

          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
            The Right Support.{" "}
            <span className="text-[#B21941]">The Right Guidance.</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              The Right Results.
            </span>
          </p>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            African talent deserves global opportunity — with the right preparation. We guide students step-by-step from high school profile building through university acceptance, visa granting, and campus graduation.
          </p>
        </div>

        {/* Stats Strip */}
        {showStats && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {whatWeDoStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-5 text-center shadow-xs transition-all duration-300 hover:border-[#B21941]/40 hover:shadow-md"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B21941] tracking-tight group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-bold text-foreground">{stat.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        )}

        {/* 5 What We Do Service Cards */}
        <div className="mt-14 space-y-6">
          {whatWeDoServices.map((item, idx) => {
            const Icon = stepIcons[item.icon] ?? BookOpen;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/50 hover:shadow-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:justify-center">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#061A3A] text-white font-extrabold text-xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B21941]">
                      {item.step}
                    </div>
                    <span className="hidden lg:block text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                      Stage {item.step}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-0.5 text-xs font-bold text-[#B21941]">
                        {item.badge}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground italic">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground transition-colors group-hover:text-[#B21941]">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                      {item.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-2 grid gap-2.5 sm:grid-cols-3">
                      {item.points.map((pt) => (
                        <div
                          key={pt}
                          className="flex items-start gap-2 text-xs sm:text-sm font-medium text-foreground/90 bg-muted/40 rounded-xl p-2.5 border border-border/40 transition-colors group-hover:bg-muted/70"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action / Icon Badge */}
                  <div className="hidden xl:flex flex-col items-center justify-center pl-6 border-l border-border/60">
                    <div className="size-16 rounded-2xl bg-muted/60 flex items-center justify-center text-muted-foreground group-hover:text-[#B21941] group-hover:bg-[#B21941]/10 transition-all duration-300">
                      <Icon className="size-8" strokeWidth={1.7} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Pillars of Trust */}
        {showPillars && (
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#061A3A] via-[#092248] to-[#040e22] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 size-80 rounded-full bg-[#B21941]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E8A0B0] text-xs font-bold tracking-wide uppercase">
                  Edu-X Operating Philosophy
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                  Why Families &amp; Institutions Trust Edu-X Services
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  We reduce risk. We reduce stress. We increase opportunity.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {whatWeDoPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xs transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="text-[#E8A0B0] text-xs font-bold uppercase tracking-wider">
                      {pillar.highlight}
                    </div>
                    <h4 className="mt-2 text-lg font-bold text-white">{pillar.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Ready to Start Your Journey?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Studying abroad can feel overwhelming — let’s review your goals and build your study plan together.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="btn-interactive bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shadow-lg hover:shadow-[#B21941]/40 shrink-0"
                >
                  <Link to="/contact">
                    Book Your Consultation
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
