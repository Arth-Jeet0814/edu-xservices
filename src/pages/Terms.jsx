import { FileCheck2 } from "lucide-react";
import { contactInfo } from "@/data/site";
const title = "Terms & Conditions | Education eXcellence Services";
const description =
  "Terms of service, admissions advisory guidelines, and consultation standards for Education eXcellence Services.";

function TermsPage() {
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-16 text-white lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="container-page relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E8A0B0] text-xs font-bold tracking-wide uppercase mb-4">
            <FileCheck2 className="size-3.5 text-emerald-400" />
            <span>Advisory Standards &amp; Guidelines</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Admissions advisory terms, consultation guidelines, and student &amp; family standards for
            Education eXcellence Services.
          </p>
        </div>
      </section>

      <section className="section container-page max-w-3xl py-14">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Degree program, tuition, intake, scholarship, and eligibility data presented on this
            platform are indicative and compiled directly from verified university partner information. Final
            tuition fees, scholarship awards, and academic terms are specified within official institution letters of acceptance.
          </p>
          <p>
            Advisory guidance and visa interview coaching prepare students and families for maximum
            success; however, final admissions and student visa decisions remain the sovereign
            prerogative of the university and respective national immigration authorities.
          </p>
          <p>
            All applicant documentation provided must be genuine, complete, and verifiable.
            Education eXcellence Services operates an unyielding ethical standard to maintain our
            98% visa success record and top-tier university relationships.
          </p>
          <p>
            For questions regarding our advisory services or student enrollment, please reach out to{" "}
            <a
              href={`mailto:${contactInfo.portalEmail}`}
              className="text-[#B21941] font-semibold underline underline-offset-4"
            >
              {contactInfo.portalEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default TermsPage;
