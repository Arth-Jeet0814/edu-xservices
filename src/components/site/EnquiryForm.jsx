import React, { useState } from "react";
import { CheckCircle2, Send, User, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const defaultFormState = {
  submitterType: "Student", // "Student" | "Parent / Guardian"
  studentFullName: "",
  parentFullName: "",
  email: "",
  phone: "",
  country: "",
  preferredDestination: "",
  studyLevel: "",
  fieldOfStudy: "",
  targetIntake: "",
  servicesNeeded: "Full End-to-End Guidance",
  message: "",
};

export function EnquiryForm({
  defaultCountry = "",
  defaultCourse = "",
  defaultDestination = "",
  compact = false,
  onSuccess,
}) {
  const [form, setForm] = useState({
    ...defaultFormState,
    preferredDestination: defaultDestination || defaultCountry || "",
    fieldOfStudy: defaultCourse || "",
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
    if (!form.studentFullName.trim()) errs.studentFullName = "Student full name is required";
    if (form.submitterType === "Parent / Guardian" && !form.parentFullName.trim()) {
      errs.parentFullName = "Parent / Guardian name is required";
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      errs.email = "Valid email address is required";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required";
    }
    if (!form.country) {
      errs.country = "Please select your country of residence";
    }
    if (!form.preferredDestination) {
      errs.preferredDestination = "Please select target destination";
    }
    if (!form.studyLevel) {
      errs.studyLevel = "Please select study level";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields (*)");
      return;
    }

    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem("edux_student_enquiries") || "[]");
      const record = {
        ...form,
        submittedAt: new Date().toISOString(),
        id: `edux-b2c-${Date.now()}`,
      };
      existing.unshift(record);
      localStorage.setItem("edux_student_enquiries", JSON.stringify(existing));

      toast.success("Free Consultation Request Confirmed", {
        description: `Thank you! Our senior advisor will reach out to schedule your personalized session within 24 hours.`,
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
          Consultation Request Confirmed
        </div>
        <h3 className="text-2xl font-extrabold text-[#061A3A]">
          Thank You, {form.submitterType === "Parent / Guardian" ? form.parentFullName : form.studentFullName}!
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 leading-relaxed">
          We have received your request for {form.studentFullName}'s study abroad plans in{" "}
          <span className="font-semibold text-[#061A3A]">{form.preferredDestination || "the USA / Canada"}</span>.
          An Edu-X education advisor will contact you on{" "}
          <span className="font-semibold text-[#061A3A]">{form.phone}</span> or via email within{" "}
          <strong className="text-[#B21941]">24 hours</strong> to confirm your free consultation.
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
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  const selectStyle =
    "w-full h-11 px-3 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2024%2024%27%20stroke=%27%23355E8D%27%20stroke-width=%272%27%3E%3Cpath%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20d=%27m19%209-7%207-7-7%27/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_0.85rem_center] bg-no-repeat pr-9";

  const inputStyle =
    "w-full h-11 px-3.5 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl border border-[#D5E3F5] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_-10px_rgba(6,26,58,0.08)] card-hover animate-fade-in-up ${
        compact ? "space-y-4" : "space-y-6"
      }`}
    >
      {/* Submitter Toggle: Student vs Parent */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#355E8D] mb-2">
          I am submitting this consultation request as: <span className="text-[#B21941]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3 max-w-md">
          <button
            type="button"
            onClick={() => setField("submitterType", "Student")}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              form.submitterType === "Student"
                ? "bg-[#061A3A] text-white border-[#061A3A] shadow-sm"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <User className="size-4" />
            Ambitious Student
          </button>
          <button
            type="button"
            onClick={() => setField("submitterType", "Parent / Guardian")}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              form.submitterType === "Parent / Guardian"
                ? "bg-[#B21941] text-white border-[#B21941] shadow-sm"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Users className="size-4" />
            Parent / Guardian
          </button>
        </div>
      </div>

      <div
        className={`grid gap-x-5 gap-y-4 ${
          compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {/* Student Full Name */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Student's Full Name <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Mamadou Diouf"
            value={form.studentFullName}
            onChange={(e) => setField("studentFullName", e.target.value)}
            className={`${inputStyle} ${errors.studentFullName ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.studentFullName && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.studentFullName}</p>
          )}
        </div>

        {/* Parent Name (if parent selected) */}
        {form.submitterType === "Parent / Guardian" && (
          <div>
            <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
              Parent / Guardian Name <span className="text-[#B21941]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mr. Stéphane Toupane"
              value={form.parentFullName}
              onChange={(e) => setField("parentFullName", e.target.value)}
              className={`${inputStyle} ${errors.parentFullName ? "border-red-400 ring-1 ring-red-300" : ""}`}
            />
            {errors.parentFullName && (
              <p className="mt-1 text-[11px] font-medium text-red-500">{errors.parentFullName}</p>
            )}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Email Address <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="student@example.com"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className={`${inputStyle} ${errors.email ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.email}</p>
          )}
        </div>

        {/* WhatsApp / Phone */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            WhatsApp / Mobile Phone <span className="text-[#B21941]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+221 77 000 00 00"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={`${inputStyle} ${errors.phone ? "border-red-400 ring-1 ring-red-300" : ""}`}
          />
          {errors.phone && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Country of Residence */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Current Country of Residence <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.country}
            onChange={(e) => setField("country", e.target.value)}
            className={`${selectStyle} ${errors.country ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select country</option>
            <option value="Senegal">Senegal</option>
            <option value="Mali">Mali</option>
            <option value="Guinea">Guinea</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Congo">Congo</option>
            <option value="Togo">Togo</option>
            <option value="Benin">Benin</option>
            <option value="Gabon">Gabon</option>
            <option value="Ghana">Ghana</option>
            <option value="Nigeria">Nigeria</option>
            <option value="France">France</option>
            <option value="Other Country">Other Country</option>
          </select>
          {errors.country && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.country}</p>
          )}
        </div>

        {/* Target Destination */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Target Destination <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.preferredDestination}
            onChange={(e) => setField("preferredDestination", e.target.value)}
            className={`${selectStyle} ${errors.preferredDestination ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select destination</option>
            <option value="United States">United States (USA)</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom (UK)</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="Open to Suggestions">Open to Advisor Suggestions</option>
          </select>
          {errors.preferredDestination && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.preferredDestination}</p>
          )}
        </div>

        {/* Study Level */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Target Study Level <span className="text-[#B21941]">*</span>
          </label>
          <select
            required
            value={form.studyLevel}
            onChange={(e) => setField("studyLevel", e.target.value)}
            className={`${selectStyle} ${errors.studyLevel ? "border-red-400 ring-1 ring-red-300" : ""}`}
          >
            <option value="">Select study level</option>
            <option value="Undergraduate (Bachelor's Degree)">Undergraduate (Bachelor's Degree)</option>
            <option value="Postgraduate (Master's Degree)">Postgraduate (Master's Degree)</option>
            <option value="High School / Pre-University">High School / Pre-University</option>
            <option value="English Language Preparation">English Language Preparation (Duolingo/IELTS)</option>
            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
          </select>
          {errors.studyLevel && (
            <p className="mt-1 text-[11px] font-medium text-red-500">{errors.studyLevel}</p>
          )}
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Field of Study / Intended Major
          </label>
          <input
            type="text"
            placeholder="e.g. Computer Science, AI, Business, Medicine"
            value={form.fieldOfStudy}
            onChange={(e) => setField("fieldOfStudy", e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Target Intake */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Target Intake
          </label>
          <select
            value={form.targetIntake}
            onChange={(e) => setField("targetIntake", e.target.value)}
            className={selectStyle}
          >
            <option value="">Select target intake</option>
            <option value="Fall 2026 (August / September)">Fall 2026 (August / September)</option>
            <option value="Spring 2027 (January)">Spring 2027 (January)</option>
            <option value="Fall 2027">Fall 2027</option>
            <option value="Immediate / Next Available">Immediate / Next Available</option>
          </select>
        </div>

        {/* Primary Support Needed */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            What is your primary area of interest?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {[
              "Full End-to-End Guidance",
              "University Admission",
              "Scholarships & Aid",
              "Student Visa Coaching",
              "Housing & Arrival",
            ].map((srv) => (
              <button
                key={srv}
                type="button"
                onClick={() => setField("servicesNeeded", srv)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                  form.servicesNeeded === srv
                    ? "bg-[#061A3A] text-white border-[#061A3A] shadow-xs"
                    : "bg-[#F5F9FF] text-slate-700 border-[#D5E3F5] hover:bg-slate-100"
                }`}
              >
                {srv}
              </button>
            ))}
          </div>
        </div>

        {/* Notes / Message */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block text-[11px] font-bold tracking-wider text-[#355E8D] uppercase mb-1.5">
            Questions or Specific Goals (Optional)
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="Tell us about the student's current grade, target budget, or specific university dreams..."
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            className="w-full p-3.5 text-xs sm:text-sm bg-[#F5F9FF] border border-[#D5E3F5] rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4A99]/25 focus:border-[#0B4A99] transition-all resize-none"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
        <p className="text-xs text-muted-foreground text-center sm:text-left">
          ✔ Free 30-minute consultation • Honest assessment • Responding within 24 hours
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-interactive w-full sm:w-auto bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-sm px-8 h-12 rounded-xl shadow-md hover:shadow-[#B21941]/30 transition-all cursor-pointer"
        >
          <Send className="size-4 mr-2" />
          {isSubmitting ? "Submitting Request..." : "Book Your Free Consultation"}
        </Button>
      </div>
    </form>
  );
}
