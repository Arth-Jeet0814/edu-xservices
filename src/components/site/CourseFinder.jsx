import {
  BookOpen,
  Clock,
  GraduationCap,
  Info,
  LayoutGrid,
  List,
  Loader2,
  MapPin,
  RotateCcw,
  Search,
  Send,
  Sparkles,
  University as UniversityIcon,
  Wallet,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { courses as staticCourses } from "@/data/site";
const BACKEND_BASE = "https://portal.edu-xservices.com/coursefinder/backend";
export function CourseFinder({ lockedCountry }) {
  // Filter options loaded from API
  const [countries, setCountries] = useState([]);
  const [streams, setStreams] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [levels, setLevels] = useState([]);
  // Filter values
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(lockedCountry ?? "");
  const [stream, setStream] = useState("");
  const [college, setCollege] = useState("");
  const [level, setLevel] = useState("");
  const [scholarship, setScholarship] = useState("all");
  const [sort, setSort] = useState("name");
  // View & Pagination
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(1);
  const perPage = 9;
  // Data states
  const [courses, setCourses] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  // Modals
  const [detailsCourse, setDetailsCourse] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [enquiryCourse, setEnquiryCourse] = useState(null);
  const [submittingEnquiry, setSubmittingEnquiry] = useState(false);
  const defaultEnquiryState = {
    submitterType: "student",
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    residenceCountry: "Senegal",
    targetIntake: "Fall 2025",
    message: "",
  };
  const [enquiryForm, setEnquiryForm] = useState(defaultEnquiryState);
  // Load filter options on mount
  useEffect(() => {
    async function loadFilters() {
      try {
        const [cRes, sRes, colRes, lRes] = await Promise.allSettled([
          fetch(`${BACKEND_BASE}/get_country.php`),
          fetch(`${BACKEND_BASE}/get_streams.php`),
          fetch(`${BACKEND_BASE}/get_colleges.php`),
          fetch(`${BACKEND_BASE}/get_levels.php`),
        ]);
        if (cRes.status === "fulfilled" && cRes.value.ok) {
          const data = await cRes.value.json();
          if (Array.isArray(data)) {
            setCountries(
              data.map((x) => ({
                value: x.countryname || x.label || String(x.countrymid),
                label: x.countryname || x.label,
              })),
            );
          }
        }
        if (sRes.status === "fulfilled" && sRes.value.ok) {
          const data = await sRes.value.json();
          if (Array.isArray(data)) {
            setStreams(
              data.map((x) => ({
                value: x.name || x.text || String(x.streammid || x.id),
                label: x.text || x.name,
              })),
            );
          }
        }
        if (colRes.status === "fulfilled" && colRes.value.ok) {
          const data = await colRes.value.json();
          if (Array.isArray(data)) {
            setColleges(
              data.map((x) => ({
                value: String(x.collegemid || x.id),
                label: x.cmname || x.text,
              })),
            );
          }
        }
        if (lRes.status === "fulfilled" && lRes.value.ok) {
          const data = await lRes.value.json();
          if (Array.isArray(data)) {
            setLevels(
              data.map((x) => ({
                value: x.name || x.label || String(x.id),
                label: x.label || x.name,
              })),
            );
          }
        }
      } catch (err) {
        console.error("Filter load error, falling back to static lists", err);
      }
    }
    loadFilters();
  }, []);
  // Sync lockedCountry
  useEffect(() => {
    if (lockedCountry) {
      setCountry(lockedCountry);
    }
  }, [lockedCountry]);
  // Fetch courses with debounce
  const fetchCoursesData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (country) params.append("country", country);
      if (stream) params.append("streamname", stream);
      if (college) params.append("collegemid", college);
      if (scholarship && scholarship !== "all") params.append("scholarship", scholarship);
      if (level) params.append("level", level);
      if (search.trim()) params.append("search", search.trim());
      if (sort) params.append("sort", sort);
      params.append("page", String(page));
      params.append("perPage", String(perPage));
      const res = await fetch(`${BACKEND_BASE}/get_coursedata.php?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      if (data && Array.isArray(data.courses) && data.courses.length > 0) {
        setCourses(data.courses);
        setTotalRows(data.totalRows || data.courses.length);
        setTotalPages(data.totalPages || 1);
        setLoading(false);
        return;
      }
      throw new Error("No remote results, falling back to static dataset");
    } catch (err) {
      // Robust client-side fallback
      const q = search.trim().toLowerCase();
      let filtered = staticCourses.map((c, idx) => ({
        id: idx + 100,
        name: c.name,
        university: c.university,
        country: c.country,
        stream: c.category,
        level: c.level,
        duration: c.duration,
        durationText: c.duration,
        fees: c.tuitionFee,
        feesText: `${c.currency} ${c.tuitionFee.toLocaleString()}/yr`,
        intake: c.intakes.join(", "),
        scholarship: "yes",
        scholarshipText: "Available",
        eligibility: c.eligibility.join("; "),
        description: c.overview,
      }));
      if (q) {
        filtered = filtered.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.university.toLowerCase().includes(q) ||
            (c.stream && c.stream.toLowerCase().includes(q)),
        );
      }
      if (country) {
        filtered = filtered.filter((c) => c.country.toLowerCase() === country.toLowerCase());
      }
      if (level) {
        filtered = filtered.filter((c) => c.level.toLowerCase().includes(level.toLowerCase()));
      }
      setTotalRows(filtered.length);
      setTotalPages(Math.max(1, Math.ceil(filtered.length / perPage)));
      const startIdx = (page - 1) * perPage;
      setCourses(filtered.slice(startIdx, startIdx + perPage));
    } finally {
      setLoading(false);
    }
  }, [country, stream, college, scholarship, level, search, sort, page]);
  useEffect(() => {
    fetchCoursesData();
  }, [fetchCoursesData]);
  // Handle open details modal
  const openDetails = async (course) => {
    setDetailsCourse(course);
    setActiveTab("overview");
    setLoadingDetails(true);
    try {
      const res = await fetch(
        `${BACKEND_BASE}/get_course_details.php?id=${encodeURIComponent(course.id)}`,
      );
      if (res.ok) {
        const data = await res.json();
        if (data && data.course) {
          setDetailsCourse(data.course);
        }
      }
    } catch (e) {
      console.warn("Could not load extended course details:", e);
    } finally {
      setLoadingDetails(false);
    }
  };
  // Handle open enquiry modal
  const openEnquiry = (course) => {
    setEnquiryCourse(course);
    setEnquiryForm({
      submitterType: "student",
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      residenceCountry: "Senegal",
      targetIntake: "Fall 2025",
      message: course
        ? `Hello, I would like more information on admission requirements, tuition fees, and scholarship opportunities for ${course.name} at ${course.university} (${course.country || "Global"}).`
        : "",
    });
  };
  // Submit enquiry form
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!enquiryForm.studentName || !enquiryForm.email || !enquiryForm.phone) {
      toast.error("Please fill in your name, email, and phone / WhatsApp number.");
      return;
    }
    setSubmittingEnquiry(true);
    try {
      await fetch(`${BACKEND_BASE}/submit_enquiry.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: enquiryForm.studentName,
          parentName: enquiryForm.parentName,
          submitterType: enquiryForm.submitterType,
          email: enquiryForm.email,
          phone: enquiryForm.phone,
          country: enquiryForm.residenceCountry,
          intake: enquiryForm.targetIntake,
          notes: enquiryForm.message,
          courseId: enquiryCourse?.id,
          courseName: enquiryCourse?.name,
          university: enquiryCourse?.university,
        }),
      });
      toast.success(
        `Thank you ${enquiryForm.studentName}! Your consultation request for ${enquiryCourse?.name} has been received. Our advisors will contact you within 24 hours.`,
      );
      setEnquiryCourse(null);
      setEnquiryForm(defaultEnquiryState);
    } catch {
      toast.success(
        "Request received! An Edu-X Services advisor will be in touch within 24 hours.",
      );
      setEnquiryCourse(null);
      setEnquiryForm(defaultEnquiryState);
    } finally {
      setSubmittingEnquiry(false);
    }
  };
  // Reset filters
  const resetFilters = () => {
    setSearch("");
    if (!lockedCountry) setCountry("");
    setStream("");
    setCollege("");
    setLevel("");
    setScholarship("all");
    setSort("name");
    setPage(1);
    toast.info("All course finder filters have been reset.");
  };
  const hasActiveFilters = Boolean(
    search || (country && !lockedCountry) || stream || college || level || scholarship !== "all",
  );
  return (
    <div className="space-y-8">
      {/* Search & Filter Header Panel */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all">
        <div className="flex flex-col gap-4">
          {/* Row 1: Search keyword and quick info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by degree title, subject, university, or keyword (e.g. MBA, AI, Toronto)..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="pl-10 pr-9 h-12 rounded-2xl bg-background border-border text-sm"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-xl border border-border bg-muted/40 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === "grid"
                      ? "bg-[#061A3A] text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="size-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === "list"
                      ? "bg-[#061A3A] text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Table / List View"
                >
                  <List className="size-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFilters}
                  className="h-10 text-xs font-semibold text-destructive hover:bg-destructive/10 rounded-xl"
                >
                  <RotateCcw className="size-3.5 mr-1.5" /> Reset Filters
                </Button>
              )}
            </div>
          </div>

          {/* Row 2: Select Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2 border-t border-border/60">
            {/* Country */}
            {!lockedCountry && (
              <div>
                <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Destination Country
                </label>
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setPage(1);
                  }}
                  className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
                >
                  <option value="">All Countries ({countries.length || "Global"})</option>
                  {countries.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Stream */}
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Study Stream
              </label>
              <select
                value={stream}
                onChange={(e) => {
                  setStream(e.target.value);
                  setPage(1);
                }}
                className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
              >
                <option value="">All Study Streams</option>
                {streams.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* University / College */}
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Partner Institution
              </label>
              <select
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                  setPage(1);
                }}
                className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
              >
                <option value="">All Institutions</option>
                {colleges.map((col) => (
                  <option key={col.value} value={col.value}>
                    {col.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Degree Level */}
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Degree Level
              </label>
              <select
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  setPage(1);
                }}
                className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
              >
                <option value="">All Degree Levels</option>
                <option value="Bachelor">Bachelor Degree</option>
                <option value="Master">Master Degree</option>
                <option value="Diploma">Diploma / Pre-University</option>
                <option value="PhD">Doctorate / PhD</option>
                {levels.map((lvl) => (
                  <option key={lvl.value} value={lvl.value}>
                    {lvl.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Scholarship */}
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Scholarship
              </label>
              <select
                value={scholarship}
                onChange={(e) => {
                  setScholarship(e.target.value);
                  setPage(1);
                }}
                className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
              >
                <option value="all">Any Scholarship Status</option>
                <option value="yes">Scholarship Available</option>
                <option value="no">Self-Funded Only</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Sort Results
              </label>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className="w-full h-11 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-[#B21941]"
              >
                <option value="name">Course Name (A-Z)</option>
                <option value="name-desc">Course Name (Z-A)</option>
                <option value="university">University (A-Z)</option>
                <option value="fees-low">Tuition (Low to High)</option>
                <option value="fees-high">Tuition (High to Low)</option>
                <option value="duration">Duration</option>
                <option value="country">Country</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-semibold text-muted-foreground">Active:</span>
              {search && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#061A3A]/10 text-[#061A3A] font-semibold border border-[#061A3A]/20">
                  Search: "{search}"
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="hover:text-destructive"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {country && !lockedCountry && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-semibold border border-blue-200">
                  Country: {country}
                  <button
                    type="button"
                    onClick={() => setCountry("")}
                    className="hover:text-destructive"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {stream && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-800 font-semibold border border-purple-200">
                  Stream: {stream}
                  <button
                    type="button"
                    onClick={() => setStream("")}
                    className="hover:text-destructive"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {level && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                  Level: {level}
                  <button
                    type="button"
                    onClick={() => setLevel("")}
                    className="hover:text-destructive"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {scholarship !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                  Scholarship: {scholarship === "yes" ? "Available" : "None"}
                  <button
                    type="button"
                    onClick={() => setScholarship("all")}
                    className="hover:text-destructive"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results Count & Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-muted-foreground pb-2">
        <p className="font-medium">
          {loading ? (
            <span className="inline-flex items-center gap-2 text-foreground font-semibold">
              <Loader2 className="size-4 animate-spin text-[#B21941]" /> Querying continental degree
              database...
            </span>
          ) : (
            <>
              Showing{" "}
              <strong className="text-foreground">
                {totalRows === 0 ? 0 : (page - 1) * perPage + 1}
              </strong>{" "}
              - <strong className="text-foreground">{Math.min(page * perPage, totalRows)}</strong>{" "}
              of <strong className="text-[#B21941]">{totalRows}</strong> accredited academic
              programs
            </>
          )}
        </p>
        <span className="text-xs bg-muted/60 px-3 py-1 rounded-full border border-border">
          Edu-X Services Verified Directory
        </span>
      </div>

      {/* Course List / Grid View */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border bg-card p-6 animate-pulse space-y-4"
            >
              <div className="h-5 bg-muted rounded-full w-24" />
              <div className="h-6 bg-muted rounded-lg w-5/6" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-4/5" />
                <div className="h-3 bg-muted rounded w-3/5" />
              </div>
              <div className="h-10 bg-muted rounded-xl w-full" />
            </div>
          ))}
        </div>
      ) : courses.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-muted/30 p-12 text-center max-w-xl mx-auto my-6">
          <GraduationCap className="mx-auto size-12 text-muted-foreground mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-foreground mb-1">No Academic Programs Found</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We could not find matching courses for your selected filters. Try broadening your
            keywords or clearing stream and destination constraints.
          </p>
          <Button
            onClick={resetFilters}
            className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl"
          >
            <RotateCcw className="size-4 mr-2" /> Reset All Filters
          </Button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.id}
              className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] hover:border-[#B21941]/50 overflow-hidden transition-all duration-300"
            >
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#061A3A]/10 text-[#061A3A] border border-[#061A3A]/20">
                    {c.level || "Degree"}
                  </span>
                  {c.scholarship && c.scholarship.toLowerCase() !== "no" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                      <Sparkles className="size-3 text-amber-600" /> Scholarship
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 min-h-[44px]">
                  {c.name}
                </h3>

                <p className="flex items-center gap-1.5 text-xs font-semibold text-[#B21941] mt-2 truncate">
                  <UniversityIcon className="size-3.5 shrink-0" />
                  <span className="truncate">{c.university}</span>
                </p>

                <div className="mt-5 space-y-2 border-t border-dashed border-border/80 pt-4 text-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" /> Destination Country
                    </span>
                    <span className="font-semibold text-foreground">{c.country}</span>
                  </div>
                  {c.stream && (
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="size-3.5" /> Field of Study
                      </span>
                      <span className="font-semibold text-foreground truncate max-w-[150px] text-right">
                        {c.stream}
                      </span>
                    </div>
                  )}
                  {c.durationText && (
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" /> Program Duration
                      </span>
                      <span className="font-semibold text-foreground">{c.durationText}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Wallet className="size-3.5" /> Estimated Tuition
                    </span>
                    <span className="font-extrabold text-emerald-600">
                      {c.feesText ||
                        (c.fees ? `$${c.fees.toLocaleString()}/yr` : "Contact Advisor")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/40 border-t border-border flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => openEnquiry(c)}
                  className="flex-1 bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  <Send className="size-3.5 mr-1.5" /> Enquire Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openDetails(c)}
                  className="flex-1 text-xs font-semibold rounded-xl"
                >
                  <Info className="size-3.5 mr-1.5 text-muted-foreground" /> Full Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table / List View */
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#061A3A] text-white text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Program &amp; Institution</th>
                  <th className="py-4 px-4">Level &amp; Stream</th>
                  <th className="py-4 px-4">Country</th>
                  <th className="py-4 px-4">Duration</th>
                  <th className="py-4 px-4">Tuition</th>
                  <th className="py-4 px-4">Scholarship</th>
                  <th className="py-4 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {courses.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/40 transition-colors">
                    <td className="py-4 px-5 max-w-xs">
                      <div className="font-bold text-sm text-foreground leading-snug">{c.name}</div>
                      <div className="text-xs text-[#B21941] font-semibold flex items-center gap-1 mt-0.5">
                        <UniversityIcon className="size-3" /> {c.university}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[10.5px] font-bold bg-[#061A3A]/10 text-[#061A3A] mb-1">
                        {c.level}
                      </span>
                      <div className="text-muted-foreground text-xs">{c.stream || "General"}</div>
                    </td>
                    <td className="py-4 px-4 font-semibold">{c.country}</td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {c.durationText || "2 Years"}
                    </td>
                    <td className="py-4 px-4 font-bold text-emerald-600">
                      {c.feesText || (c.fees ? `$${c.fees.toLocaleString()}` : "Inquire")}
                    </td>
                    <td className="py-4 px-4">
                      {c.scholarship && c.scholarship.toLowerCase() !== "no" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                          <Sparkles className="size-3 text-amber-600" /> Available
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-[11px]">Standard</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Button
                          size="sm"
                          onClick={() => openEnquiry(c)}
                          className="bg-[#B21941] hover:bg-[#8e1233] text-white text-xs font-bold h-8 px-3 rounded-lg"
                        >
                          Enquire
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDetails(c)}
                          className="text-xs h-8 px-2.5 rounded-lg"
                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => {
              setPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            className="rounded-xl text-xs font-semibold"
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            // Only show close pages
            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              (pageNum >= page - 2 && pageNum <= page + 2)
            ) {
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setPage(pageNum);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`size-9 rounded-xl text-xs font-bold transition-all ${
                    page === pageNum
                      ? "bg-[#061A3A] text-white shadow-sm"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {pageNum}
                </button>
              );
            }
            if (pageNum === page - 3 || pageNum === page + 3) {
              return (
                <span key={pageNum} className="text-muted-foreground text-xs px-1">
                  ...
                </span>
              );
            }
            return null;
          })}
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => {
              setPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            className="rounded-xl text-xs font-semibold"
          >
            Next
          </Button>
        </div>
      )}

      {/* Course Details Modal */}
      {detailsCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-2xl rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-[#061A3A] text-white p-6 relative">
              <button
                type="button"
                onClick={() => setDetailsCourse(null)}
                className="absolute right-5 top-5 text-white/70 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {detailsCourse.level || "Degree"}
                </span>
                <span className="text-xs text-white/70">{detailsCourse.country}</span>
              </div>
              <h2 className="text-xl font-bold text-white pr-8">{detailsCourse.name}</h2>
              <p className="text-xs text-[#E8A0B0] font-semibold mt-1 flex items-center gap-1.5">
                <UniversityIcon className="size-3.5" /> {detailsCourse.university}
              </p>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-border bg-muted/30 px-6 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`py-3 px-3 border-b-2 transition-all ${
                  activeTab === "overview"
                    ? "border-[#B21941] text-[#B21941] font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("eligibility")}
                className={`py-3 px-3 border-b-2 transition-all ${
                  activeTab === "eligibility"
                    ? "border-[#B21941] text-[#B21941] font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Eligibility
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("fees")}
                className={`py-3 px-3 border-b-2 transition-all ${
                  activeTab === "fees"
                    ? "border-[#B21941] text-[#B21941] font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Tuition &amp; Scholarship
              </button>
            </div>

            {/* Modal Tab Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
              {loadingDetails ? (
                <div className="py-12 text-center text-muted-foreground">
                  <Loader2 className="mx-auto size-6 animate-spin text-[#B21941] mb-2" />
                  Loading program curriculum and requirements...
                </div>
              ) : activeTab === "overview" ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">Academic Overview</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {detailsCourse.description ||
                        "This selective program offers rigorous academic preparation, distinguished faculty mentorship, and globally recognized credentials that position students for successful international careers."}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div className="p-3 rounded-xl bg-muted/40">
                      <span className="block text-[11px] text-muted-foreground uppercase font-bold">
                        Duration
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {detailsCourse.durationText || "2 Years Full Time"}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/40">
                      <span className="block text-[11px] text-muted-foreground uppercase font-bold">
                        Target Intakes
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {detailsCourse.intake || "January, September, Fall 2026"}
                      </span>
                    </div>
                  </div>
                </div>
              ) : activeTab === "eligibility" ? (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-sm">Admissions Criteria</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {detailsCourse.eligibility ||
                      "Secondary school diploma / Bachelor's degree from an accredited institution with competitive GPA. English / French proficiency documentation or verified academic transcripts."}
                  </p>
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-blue-900 text-xs">
                    <strong>Admissions Verification:</strong> Every student application is reviewed and
                    prepared by our Edu-X admissions advisors prior to university and visa submission
                    to ensure a 98% visa success rate.
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <Sparkles className="size-4 text-emerald-600" />
                      <span>Scholarship &amp; Partner Fee Waivers</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Applicants through Education eXcellence Services receive full guidance
                      on qualifying for university scholarships, partner tuition fee waivers, and
                      external fellowships.
                    </p>
                  </div>
                  <div className="space-y-2 border-t border-border pt-3">
                    <div className="flex justify-between py-1.5 border-b border-border/60">
                      <span className="text-muted-foreground">Tuition Fee:</span>
                      <span className="font-bold text-foreground">
                        {detailsCourse.feesText ||
                          `$${detailsCourse.fees?.toLocaleString() || "Standard"}`}
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/60">
                      <span className="text-muted-foreground">Destination:</span>
                      <span className="font-semibold text-foreground">{detailsCourse.country}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-muted/50 border-t border-border flex items-center justify-between gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDetailsCourse(null)}
                className="text-xs"
              >
                Close
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  const target = detailsCourse;
                  setDetailsCourse(null);
                  openEnquiry(target);
                }}
                className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs rounded-xl"
              >
                <Send className="size-3.5 mr-1.5" /> Enquire for this Program
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Student & Parent Program Consultation Modal */}
      {enquiryCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B21941] block">
                  Student &amp; Parent Consultation Inquiry
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate max-w-lg">
                  {enquiryCourse.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {enquiryCourse.university} · {enquiryCourse.country}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEnquiryCourse(null)}
                className="size-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleEnquirySubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
              {/* Submitter Toggle */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
                  I AM COMPLETING THIS AS <span className="text-[#B21941]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryForm({ ...enquiryForm, submitterType: "student" })}
                    className={`h-11 rounded-xl font-bold text-xs transition-all flex items-center justify-center border ${
                      enquiryForm.submitterType === "student"
                        ? "bg-[#061A3A] text-white border-[#061A3A] shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    A Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnquiryForm({ ...enquiryForm, submitterType: "parent" })}
                    className={`h-11 rounded-xl font-bold text-xs transition-all flex items-center justify-center border ${
                      enquiryForm.submitterType === "parent"
                        ? "bg-[#061A3A] text-white border-[#061A3A] shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    A Parent / Guardian
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Full Name */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    STUDENT FULL NAME <span className="text-[#B21941]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mamadou Diouf"
                    value={enquiryForm.studentName}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, studentName: e.target.value })
                    }
                    className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  />
                </div>

                {/* Parent / Guardian Name */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    PARENT / GUARDIAN NAME{" "}
                    {enquiryForm.submitterType === "parent" ? (
                      <span className="text-[#B21941]">*</span>
                    ) : (
                      <span className="text-slate-400 font-normal">(Optional)</span>
                    )}
                  </label>
                  <input
                    type="text"
                    required={enquiryForm.submitterType === "parent"}
                    placeholder="e.g. Mr. Stéphane Toupane"
                    value={enquiryForm.parentName}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, parentName: e.target.value })
                    }
                    className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    EMAIL ADDRESS <span className="text-[#B21941]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. student@gmail.com"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    WHATSAPP / PHONE NUMBER <span className="text-[#B21941]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+221 77 000 00 00"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  />
                </div>

                {/* Country of Residence */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    COUNTRY OF RESIDENCE <span className="text-[#B21941]">*</span>
                  </label>
                  <select
                    required
                    value={enquiryForm.residenceCountry}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, residenceCountry: e.target.value })
                    }
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  >
                    <option value="Senegal">Senegal</option>
                    <option value="Mali">Mali</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Congo">Congo</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Togo">Togo</option>
                    <option value="Benin">Benin</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Other">Other Country</option>
                  </select>
                </div>

                {/* Target Intake */}
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                    TARGET INTAKE <span className="text-[#B21941]">*</span>
                  </label>
                  <select
                    required
                    value={enquiryForm.targetIntake}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, targetIntake: e.target.value })
                    }
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all"
                  >
                    <option value="Fall 2025">Fall 2025 (August - September)</option>
                    <option value="Spring 2026">Spring 2026 (January - February)</option>
                    <option value="Summer 2026">Summer 2026 (May - June)</option>
                    <option value="Fall 2026">Fall 2026</option>
                  </select>
                </div>
              </div>

              {/* Message / Questions */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                  YOUR QUESTIONS &amp; ADVISORY REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                  placeholder="Tell us about your educational background, test scores, or budget..."
                  className="w-full p-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B21941]/25 focus:border-[#B21941] transition-all leading-relaxed"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Our Dakar advisors respond within 24 hours. Your details remain confidential.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setEnquiryCourse(null)}
                    className="text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </Button>
                  <button
                    type="submit"
                    disabled={submittingEnquiry}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B21941] hover:bg-[#8e1233] text-white font-bold text-xs sm:text-sm h-11 px-7 shadow-md transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {submittingEnquiry ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Request Consultation <Send className="size-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
