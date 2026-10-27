import { Sparkles } from "lucide-react";
import { CourseFinder } from "@/components/site/CourseFinder";
import { contactInfo } from "@/data/site";
const title = "Course Finder | Search 96,000+ Degrees | Education eXcellence Services";
const description =
  "Search across 96,083 international degree programs from verified selective universities worldwide. Check requirements, tuition, scholarships, and admission intakes.";
function CoursesPage() {
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-16 text-white lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-teal-900 to-transparent" />
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none animate-blob" />
        <div
          className="absolute top-1/2 -left-24 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div className="container-page relative z-10 text-center max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-4 animate-pulse-subtle">
            <Sparkles className="size-3.5" />
            <span>Global Partner Directory · {contactInfo.programCount} Programs</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Dream Degree Program
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Browse international programs from top partner institutions across 25 global
            destinations. Filter by country, study stream, degree level, tuition fees, and
            available scholarships.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <CourseFinder />
      </section>
    </>
  );
}

export default CoursesPage;
