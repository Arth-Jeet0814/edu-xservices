import { ArrowRight, BookOpen } from "lucide-react";
import blogVisa from "@/assets/blog-visa.jpg";
import blogPlanning from "@/assets/blog-planning.jpg";
import blogScholarship from "@/assets/blog-scholarship.jpg";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/site";
const title = "Study Abroad Guides & Resources | Education eXcellence Services";
const description =
  "Practical admissions guides, visa advice, and scholarship resources for African students and parents from Education eXcellence Services.";
const images = {
  "blog-visa": blogVisa,
  "blog-planning": blogPlanning,
  "blog-scholarship": blogScholarship,
};
function BlogsPage() {
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
            <BookOpen className="size-3.5 text-[#B21941]" />
            <span>Practical Guidance for Students &amp; Families</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Study Abroad Guides &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              Admissions Advice
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Strategic advice, student visa preparation tips, and merit scholarship guides
            written for students and parents planning their university journey in North America.
          </p>
        </div>
      </section>

      <section className="section container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((b) => (
            <article
              key={b.slug}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={images[b.image]}
                  alt={b.title}
                  loading="lazy"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold text-[#B21941] uppercase tracking-wider">
                  {b.category}
                </span>
                <h2 className="mt-2 text-lg leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                  {b.title}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">{b.date}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.excerpt}</p>
                <Button
                  variant="link"
                  className="mt-4 w-fit px-0 text-[#061A3A] font-bold group/link"
                >
                  Read More{" "}
                  <ArrowRight className="size-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1.5 text-[#B21941]" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogsPage;
