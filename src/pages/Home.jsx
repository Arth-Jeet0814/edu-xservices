import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  CreditCard,
  Cpu,
  FileCheck2,
  FolderCheck,
  Globe,
  HeartPulse,
  Hotel,
  Luggage,
  MapPin,
  MessageCircle,
  Palette,
  Plane,
  Search,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-students.jpg";
import counsellingImage from "@/assets/counselling.jpg";
import campusImage from "@/assets/campus.jpg";
import eventImage from "@/assets/event-fair.jpg";
import blogVisa from "@/assets/blog-visa.jpg";
import blogPlanning from "@/assets/blog-planning.jpg";
import blogScholarship from "@/assets/blog-scholarship.jpg";
import { CountUp } from "@/components/site/CountUp";
import { CourseFinder } from "@/components/site/CourseFinder";
import { DestinationCard } from "@/components/site/DestinationCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { UniversityCarousel } from "@/components/site/UniversityCarousel";
import { RevolvingEarth } from "@/components/site/RevolvingEarth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  blogs,
  contactInfo,
  destinations,
  educationLevels,
  events,
  intakeOptions,
  processSteps,
  services,
  whyChooseUs,
} from "@/data/site";
const title = "Education eXcellence Services — Academic Mobility & Global Pathways";
const description =
  "Guiding Students. Creating Futures. Changing Lives. Connect to 189+ selective universities worldwide across 25 countries with Education eXcellence Services.";
const categoryIcons = {
  "Business and Management": Briefcase,
  Engineering: Wrench,
  "Information Technology": Cpu,
  Healthcare: HeartPulse,
  "Data Science": Search,
  Hospitality: Hotel,
  Finance: CreditCard,
  "Arts and Design": Palette,
};
const serviceIcons = {
  Compass,
  Building2,
  BookOpen,
  FileCheck2,
  Plane,
  Award,
  FolderCheck,
  Luggage,
};
const blogImages = {
  "blog-visa": blogVisa,
  "blog-planning": blogPlanning,
  "blog-scholarship": blogScholarship,
};
const stats = [
  { label: "Destination Countries", value: 25, suffix: "+", icon: MapPin },
  { label: "Selective Universities", value: 189, suffix: "+", icon: Building2 },
  { label: "Academic Programs", value: 96083, suffix: "+", icon: BookOpen },
  { label: "Visa Success Rate", value: 98, suffix: "%", icon: Users },
];
function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Destinations />
      <Finder />
      <FeaturedUniversities />
      <PopularCourses />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Events />
      <Blogs />
      <CtaBanner />
      <Contact />
    </>
  );
}
function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({ country: "", name: "", level: "", intake: "" });
  const [viewMode, setViewMode] = useState("globe"); // "globe" (revolving earth trial) or "campus"

  return (
    <section className="relative bg-gradient-to-b from-[#01040a] via-[#020713] to-[#040e22] py-14 text-white lg:py-20 overflow-hidden">
      {/* Deep Space Ambient Starfield & Nebula Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/30 via-[#B21941]/20 to-transparent" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-blob" />
      <div
        className="absolute top-1/2 -left-24 size-80 rounded-full bg-[#B21941]/15 blur-3xl pointer-events-none animate-blob"
        style={{ animationDelay: "3s" }}
      />

      {/* Subtle Star Particle Texture */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px), radial-gradient(rgba(147, 197, 253, 0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px, 88px 88px",
          backgroundPosition: "0 0, 22px 22px",
        }}
      />

      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 text-xs font-bold text-[#E8A0B0] shadow-sm tracking-wide animate-pulse-subtle">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Institutional Department Framework
          </span>
          <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl xl:text-6xl tracking-tight">
            Built for schools that raise the standard of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              African education.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg leading-relaxed font-normal">
            Engineered to connect them to the world’s most selective universities. A purpose-built
            institutional framework equipping selected African schools with structured pathways to
            189+ universities across 25 countries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              <Link to="/courses">
                <Search className="size-4 mr-1.5" /> Search 96,000+ Courses
              </Link>
            </Button>
          </div>

          <form
            className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/courses");
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <select
                aria-label="Country"
                className="h-11 rounded-xl border border-white/20 bg-white text-slate-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B21941]"
                value={query.country}
                onChange={(e) => setQuery({ ...query, country: e.target.value })}
              >
                <option value="">Preferred Destination</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
              <Input
                aria-label="Course name"
                placeholder="Degree or field of study..."
                className="h-11 rounded-xl bg-white text-slate-800 border-white/20 placeholder:text-slate-400"
                value={query.name}
                onChange={(e) => setQuery({ ...query, name: e.target.value })}
              />
              <select
                aria-label="Education level"
                className="h-11 rounded-xl border border-white/20 bg-white text-slate-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B21941]"
                value={query.level}
                onChange={(e) => setQuery({ ...query, level: e.target.value })}
              >
                <option value="">Study Level</option>
                {educationLevels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <select
                aria-label="Intake"
                className="h-11 rounded-xl border border-white/20 bg-white text-slate-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B21941]"
                value={query.intake}
                onChange={(e) => setQuery({ ...query, intake: e.target.value })}
              >
                <option value="">Target Intake</option>
                {intakeOptions.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              className="btn-interactive animate-pulse-subtle mt-3.5 w-full bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shadow-lg hover:shadow-[#B21941]/30 transition-all cursor-pointer"
              size="lg"
            >
              <Search className="size-4 mr-2" /> Find Program in Global Directory
            </Button>
          </form>
        </div>

        <div className="relative animate-fade-in flex flex-col items-center">
          {/* Trial View Mode Toggle */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md self-center z-20">
            <button
              type="button"
              onClick={() => setViewMode("globe")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "globe"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Globe className="size-3.5 animate-spin-slow" /> Revolving Earth (Trial)
            </button>
            <button
              type="button"
              onClick={() => setViewMode("campus")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "campus"
                  ? "bg-white/25 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Campus Photo
            </button>
          </div>

          {/* Visual Display: Revolving Earth or Campus Photo */}
          {viewMode === "globe" ? (
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center py-2">
              <RevolvingEarth size={400} className="w-full max-w-[400px]" />

              {/* Floating Stat Badges with Sleek Dark Glassmorphism */}
              <div className="animate-float-soft absolute -top-1 -left-2 hidden rounded-2xl border border-white/15 bg-slate-900/85 backdrop-blur-md p-3.5 shadow-2xl sm:block text-white transition-transform duration-300 hover:scale-110 z-20">
                <p className="text-cyan-400 text-2xl font-extrabold">{contactInfo.countryCount}</p>
                <p className="text-[11px] text-slate-300 font-medium">Destination Countries</p>
              </div>

              <div className="animate-float-delayed absolute -right-2 top-1/4 hidden rounded-2xl border border-white/15 bg-slate-900/85 backdrop-blur-md p-3.5 shadow-2xl sm:block text-white transition-transform duration-300 hover:scale-110 z-20">
                <p className="text-emerald-400 text-2xl font-extrabold">
                  {contactInfo.universityCount}
                </p>
                <p className="text-[11px] text-slate-300 font-medium">Partner Universities</p>
              </div>

              <div className="animate-float-soft absolute -bottom-3 left-2 hidden rounded-2xl border border-white/15 bg-slate-900/85 backdrop-blur-md p-3.5 shadow-2xl sm:block text-white transition-transform duration-300 hover:scale-110 z-20">
                <p className="text-[#E8A0B0] text-2xl font-extrabold">{contactInfo.programCount}</p>
                <p className="text-[11px] text-slate-300 font-medium">Verified Programs</p>
              </div>

              <div className="animate-float-delayed absolute right-4 -bottom-4 hidden rounded-2xl border border-white/15 bg-slate-900/85 backdrop-blur-md p-3.5 shadow-2xl lg:block text-white transition-transform duration-300 hover:scale-110 z-20">
                <p className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="size-3.5 animate-pulse" /> 98% Visa Success Rate
                </p>
                <p className="text-[10px] text-slate-400">Compliance &amp; Legal Directorate</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src={heroImage}
                  alt="African students on university campus"
                  width={1400}
                  height={1100}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="animate-float-soft absolute -top-4 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block text-slate-900 transition-transform duration-300 hover:scale-110">
                <p className="text-[#B21941] text-2xl font-extrabold">{contactInfo.countryCount}</p>
                <p className="text-xs text-slate-500 font-semibold">Destination Countries</p>
              </div>
              <div className="animate-float-delayed absolute -right-3 top-1/3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block text-slate-900 transition-transform duration-300 hover:scale-110">
                <p className="text-[#061A3A] text-2xl font-extrabold">
                  {contactInfo.universityCount}
                </p>
                <p className="text-xs text-slate-500 font-semibold">Partner Universities</p>
              </div>
              <div className="animate-float-soft absolute -bottom-5 left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block text-slate-900 transition-transform duration-300 hover:scale-110">
                <p className="text-[#B21941] text-2xl font-extrabold">{contactInfo.programCount}</p>
                <p className="text-xs text-slate-500 font-semibold">Verified Programs</p>
              </div>
              <div className="animate-float-delayed absolute right-8 -bottom-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:block text-slate-900 transition-transform duration-300 hover:scale-110">
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                  <CheckCircle2 className="size-4 animate-pulse" /> 98% Visa Success Rate
                </p>
                <p className="text-xs text-muted-foreground">Compliance &amp; Legal Directorate</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function Stats() {
  return (
    <section className="container-page -mt-6 pb-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-hover group rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
          >
            <span className="bg-primary-soft mx-auto grid size-12 place-items-center rounded-2xl shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B21941] group-hover:text-white">
              <s.icon className="size-5 text-primary transition-colors group-hover:text-white" />
            </span>
            <p className="text-primary-deep mt-4 text-3xl font-extrabold transition-colors group-hover:text-[#B21941]">
              <CountUp to={s.value} />
              {s.suffix}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="section container-page grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative group">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-[#061A3A] shadow-[var(--shadow-card)] transition-transform duration-700 group-hover:scale-[1.01]">
          <img
            src={contactInfo.founderImage}
            alt={`${contactInfo.founder} - ${contactInfo.founderRole}`}
            loading="lazy"
            width={1200}
            height={900}
            onError={(e) => {
              e.currentTarget.src = counsellingImage;
            }}
            className="aspect-4/3 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="animate-float-soft absolute right-5 -bottom-6 hidden rounded-2xl bg-[#061A3A] p-5 text-white shadow-[var(--shadow-float)] sm:block border border-white/10 transition-transform duration-300 hover:scale-110">
          <p className="text-2xl font-extrabold text-emerald-400">98%</p>
          <p className="text-xs text-slate-300">Visa Success Rate</p>
        </div>
      </div>
      <div>
        <SectionHeading
          align="left"
          eyebrow="Beyond Traditional Recruitment"
          title="An Institutional Standard, Not a Service"
          description="Education eXcellence Services (Edu-X Services) is the private institutional infrastructure built for ambitious schools, students, and colleges — designed to give each member full visibility, full control, and full credit over the international trajectory of every student under its care."
        />
        <p className="mt-4 text-xs font-semibold text-[#B21941]">
          We are not an agency. We are not a marketplace. Edu-X Services is the governance
          instrument academic leadership and ambitious families trust.
        </p>
        <ul className="mt-6 space-y-3.5">
          {[
            "Every outbound student's profile, aspirations, and live application status",
            "A direct line to 189+ selective universities across Europe, Asia, America, and the UK",
            "Verified credential transmittal and compliance vetting for 98% visa approvals",
            "End-to-end arrival and campus integration support under your school's brand",
          ].map((point) => (
            <li
              key={point}
              className="flex gap-3 transition-transform duration-200 hover:translate-x-1.5"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#B21941]" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="btn-interactive bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-[#B21941]/30"
          >
            <Link to="/about">
              View the Framework{" "}
              <ArrowRight className="size-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-interactive text-xs font-semibold rounded-xl"
          >
            <Link to="/contact">Request Private Briefing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
function Destinations() {
  return (
    <section className="section bg-muted/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Study Destinations"
          title="Global Academic Pathways across 25 Countries"
          description="Structured routes to world-class universities in the USA, UK, Canada, Australia, Germany, France, and beyond."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Finder() {
  return (
    <section className="section container-page" id="course-finder">
      <SectionHeading
        eyebrow="Global Course Directory"
        title="Find Your Program Across 96,083 Degrees"
        description="Filter selective programs across 25 global destinations with live tuition fees, scholarship availability, and instant application inquiry."
      />
      <div className="mt-12">
        <CourseFinder />
      </div>
    </section>
  );
}
function FeaturedUniversities() {
  return (
    <section className="section bg-muted/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Universities"
          title="Institutions our students join"
          description="Direct partnerships mean faster offers, clearer requirements and better scholarship access."
        />
        <div className="mt-12 px-1">
          <UniversityCarousel />
        </div>
      </div>
    </section>
  );
}
function PopularCourses() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Popular Courses"
        title="Explore in-demand study areas"
        description="Course categories our students apply to most, mapped to strong graduate outcomes."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(categoryIcons).map(([category, Icon]) => (
          <div
            key={category}
            className="card-hover group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
          >
            <span className="bg-primary-soft grid size-12 place-items-center rounded-2xl shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B21941] group-hover:text-white">
              <Icon className="size-5 text-primary transition-colors group-hover:text-white" />
            </span>
            <h3 className="mt-4 flex-1 text-base font-bold transition-colors group-hover:text-[#B21941]">
              {category}
            </h3>
            <Button asChild variant="outline" size="sm" className="btn-interactive mt-5 w-fit">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
function Services() {
  return (
    <section className="section bg-muted/50">
      <div className="container-page">
        <SectionHeading eyebrow="Our Services" title="Support at every stage of your application" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon] ?? Compass;
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
                <h3 className="mt-4 text-base font-bold transition-colors group-hover:text-[#B21941]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Selection & Activation"
        title="The 4-Phase Institutional Partnership Model"
        description="Edu-X Services partners with premier secondary and higher education institutions to build direct pathways."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <span className="grid size-11 place-items-center rounded-2xl text-sm font-extrabold bg-[#061A3A] text-white">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-semibold text-[#B21941]">
              Phase 0{i + 1} Milestone
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
function WhyChooseUs() {
  return (
    <section className="section bg-muted/50">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Engineered for Institutional Excellence"
            description="Every element of the Edu-X Services framework is engineered to strengthen institutional credibility, deepen parent confidence, and elevate international standing."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-[#B21941]" />
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={campusImage}
          alt="University campus building at golden hour with students on the lawn"
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
        />
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="section container-page">
      <SectionHeading eyebrow="Leadership Endorsements" title="What African School Leaders Say" />
      <div className="mt-12 px-1">
        <TestimonialSlider />
      </div>
    </section>
  );
}
function Events() {
  return (
    <section className="section bg-muted/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Institutional Events"
          title="Summits, Round-tables &amp; Briefings"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <span className="bg-[#061A3A]/10 text-[#061A3A] w-fit rounded-full px-2.5 py-1 text-xs font-bold transition-colors group-hover:bg-[#B21941]/10 group-hover:text-[#B21941]">
                  {e.online ? "Online Briefing" : "Regional Hub"}
                </span>
                <h3 className="mt-3 text-base leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                  {e.title}
                </h3>
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
                  <Link to="/events">Register Delegation</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Blogs() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Insights &amp; Analysis"
        title="Governance &amp; Student Mobility Briefings"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blogs.map((b) => (
          <article
            key={b.slug}
            className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40"
          >
            <div className="overflow-hidden h-48">
              <img
                src={blogImages[b.image]}
                alt={b.title}
                loading="lazy"
                width={1000}
                height={700}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-bold text-[#B21941] uppercase tracking-wider">
                {b.category}
              </span>
              <h3 className="mt-2 text-lg leading-snug font-bold transition-colors group-hover:text-[#B21941]">
                {b.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.date}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.excerpt}</p>
              <Button
                asChild
                variant="link"
                className="mt-4 w-fit px-0 text-[#061A3A] font-bold group/link"
              >
                <Link to="/blogs" className="flex items-center">
                  Read Analysis{" "}
                  <ArrowRight className="size-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1.5 text-[#B21941]" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function CtaBanner() {
  return (
    <section className="container-page pb-16">
      <div className="bg-[#061A3A] overflow-hidden rounded-[2.5rem] px-6 py-14 text-center text-white shadow-2xl sm:px-12 border border-white/10 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-[#B21941]/20 blur-3xl pointer-events-none animate-blob" />
        <div
          className="absolute -bottom-24 -right-24 size-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-widest bg-white/10 text-[#E8A0B0] mb-4 animate-pulse-subtle">
            Private Institutional Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Your Institution. Our Infrastructure. Their Future.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Edu-X Services partners with forward-thinking schools to deliver a structured, globally
            connected pathway to higher education — with the institutional rigor, visibility, and
            credibility that leading schools demand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="btn-interactive animate-pulse-subtle bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-[#B21941]/40"
            >
              <Link to="/contact">Request Institutional Briefing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-interactive border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white text-xs font-semibold rounded-xl backdrop-blur-md shadow-sm transition-all"
            >
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4 mr-1.5" /> WhatsApp Executive Line
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="section bg-slate-50/70 border-t border-border" id="enquiry">
      <div className="container-page max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeading
            align="center"
            eyebrow="Institutional Consultation"
            title="Book a Meeting with our International Directorate"
            description="Institutional partners, lycée heads, and university recruiters: submit your institutional requirements for cohort planning, bilateral agreements, and direct student placement."
          />
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

export default Index;
