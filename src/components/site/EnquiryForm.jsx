import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const defaultFormState = {
  institutionName: "",
  institutionType: "",
  ownershipType: "",
  curriculumType: "",
  institutionalPositioning: "",
  mainLanguage: "",
  country: "",
  studentPopulation: "",
  internationalOrientation: "",
  parentMarketType: "",
  contactFullName: "",
  decisionMakerType: "",
  contactTitle: "",
  email: "",
  phone: "",
  whySeeking: "",
};

export function EnquiryForm({
  defaultCountry = "",
  defaultCourse = "",
  defaultInstitution = "",
  compact = false,
  onSuccess,
}) {
  const [form, setForm] = useState({
    ...defaultFormState,
    country: defaultCountry || "",
    institutionName:
      defaultInstitution || (defaultCourse ? `${defaultCourse} Institutional Cohort` : ""),
    whySeeking: defaultCourse
      ? `Seeking institutional partnership for degree cohort: ${defaultCourse}`
      : "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.institutionName.trim()) errs.institutionName = "Institution name is required";
    if (!form.institutionType) errs.institutionType = "Select institution type";
    if (!form.ownershipType) errs.ownershipType = "Select ownership type";
    if (!form.curriculumType) errs.curriculumType = "Select curriculum type";
    if (!form.institutionalPositioning) errs.institutionalPositioning = "Select positioning";
    if (!form.mainLanguage) errs.mainLanguage = "Select main language";
    if (!form.country) errs.country = "Select country";
    if (!form.studentPopulation) errs.studentPopulation = "Select population range";
    if (!form.internationalOrientation) errs.internationalOrientation = "Select orientation level";
    if (!form.parentMarketType) errs.parentMarketType = "Select parent market type";
    if (!form.contactFullName.trim()) errs.contactFullName = "Contact full name is required";
    if (!form.decisionMakerType) errs.decisionMakerType = "Select decision-maker type";
    if (!form.contactTitle.trim()) errs.contactTitle = "Contact title is required";
    if (!form.email.trim() || !form.email.includes("@")) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone / WhatsApp is required";
    if (!form.whySeeking.trim()) errs.whySeeking = "Please specify reason for seeking partnership";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please complete all required fields (*)");
      return;
    }

    setIsSubmitting(true);

    try {
      // Store in localStorage under Edu-X Services key
      const existing = JSON.parse(localStorage.getItem("edux_institutional_enquiries") || "[]");
      const record = {
        ...form,
        submittedAt: new Date().toISOString(),
        id: `edux-req-${Date.now()}`,
      };
      existing.unshift(record);
      localStorage.setItem("edux_institutional_enquiries", JSON.stringify(existing));

      toast.success("Institutional Consultation Request Submitted", {
        description: `Thank you, ${form.contactFullName}! Your meeting request has been received under strict confidentiality.`,
      });

      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(record);
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#D5E3F5] bg-white p-8 sm:p-12 text-center shadow-lg animate-fade-in-up">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 border border-emerald-100 animate-pulse-subtle">
          <CheckCircle2 className="size-8" />
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B21941]/10 text-[#B21941] text-xs font-bold tracking-wide uppercase mb-3 animate-pulse-subtle">
          Institutional Request Received
        </div>
        <h3 className="text-2xl font-extrabold text-[#061A3A]">Meeting Request Confirmed</h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 leading-relaxed">
          Thank you, <span className="font-semibold text-[#061A3A]">{form.contactFullName}</span> (
          {form.contactTitle} at{" "}
          <span className="font-semibold text-[#061A3A]">{form.institutionName}</span>). Our
          institutional partnerships directorate at{" "}
          <span className="font-semibold text-[#B21941]">Education eXcellence Services</span> will
          review your dossier and send a formal calendar briefing within 24 to 48 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="btn-interactive rounded-xl border-slate-300 text-xs font-semibold cursor-pointer"
            onClick={() => {
              setForm(defaultFormState);
              setSubmitted(false);
            }}
          >
            Submit Another Meeting Request
          </Button>
        </div>
      </div>
    );
  }

  const selectStyle =
    "w-full h-11 px-3 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] focus:scale-[1.01] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2024%2024%27%20stroke=%27%23355E8D%27%20stroke-width=%272%27%3E%3Cpath%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20d=%27m19%209-7%207-7-7%27/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_0.85rem_center] bg-no-repeat pr-9";

  const inputStyle =
    "w-full h-11 px-3.5 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] focus:scale-[1.01] transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl border border-[#D5E3F5] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_-10px_rgba(6,26,58,0.08)] card-hover animate-fade-in-up ${
        compact ? "space-y-4" : "space-y-5"
      }`}
    >
      <div
        className={`grid gap-x-5 gap-y-4 ${
          compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {/* 1. INSTITUTION NAME */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            INSTITUTION NAME <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Alliant University (102-year-old)"
            value={form.institutionName}
            onChange={(e) => setField("institutionName", e.target.value)}
            className={`${inputStyle} ${errors.institutionName ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.institutionName && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.institutionName}</p>
          )}
        </div>

        {/* 2. INSTITUTION TYPE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            INSTITUTION TYPE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.institutionType}
            onChange={(e) => setField("institutionType", e.target.value)}
            className={`${selectStyle} ${errors.institutionType ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Lycée / Secondary School">Lycée / Secondary School</option>
            <option value="College / Higher Secondary">College / Higher Secondary</option>
            <option value="University / Higher Education">University / Higher Education</option>
            <option value="International School">International School</option>
            <option value="School Network / Educational Group">
              School Network / Educational Group
            </option>
            <option value="Bilingual Academy">Bilingual Academy</option>
            <option value="Other">Other</option>
          </select>
          {errors.institutionType && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.institutionType}</p>
          )}
        </div>

        {/* 3. OWNERSHIP TYPE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            OWNERSHIP TYPE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.ownershipType}
            onChange={(e) => setField("ownershipType", e.target.value)}
            className={`${selectStyle} ${errors.ownershipType ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Private (Independent)">Private (Independent)</option>
            <option value="Private (Network / Group)">Private (Network / Group)</option>
            <option value="Public / State-Governed">Public / State-Governed</option>
            <option value="Mission / Faith-Based">Mission / Faith-Based</option>
            <option value="Foundation / Non-Profit">Foundation / Non-Profit</option>
            <option value="Corporate Group">Corporate Group</option>
          </select>
          {errors.ownershipType && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.ownershipType}</p>
          )}
        </div>

        {/* 4. CURRICULUM TYPE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            CURRICULUM TYPE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.curriculumType}
            onChange={(e) => setField("curriculumType", e.target.value)}
            className={`${selectStyle} ${errors.curriculumType ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="National Baccalaureate (Francophone)">
              National Baccalaureate (Francophone)
            </option>
            <option value="WAEC / WASSCE (West Africa)">WAEC / WASSCE (West Africa)</option>
            <option value="Cambridge IGCSE & A-Levels">Cambridge IGCSE &amp; A-Levels</option>
            <option value="International Baccalaureate (IB DP)">
              International Baccalaureate (IB DP)
            </option>
            <option value="American High School Diploma / AP">
              American High School Diploma / AP
            </option>
            <option value="Bilingual / Hybrid">Bilingual / Hybrid</option>
            <option value="Other">Other</option>
          </select>
          {errors.curriculumType && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.curriculumType}</p>
          )}
        </div>

        {/* 5. INSTITUTIONAL POSITIONING */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            INSTITUTIONAL POSITIONING <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.institutionalPositioning}
            onChange={(e) => setField("institutionalPositioning", e.target.value)}
            className={`${selectStyle} ${errors.institutionalPositioning ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Tier 1 Elite / Selective">Tier 1 Elite / Selective</option>
            <option value="Premium International">Premium International</option>
            <option value="Bilingual / Preparatory">Bilingual / Preparatory</option>
            <option value="Mid-Market Growth">Mid-Market Growth</option>
            <option value="Technical & Professional">Technical &amp; Professional</option>
          </select>
          {errors.institutionalPositioning && (
            <p className="mt-1 text-[11px] font-medium text-red-500">
              {errors.institutionalPositioning}
            </p>
          )}
        </div>

        {/* 6. MAIN LANGUAGE OF INSTRUCTION */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            MAIN LANGUAGE OF INSTRUCTION <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.mainLanguage}
            onChange={(e) => setField("mainLanguage", e.target.value)}
            className={`${selectStyle} ${errors.mainLanguage ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="Bilingual (French / English)">Bilingual (French / English)</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Arabic / Bilingual">Arabic / Bilingual</option>
          </select>
          {errors.mainLanguage && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.mainLanguage}</p>
          )}
        </div>

        {/* 7. COUNTRY */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            COUNTRY <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.country}
            onChange={(e) => setField("country", e.target.value)}
            className={`${selectStyle} ${errors.country ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Senegal">Senegal</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Morocco">Morocco</option>
            <option value="Rwanda">Rwanda</option>
            <option value="South Africa">South Africa</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.country}</p>
          )}
        </div>

        {/* 8. STUDENT POPULATION RANGE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            STUDENT POPULATION RANGE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.studentPopulation}
            onChange={(e) => setField("studentPopulation", e.target.value)}
            className={`${selectStyle} ${errors.studentPopulation ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Under 250 students">Under 250 students</option>
            <option value="250 - 500 students">250 - 500 students</option>
            <option value="500 - 1,000 students">500 - 1,000 students</option>
            <option value="1,000 - 2,500 students">1,000 - 2,500 students</option>
            <option value="2,500+ students">2,500+ students</option>
          </select>
          {errors.studentPopulation && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.studentPopulation}</p>
          )}
        </div>

        {/* 9. INTERNATIONAL ORIENTATION LEVEL */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            INTERNATIONAL ORIENTATION LEVEL <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.internationalOrientation}
            onChange={(e) => setField("internationalOrientation", e.target.value)}
            className={`${selectStyle} ${errors.internationalOrientation ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="High (>40% students seek study abroad)">
              High (&gt;40% students seek study abroad)
            </option>
            <option value="Moderate (20% - 40% students seek study abroad)">
              Moderate (20% - 40% students seek study abroad)
            </option>
            <option value="Emerging (10% - 20% students seek study abroad)">
              Emerging (10% - 20% students seek study abroad)
            </option>
            <option value="Foundational (<10% students seek study abroad)">
              Foundational (&lt;10% students seek study abroad)
            </option>
          </select>
          {errors.internationalOrientation && (
            <p className="mt-1 text-[11px] font-medium text-red-500">
              {errors.internationalOrientation}
            </p>
          )}
        </div>

        {/* 10. PARENT MARKET TYPE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            PARENT MARKET TYPE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.parentMarketType}
            onChange={(e) => setField("parentMarketType", e.target.value)}
            className={`${selectStyle} ${errors.parentMarketType ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Executive / Diplomatic / Expatriate">
              Executive / Diplomatic / Expatriate
            </option>
            <option value="Affluent Professional / Business Class">
              Affluent Professional / Business Class
            </option>
            <option value="Upper-Middle Class">Upper-Middle Class</option>
            <option value="Diverse / Scholarship-Seeking">Diverse / Scholarship-Seeking</option>
          </select>
          {errors.parentMarketType && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.parentMarketType}</p>
          )}
        </div>

        {/* 11. CONTACT FULL NAME */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            CONTACT FULL NAME <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contact Full Name"
            value={form.contactFullName}
            onChange={(e) => setField("contactFullName", e.target.value)}
            className={`${inputStyle} ${errors.contactFullName ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.contactFullName && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.contactFullName}</p>
          )}
        </div>

        {/* 12. DECISION-MAKER TYPE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            DECISION-MAKER TYPE <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.decisionMakerType}
            onChange={(e) => setField("decisionMakerType", e.target.value)}
            className={`${selectStyle} ${errors.decisionMakerType ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select</option>
            <option value="Proprietor / Board Chair / Owner">
              Proprietor / Board Chair / Owner
            </option>
            <option value="Principal / Head of School / Rector">
              Principal / Head of School / Rector
            </option>
            <option value="Academic Director / Dean">Academic Director / Dean</option>
            <option value="Head of College Counselling / Guidance">
              Head of College Counselling / Guidance
            </option>
            <option value="Director of Admissions & Partnerships">
              Director of Admissions &amp; Partnerships
            </option>
          </select>
          {errors.decisionMakerType && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.decisionMakerType}</p>
          )}
        </div>

        {/* 13. CONTACT TITLE */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            CONTACT TITLE <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contact Title"
            value={form.contactTitle}
            onChange={(e) => setField("contactTitle", e.target.value)}
            className={`${inputStyle} ${errors.contactTitle ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.contactTitle && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.contactTitle}</p>
          )}
        </div>

        {/* 14. EMAIL */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            EMAIL <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className={`${inputStyle} ${errors.email ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.email}</p>
          )}
        </div>

        {/* 15. PHONE / WHATSAPP */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            PHONE / WHATSAPP <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Phone / WhatsApp"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={`${inputStyle} ${errors.phone ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.phone && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* 16. WHY YOUR INSTITUTION IS SEEKING THIS PARTNERSHIP */}
        <div className={compact ? "sm:col-span-2" : "md:col-span-2 lg:col-span-3"}>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            WHY YOUR INSTITUTION IS SEEKING THIS PARTNERSHIP{" "}
            <span className="text-[#B21941]">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Seeking institutional partnership for degree cohort: mba Information And technology Management at Alliant University (102-year-old) (Usa)"
            value={form.whySeeking}
            onChange={(e) => setField("whySeeking", e.target.value)}
            className={`w-full p-3.5 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] transition-all leading-relaxed ${
              errors.whySeeking ? "border-red-400 ring-1 ring-red-300" : ""
            }`}
          />
          {errors.whySeeking && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.whySeeking}</p>
          )}
        </div>
      </div>

      {/* Form Submission Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
        <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
          🔒 All submissions are reviewed individually under strict institutional confidentiality by{" "}
          <strong className="text-slate-700">Education eXcellence Services</strong>.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-interactive animate-pulse-subtle inline-flex items-center justify-center gap-2 rounded-xl bg-[#006699] hover:bg-[#004d73] text-white font-bold text-xs sm:text-sm h-12 px-8 shadow-md hover:shadow-[#006699]/30 transition-all disabled:opacity-50 cursor-pointer shrink-0 group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              <Send className="size-4 mr-1 transition-transform duration-200 group-hover:translate-x-1" />{" "}
              Request Institutional Partnership Briefing
            </>
          )}
        </button>
      </div>
    </form>
  );
}
