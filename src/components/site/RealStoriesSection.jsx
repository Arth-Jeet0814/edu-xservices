import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  MapPin,
  Play,
  Quote,
  Sparkles,
  Star,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { realStoriesVideos, studentVoicesQuotes } from "@/data/site";

export function RealStoriesSection({ className = "" }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      className={`section relative overflow-hidden bg-background py-16 lg:py-24 ${className}`}
      id="real-stories"
    >
      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-[#B21941]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 size-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B21941]/10 border border-[#B21941]/20 text-[#B21941] text-xs font-bold tracking-wide uppercase mb-4 animate-pulse-subtle">
            <Video className="size-3.5 text-[#B21941]" />
            <span>Authentic Video Testimonials • Edu-X Services</span>
          </div>

          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Real Stories.{" "}
            <span className="text-[#B21941]">Real Families.</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Real Results.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Genuine video reflections, airport arrival welcomes, visa clearances, and parent
            perspectives from families who walked the study abroad journey with Education eXcellence
            Services.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {realStoriesVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group card-hover relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/50 hover:shadow-xl cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/75 backdrop-blur-xs px-2 py-0.5 text-[11px] font-bold text-white">
                  <Clock className="size-3" />
                  {video.duration}
                </span>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[#B21941]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide uppercase">
                  {video.category}
                </span>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-[#B21941] text-white shadow-lg transition-transform duration-300 group-hover:scale-115 group-hover:bg-white group-hover:text-[#B21941]">
                    <Play className="size-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B21941]">
                    <MapPin className="size-3.5 shrink-0" />
                    <span className="truncate">{video.destination}</span>
                  </div>

                  <h3 className="mt-2 text-base font-bold text-foreground transition-colors group-hover:text-[#B21941] line-clamp-2">
                    {video.person}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">{video.role}</p>

                  <p className="mt-3 text-xs italic text-muted-foreground leading-relaxed line-clamp-3">
                    "{video.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-[#B21941] group-hover:underline">
                  <span>Watch Video Story</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Voices — Featured Quotes from edu-xservices.com */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-soft text-[#B21941] text-xs font-bold tracking-wide uppercase">
              <Quote className="size-3.5" />
              Our Student Voices
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground">
              Direct Reflections from Our Global Community
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {studentVoicesQuotes.map((item) => (
              <div
                key={item.name}
                className="relative rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#B21941]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex rounded-full bg-[#B21941]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#B21941]">
                      {item.badge}
                    </span>
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="text-base font-bold text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#061A3A] via-[#092248] to-[#B21941]/90 p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8A0B0]">
              <Sparkles className="size-3.5" />
              Write Your Own Story
            </span>
            <h4 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Join Our Next Cohort of Scholars?
            </h4>
            <p className="mt-2 text-sm text-slate-200">
              Personalized guidance, guaranteed compliance vetting, and 100% pre-departure &amp; arrival support.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="btn-interactive bg-white text-[#061A3A] hover:bg-slate-100 font-bold rounded-xl shadow-lg shrink-0"
          >
            <Link to="/contact">
              Book Your Free Consultation
              <ArrowRight className="size-4 ml-2 text-[#B21941]" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-950 border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/90 text-white">
              <div>
                <span className="inline-block rounded-full bg-[#B21941] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-1">
                  {activeVideo.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full bg-white/10 p-2 text-slate-300 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="size-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-900/90 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">{activeVideo.person}</div>
                <div className="text-xs text-slate-400">
                  {activeVideo.role} • {activeVideo.destination}
                </div>
                <p className="mt-2 text-xs italic text-slate-300 max-w-lg">
                  "{activeVideo.quote}"
                </p>
              </div>
              <Button
                asChild
                size="sm"
                className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold rounded-xl shrink-0"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
