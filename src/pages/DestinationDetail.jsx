import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { CheckCircle2 } from "lucide-react";
import { CourseFinder } from "@/components/site/CourseFinder";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courses, destinations, universities } from "@/data/site";
function CountryPage() {
  const { slug } = useParams();
  const d = destinations.find((item) => item.slug === slug);
  if (!d) return <NotFound />;
  const countryUniversities = universities.filter((u) => u.country === d.name);
  const countryCourses = courses.filter((c) => c.country === d.name);
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-20 text-white lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="container-page relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-5">
            <img
              src={`https://flagcdn.com/w160/${d.code}.png`}
              alt={`${d.name} flag`}
              width={96}
              height={64}
              className="h-12 w-18 rounded-xl object-cover shadow-xl ring-2 ring-white/30"
            />
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[#E8A0B0] border border-white/15 backdrop-blur-md">
              Global Study Destination
            </span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Study in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200">
              {d.name}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {d.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-sm shadow-lg"
            >
              <Link to="/contact">Request Institutional Briefing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white font-bold text-sm backdrop-blur-md shadow-sm transition-all"
            >
              <Link to="/courses">Browse {d.name} Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page -mt-8 pb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Fact label="Tuition" value={d.tuition} />
          <Fact label="Cost of living" value={d.costOfLiving} />
          <Fact label="Intakes" value={d.intakes.join(", ")} />
          <Fact label="Work rights" value={d.workRights} />
        </div>
      </section>

      <section className="section container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Why study here" title={`Why study in ${d.name}`} />
          <ul className="mt-6 space-y-3">
            {d.whyStudy.map((w) => (
              <li key={w} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <Block title="Education system" body={d.educationSystem} />
          <Block title="Scholarships" body={d.scholarships} />
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-bold">Visa process</h3>
            <ol className="mt-3 space-y-2">
              {d.visaProcess.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="bg-primary-soft text-primary-deep grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {countryUniversities.length ? (
        <section className="section bg-muted/50">
          <div className="container-page">
            <SectionHeading eyebrow="Universities" title={`Popular universities in ${d.name}`} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {countryUniversities.map((u) => (
                <div
                  key={u.id}
                  className="card-lift rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-base font-bold">{u.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{u.city}</p>
                  <p className="mt-3 text-sm font-semibold text-primary">{u.courses} courses</p>
                  <p className="text-xs text-muted-foreground">{u.ranking}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section container-page">
        <SectionHeading
          eyebrow="Course Finder"
          title={`Find courses in ${d.name}`}
          description={
            countryCourses.length
              ? "Filter live results by university, level, city, intake and tuition budget."
              : "Our counsellors can pull matching programs directly from partner institutions."
          }
        />
        <div className="mt-12">
          <CourseFinder lockedCountry={d.name} />
        </div>
      </section>

      <section className="section bg-muted/50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="FAQs" title={`${d.name} questions answered`} />
            <Accordion type="single" collapsible className="mt-6">
              {d.faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-sm font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <EnquiryForm defaultCountry={d.name} />
        </div>
      </section>
    </>
  );
}
function Fact({ label, value }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
function Block({ title, body }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

export default CountryPage;
