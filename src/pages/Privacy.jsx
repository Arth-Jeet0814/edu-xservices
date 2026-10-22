import { ShieldCheck } from "lucide-react";
import { contactInfo } from "@/data/site";
const title = "Privacy Policy | Education eXcellence Services";
const description =
  "How Education eXcellence Services collects, uses, and safeguards institutional and student information.";
function PrivacyPage() {
  return (
    <>
      <section className="relative bg-[#061A3A] pt-14 pb-16 text-white lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B21941] via-blue-900 to-transparent" />
        <div className="container-page relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E8A0B0] text-xs font-bold tracking-wide uppercase mb-4">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>Governance &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            How Education eXcellence Services collects, uses, and safeguards institutional and
            student information.
          </p>
        </div>
      </section>

      <section className="section container-page max-w-3xl py-14">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            We collect the details you submit through enquiry and consultation forms — name,
            academic credentials, contact details, preferred destinations, courses, and intakes —
            solely to provide institutional pathway coordination, counselling, and admission
            transmittal support.
          </p>
          <p>
            Your information is shared with verified partner universities only when you request
            formal application processing, and never with third parties for independent commercial
            marketing purposes.
          </p>
          <p>
            You can request access, correction, or deletion of your records at any time by
            contacting our compliance directorate at{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-[#B21941] font-semibold underline underline-offset-4"
            >
              {contactInfo.email}
            </a>
            .
          </p>
          <p>
            Our website uses strictly essential session handling and anonymous telemetry to ensure
            application stability and portal performance.
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;
