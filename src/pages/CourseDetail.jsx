import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { CalendarDays, CheckCircle2, Clock, Download, MapPin, Wallet } from "lucide-react";
import { toast } from "sonner";
import { CourseCard } from "@/components/site/CourseCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/site";
function CoursePage() {
  const { slug } = useParams();
  const c = courses.find((item) => item.slug === slug);
  if (!c) return <NotFound />;
  const related = courses.filter((x) => x.slug !== c.slug && x.category === c.category).slice(0, 3);
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-16 text-white lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="container-page relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#061A3A] grid size-16 shrink-0 place-items-center rounded-2xl bg-white text-lg font-extrabold shadow-xl">
              {c.universityShort}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#E8A0B0]">{c.university}</p>
              <p className="flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="size-3.5 text-emerald-400" /> {c.city}, {c.country}
              </p>
            </div>
          </div>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            {c.name}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-sm shadow-lg"
            >
              <Link to="/contact">Request Admission Counselling</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white font-bold text-sm shadow-sm transition-all"
              onClick={() => toast.success("Brochure request sent. Check your inbox shortly.")}
            >
              <Download className="size-4 mr-2" /> Download Syllabus &amp; Overview
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page -mt-8 pb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Fact icon={Clock} label="Duration" value={c.duration} />
          <Fact
            icon={Wallet}
            label="Tuition per year"
            value={`${c.currency} ${c.tuitionFee.toLocaleString()}`}
          />
          <Fact icon={CalendarDays} label="Intakes" value={c.intakes.join(", ")} />
          <Fact icon={CheckCircle2} label="English requirement" value={`IELTS ${c.ielts}`} />
        </div>
      </section>

      <section className="section container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold">Course overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.overview}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              PTE requirement: {c.pte}. Campus location: {c.city}, {c.country}.
            </p>
          </div>
          <List title="Eligibility" items={c.eligibility} />
          <List title="Course modules" items={c.modules} />
          <List title="Career opportunities" items={c.careers} />
        </div>
        <div className="lg:sticky lg:top-28">
          <EnquiryForm compact defaultCountry={c.country} defaultCourse={c.category} />
        </div>
      </section>

      {related.length ? (
        <section className="section bg-muted/50">
          <div className="container-page">
            <SectionHeading eyebrow="Related Courses" title="Students also considered" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <CourseCard key={r.slug} course={r} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
function Fact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <Icon className="size-5 text-primary" />
      <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
function List({ title, items }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursePage;
