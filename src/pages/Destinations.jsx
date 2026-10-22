import { Globe } from "lucide-react";
import { DestinationCard } from "@/components/site/DestinationCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { destinations } from "@/data/site";
const title = "Study Destinations — 12 Countries for International Students";
const description =
  "Compare Canada, Australia, the UK, USA, Ireland, Germany and more: tuition, intakes, work rights and visa steps for each study destination.";
function DestinationsPage() {
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
            <Globe className="size-3.5 text-emerald-400" />
            <span>Continental &amp; Global Mobility</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            25 Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Study Destinations
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Explore premier study destinations with Education eXcellence Services (Edu-X Services).
            Compare tuition costs, living expenses, post-study work rights, and partner universities
            worldwide.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </div>
      </section>

      <section className="section bg-slate-50/70 border-t border-border">
        <div className="container-page max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionHeading
              align="center"
              eyebrow="Institutional Cohorts & Destinations"
              title="Compare Global Destinations with our International Directorate"
              description="Discuss pathway alignment, bilateral visa compliance, and destination-specific university placement cohorts."
            />
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

export default DestinationsPage;
