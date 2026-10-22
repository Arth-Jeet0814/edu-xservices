import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { contactInfo, founderLetter, processSteps, whyChooseUs } from "@/data/site";
const title = "About Us | Education eXcellence Services (Edu-X Services)";
const description =
  "Education eXcellence Services is the private institutional international department framework built for selective schools and students worldwide.";
function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#061A3A] pt-16 pb-20 text-white lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#B21941]/20 blur-3xl pointer-events-none animate-blob" />
        <div
          className="absolute top-1/2 -left-24 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div className="container-page relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E8A0B0] text-xs font-bold tracking-wide uppercase mb-4 animate-pulse-subtle">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>School-Embedded International Department Framework</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl max-w-4xl leading-[1.1] text-white">
            An Institutional Infrastructure.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Not an Agency.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <strong className="text-white">Education eXcellence Services</strong> (
            <strong className="text-white">Edu-X Services</strong>) is a premier institutional
            framework that connects ambitious schools and students to 189+ selective universities
            worldwide. The platform coordinates what has historically been disconnected: student
            preparation, family guidance, school-level academic alignment, and university admissions
            expectations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="btn-interactive animate-pulse-subtle bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-sm shadow-lg hover:shadow-[#B21941]/40"
            >
              <Link to="/contact">Request a Partnership Briefing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-interactive border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white font-bold text-sm backdrop-blur-md shadow-sm transition-all"
            >
              <Link to="/courses">Explore Course Directory</Link>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">{contactInfo.programCount}</p>
              <p className="mt-1 text-xs text-slate-300">Academic Programs Globally</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">{contactInfo.countryCount}</p>
              <p className="mt-1 text-xs text-slate-300">Destination Countries</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">
                {contactInfo.universityCount}
              </p>
              <p className="mt-1 text-xs text-slate-300">Partner Universities</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">
                {contactInfo.visaSuccessRate}
              </p>
              <p className="mt-1 text-xs text-slate-300">Student Visa Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Overview Section */}
      <section className="section container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Institutional Standard"
              title="Beyond Traditional Recruitment: Embedded at the School Level"
              description="The model works at the school level. Education eXcellence Services Portal partners directly with vetted, high-standard schools across Africa, embedding an accredited international pathways department directly into the school's own academic infrastructure."
            />
            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Students who reach universities through our portal have been identified, prepared,
                and positioned through their school — not through an independent commercial agency
                or external recruiter.
              </p>
              <p>
                For universities, this means something specific: the students arriving through
                Education eXcellence Services Portal have been academically prepared, culturally
                oriented, and institutionally coordinated before they apply. They are not
                self-navigating a fragmented system. They are coming through a governed
                international pathway.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Direct line to 189+ selective universities",
                "Full visibility over live application statuses",
                "Dedicated parent transparency portal",
                "Verified credential transmittal & compliance",
                "Institutional fee waiver & fellowship access",
                "End-to-end arrival & on-campus support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-xs font-semibold text-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#B21941] mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-bold text-[#061A3A] mb-4 flex items-center gap-2">
              <ShieldCheck className="size-5 text-[#B21941]" /> Institutional Mandate &amp;
              Governance
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Access to the Edu-X Services network is extended to institutions that share our
              standards of rigor, stewardship, and international ambition. We equip member schools
              with the governance instrument academic leadership requires.
            </p>
            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#061A3A] text-white text-xs font-bold">
                  HQ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Dakar Regional Hub &amp; Headquarters
                  </h4>
                  <p className="text-xs text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#B21941] text-white text-xs font-bold">
                  Hubs
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Regional Liaison Network</h4>
                  <p className="text-xs text-muted-foreground">
                    Dakar • Lagos • Nairobi • London Liaison Office
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white text-xs font-bold">
                  98%
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Visa Compliance Directorate</h4>
                  <p className="text-xs text-muted-foreground">
                    Rigorous pre-compliance vetting and embassy interview preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Letter Section */}
      <section className="section bg-[#faf8fb] border-y border-border/80">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Founder Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="card-hover group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden transition-all duration-300 hover:border-[#B21941]/40">
                <div className="aspect-4/4.5 rounded-2xl overflow-hidden bg-[#061A3A] mb-6 relative">
                  <img
                    src={founderLetter.image}
                    alt={founderLetter.author}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = founderLetter.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A0B0] block">
                      Leadership &amp; Vision
                    </span>
                    <p className="text-lg font-bold">{founderLetter.author}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-bold text-[#061A3A] transition-colors group-hover:text-[#B21941]">
                    {founderLetter.author}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    {founderLetter.title}
                    <br />
                    <span className="text-slate-500 font-normal">{founderLetter.organization}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 transition-transform duration-300 group-hover:scale-[1.02]">
                    <span className="block text-[11px] font-bold text-[#B21941] uppercase">
                      Coverage
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {founderLetter.coverageStat || "25 Countries · 189 Universities"}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 transition-transform duration-300 group-hover:scale-[1.02]">
                    <span className="block text-[11px] font-bold text-emerald-600 uppercase">
                      Launch
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {founderLetter.launchStat || "Partner Schools · 2026"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter Body */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm card-hover transition-all duration-300">
              <div className="mb-6">
                <span className="text-[#B21941] font-bold text-xs uppercase tracking-widest block mb-1">
                  Founder's Letter
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#061A3A] tracking-tight">
                  {founderLetter.headline}
                </h2>
                <p className="text-xs text-muted-foreground italic mt-1">{founderLetter.tagline}</p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {founderLetter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                <div className="my-6 rounded-2xl bg-[#061A3A]/5 border-l-4 border-[#B21941] p-5 shadow-xs transition-transform duration-300 hover:scale-[1.01]">
                  <p className="text-base font-bold text-[#061A3A] italic">
                    "{founderLetter.quote}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base text-[#061A3A]">{founderLetter.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">{founderLetter.organization}</p>
                </div>
                <div className="size-11 rounded-full bg-[#061A3A] text-white flex items-center justify-center font-bold text-xs shadow-md animate-pulse-subtle">
                  Edu-X
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Process Steps */}
      <section className="section container-page">
        <SectionHeading
          eyebrow="Governance & Selection Process"
          title="The 4-Phase Institutional Onboarding Model"
          description="Edu-X Services is intentionally selective and typically available by invitation or pre-screening. Here is how partner schools activate their embedded international pathways department."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <div
              key={step.title}
              className="card-hover group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col justify-between transition-all duration-300 hover:border-[#B21941]/40"
            >
              <div>
                <span className="grid size-10 place-items-center rounded-2xl bg-[#061A3A] text-white font-extrabold text-sm mb-4 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B21941]">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2 transition-colors group-hover:text-[#B21941]">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-semibold text-[#B21941]">
                Institutional Milestone 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-muted/50 border-t border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Leading Schools Partner With Us"
            title="Engineered for Institutional Governance and Student Success"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="card-hover group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
              >
                <div className="size-11 rounded-xl bg-[#061A3A]/10 text-[#061A3A] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B21941] group-hover:text-white">
                  <ShieldCheck className="size-5 text-[#B21941] transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-[#B21941]">
                  {w.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#061A3A] text-white py-16 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-[#B21941]/20 blur-3xl pointer-events-none animate-blob" />
        <div
          className="absolute -bottom-24 -right-24 size-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div className="container-page text-center max-w-3xl relative z-10">
          <h2 className="text-2xl font-extrabold sm:text-4xl text-white">
            Partner with Education eXcellence Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Equip your lycée, college, or school group with a governed, accredited International
            Department infrastructure. Begin the pre-screening dialogue with our leadership team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-interactive animate-pulse-subtle bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-sm shadow-lg hover:shadow-[#B21941]/40"
            >
              <Link to="/contact">Request Institutional Briefing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-interactive border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white font-bold text-sm backdrop-blur-md shadow-sm transition-all"
            >
              <Link to="/courses">Search Global Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
