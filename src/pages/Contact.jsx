import { Building2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/site";
const title = "Contact Us | Education eXcellence Services (Edu-X Services)";
const description =
  "Connect with Education eXcellence Services — International Department Framework in Dakar, Lagos, and Nairobi. Schedule an institutional consultation, call +221 33 848 38 12, or email partnerships@edu-xservices.com.";
function ContactPage() {
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
            <ShieldCheck className="size-3.5 text-[#B21941]" />
            <span>Institutional Engagement &amp; Pre-Screening</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Connect with the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 animate-gradient-shift">
              International Department
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Speak with our admissions advisors and regional compliance officers at Education
            eXcellence Services (Edu-X Services) to begin your academic pathway or partner school
            integration today.
          </p>
        </div>
      </section>

      {/* 3 Contact Highlights */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover group p-7 border border-border bg-card rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#B21941]/40">
              <div className="w-14 h-14 rounded-2xl bg-[#061A3A] text-white flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B21941]">
                <Phone className="size-6 text-emerald-400 transition-colors group-hover:text-white" />
              </div>
              <h3 className="font-bold text-base text-foreground mb-1 transition-colors group-hover:text-[#B21941]">
                Direct Telephone
              </h3>
              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="text-sm font-bold text-[#B21941] hover:underline mb-1"
              >
                {contactInfo.phone}
              </a>
              <span className="text-xs text-muted-foreground">
                Helpline for schools, counsellors &amp; families
              </span>
            </div>

            <div className="card-hover group p-7 border border-border bg-card rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#B21941]/40">
              <div className="w-14 h-14 rounded-2xl bg-[#061A3A] text-white flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B21941]">
                <Mail className="size-6 text-[#E8A0B0] transition-colors group-hover:text-white" />
              </div>
              <h3 className="font-bold text-base text-foreground mb-1 transition-colors group-hover:text-[#B21941]">
                Partnerships &amp; Admissions
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm font-bold text-[#B21941] hover:underline mb-0.5"
              >
                {contactInfo.email}
              </a>
              <a
                href={`mailto:${contactInfo.portalEmail}`}
                className="text-xs font-medium text-muted-foreground hover:underline"
              >
                {contactInfo.portalEmail}
              </a>
            </div>

            <div className="card-hover group p-7 border border-border bg-card rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#B21941]/40">
              <div className="w-14 h-14 rounded-2xl bg-[#061A3A] text-white flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B21941]">
                <MapPin className="size-6 text-[#B21941] transition-colors group-hover:text-white" />
              </div>
              <h3 className="font-bold text-base text-foreground mb-1 transition-colors group-hover:text-[#B21941]">
                Dakar Regional Hub
              </h3>
              <span className="text-xs font-semibold text-foreground mb-1">
                {contactInfo.address}
              </span>
              <span className="text-[11px] text-muted-foreground">
                Liaison: Dakar • Lagos • Nairobi • London
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting / Institutional Consultation Form Section */}
      <section
        id="book-meeting"
        className="py-14 bg-gradient-to-b from-white via-slate-50/40 to-white"
      >
        <div className="container-page max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B21941]/10 text-[#B21941] text-xs font-bold tracking-wide uppercase mb-3">
              Institutional Partnership &amp; Meeting Request
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#061A3A] tracking-tight">
              Book an Institutional Consultation Meeting
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Complete the institutional pre-screening criteria below. Our admissions leadership and
              compliance directorate evaluate institutional alignment and schedule an executive
              briefing within 24 to 48 hours.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Regional Directorate Office & Interactive Map */}
      <section className="py-14 bg-slate-50 border-t border-border">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="card-hover rounded-3xl border border-border bg-card p-8 shadow-sm space-y-5 transition-all duration-300 hover:border-[#B21941]/40">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase animate-pulse-subtle">
              Physical Presence &amp; Oversight
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <Building2 className="size-6 text-[#B21941]" /> Edu-X Services Regional Directorate
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Our regional directorate manages institutional screening, university partner
              pipelines, and compliance oversight across Francophone and Anglophone Africa.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                asChild
                size="sm"
                className="btn-interactive animate-pulse-subtle bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl h-11 px-5 shadow-sm hover:shadow-[#B21941]/30 cursor-pointer"
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 mr-2" /> WhatsApp Executive Line
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="btn-interactive text-xs font-semibold rounded-xl h-11 px-5 cursor-pointer"
              >
                <a href={`tel:${contactInfo.phoneClean}`}>
                  <Phone className="size-4 mr-2 text-emerald-600" /> Direct Office Line
                </a>
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-3xl border border-border overflow-hidden shadow-sm h-72 sm:h-80 transition-transform duration-500 hover:scale-[1.01]">
            <iframe
              title="Dakar Office Location"
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
