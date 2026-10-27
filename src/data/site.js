import founderImageFile from "@/assets/Konate-Djenabou-Diawara.png";

// Static demo dataset. Shapes mirror the future CRM API payloads so these
// modules can be swapped for fetchers without touching UI components.
export const destinations = [
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    code: "ca",
    tagline: "Post-study work up to 3 years",
    description: "Affordable world-class education with strong PR pathways.",
    overview:
      "Canada hosts more than 800,000 international students across research-intensive universities and career-focused colleges, with a reputation for safety, multiculturalism and immigration-friendly policy.",
    whyStudy: [
      "Globally ranked universities at moderate tuition",
      "Post-Graduation Work Permit of up to 3 years",
      "Clear permanent residency pathways",
      "Co-op and paid internship programs",
    ],
    educationSystem:
      "Provincially regulated universities and colleges offering Bachelors (3-4 years), Masters (1-2 years), postgraduate diplomas and PhD programs, with a strong co-op culture.",
    intakes: ["January", "May", "September"],
    tuition: "CAD 15,000 - 35,000 per year",
    costOfLiving: "CAD 12,000 - 18,000 per year",
    scholarships:
      "Entrance scholarships, provincial awards and university-specific merit bursaries ranging from CAD 2,000 to full tuition.",
    visaProcess: [
      "Receive your Letter of Acceptance",
      "Arrange the Provincial Attestation Letter",
      "Pay tuition and open a GIC account",
      "Submit the study permit application online",
      "Complete biometrics and medicals",
    ],
    workRights: "24 hours per week during term and full-time during scheduled breaks.",
    universities: 92,
    faqs: [
      {
        q: "Is IELTS mandatory for Canada?",
        a: "Most institutions accept IELTS, PTE, TOEFL or Duolingo. Some accept Medium of Instruction letters for select programs.",
      },
      {
        q: "How much GIC is required?",
        a: "The standard Guaranteed Investment Certificate is CAD 20,635 for the first year of living costs.",
      },
      {
        q: "Can my spouse join me?",
        a: "Spouses of students in eligible Masters and doctoral programs can apply for an open work permit.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    code: "au",
    tagline: "8 universities in the global top 100",
    description: "Research excellence, sunshine and strong graduate outcomes.",
    overview:
      "Australia combines highly ranked research universities with a regulated student protection framework and generous temporary graduate work rights.",
    whyStudy: [
      "Eight universities inside the global top 100",
      "Temporary Graduate visa of 2-4 years",
      "Strong regional study incentives",
      "Vibrant multicultural student cities",
    ],
    educationSystem:
      "Australian Qualifications Framework covering Diploma, Bachelor (3 years), Masters (1.5-2 years) and Doctoral degrees.",
    intakes: ["February", "July", "November"],
    tuition: "AUD 25,000 - 45,000 per year",
    costOfLiving: "AUD 24,000 - 29,000 per year",
    scholarships:
      "Destination Australia, university international merit scholarships and research stipends.",
    visaProcess: [
      "Accept your offer and pay the deposit",
      "Receive the Confirmation of Enrolment",
      "Arrange Overseas Student Health Cover",
      "Prepare the Genuine Student statement",
      "Lodge the Subclass 500 visa online",
    ],
    workRights: "48 hours per fortnight during term, unlimited during official breaks.",
    universities: 43,
    faqs: [
      {
        q: "What is the Genuine Student requirement?",
        a: "A structured statement explaining your study intent, course choice and post-study plans, submitted with your visa.",
      },
      {
        q: "Is health cover compulsory?",
        a: "Yes, Overseas Student Health Cover must be held for the full duration of your visa.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "gb",
    tagline: "One-year Masters degrees",
    description: "Centuries of academic prestige with fast-track postgraduate study.",
    overview:
      "The UK offers intensive one-year Masters programs, world-leading research and a two-year Graduate Route work visa.",
    whyStudy: [
      "One-year Masters saves time and money",
      "Graduate Route visa for 2 years",
      "Globally recognised qualifications",
      "Compact travel access to Europe",
    ],
    educationSystem:
      "Three-year Bachelors (four in Scotland), one-year taught Masters, and three to four year doctoral research degrees.",
    intakes: ["January", "September"],
    tuition: "GBP 14,000 - 30,000 per year",
    costOfLiving: "GBP 10,000 - 14,000 per year",
    scholarships:
      "Chevening, Commonwealth and generous university international excellence awards.",
    visaProcess: [
      "Accept your unconditional offer",
      "Receive the CAS from your university",
      "Hold maintenance funds for 28 days",
      "Pay the Immigration Health Surcharge",
      "Submit the Student Route application",
    ],
    workRights: "20 hours per week during term time for degree-level students.",
    universities: 78,
    faqs: [
      {
        q: "Do I need IELTS UKVI?",
        a: "Only for below-degree-level programs; most universities accept standard IELTS Academic.",
      },
      {
        q: "How long is the Graduate Route?",
        a: "Two years for Bachelors and Masters graduates, three years for doctoral graduates.",
      },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    code: "us",
    tagline: "OPT and STEM extensions",
    description: "The widest choice of universities, majors and research funding.",
    overview:
      "With over 4,000 accredited institutions, the USA offers unmatched flexibility, campus life and research funding for international students.",
    whyStudy: [
      "Largest choice of universities and majors",
      "12 months OPT plus 24-month STEM extension",
      "Flexible curriculum with majors and minors",
      "Generous assistantships and research funding",
    ],
    educationSystem:
      "Four-year Bachelors, two-year Masters and research doctorates, with credit-based flexibility across departments.",
    intakes: ["Fall", "Spring", "Summer"],
    tuition: "USD 20,000 - 55,000 per year",
    costOfLiving: "USD 12,000 - 20,000 per year",
    scholarships: "Merit aid, graduate assistantships, tuition waivers and Fulbright programs.",
    visaProcess: [
      "Receive the I-20 from your university",
      "Pay the SEVIS fee",
      "Complete the DS-160 form",
      "Schedule and attend the visa interview",
      "Receive your F-1 visa stamp",
    ],
    workRights: "20 hours per week on campus; CPT and OPT for off-campus practical training.",
    universities: 120,
    faqs: [
      {
        q: "Is GRE still required?",
        a: "Many universities have made GRE optional, though it can strengthen funding applications.",
      },
      {
        q: "What is STEM OPT?",
        a: "An additional 24 months of work authorisation for eligible STEM-designated degrees.",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    code: "nz",
    tagline: "All 8 universities globally ranked",
    description: "Small classes, safe cities and outstanding quality of life.",
    overview:
      "New Zealand's eight universities all rank in the global top 3%, with practical, industry-linked teaching and welcoming migration settings.",
    whyStudy: [
      "All eight universities globally ranked",
      "Post-study work visa up to 3 years",
      "Safe and scenic study environment",
      "Small class sizes with high contact hours",
    ],
    educationSystem:
      "NZQA-regulated Certificates, Diplomas, Bachelors (3 years), Masters (1-2 years) and Doctorates.",
    intakes: ["February", "July"],
    tuition: "NZD 22,000 - 38,000 per year",
    costOfLiving: "NZD 20,000 per year",
    scholarships: "New Zealand Excellence Awards and university international scholarships.",
    visaProcess: [
      "Accept the offer of place",
      "Pay tuition and receive the receipt",
      "Arrange insurance and funds evidence",
      "Apply for the Fee Paying Student visa",
      "Complete medicals if required",
    ],
    workRights: "20 hours per week during term and full-time in scheduled holidays.",
    universities: 24,
    faqs: [
      {
        q: "Can I work after graduation?",
        a: "Eligible graduates can apply for a Post Study Work Visa of up to three years.",
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    code: "ie",
    tagline: "European tech and pharma hub",
    description: "English-speaking EU study with two-year stay-back options.",
    overview:
      "Ireland is the European base of global technology, pharmaceutical and financial companies, offering graduates strong placement opportunities.",
    whyStudy: [
      "Two-year stay back for Masters graduates",
      "European headquarters of global employers",
      "English-speaking EU member",
      "Strong research and innovation funding",
    ],
    educationSystem:
      "National Framework of Qualifications with Honours Bachelors (3-4 years) and taught Masters (1 year).",
    intakes: ["January", "September"],
    tuition: "EUR 12,000 - 25,000 per year",
    costOfLiving: "EUR 10,000 - 14,000 per year",
    scholarships: "Government of Ireland scholarships and university merit awards.",
    visaProcess: [
      "Secure the letter of acceptance",
      "Pay full tuition fees",
      "Show evidence of EUR 10,000 funds",
      "Apply for the D Study visa",
      "Register with immigration on arrival",
    ],
    workRights: "20 hours per week during term, 40 hours in holiday periods.",
    universities: 26,
    faqs: [
      {
        q: "Is Ireland part of the EU?",
        a: "Yes, Ireland is an English-speaking EU member state with Euro currency.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    code: "de",
    tagline: "Low or no tuition public universities",
    description: "Engineering excellence with minimal tuition fees.",
    overview:
      "Public universities in Germany charge little to no tuition, making it one of the most affordable destinations for engineering and applied sciences.",
    whyStudy: [
      "Little to no tuition at public universities",
      "Engineering and research powerhouse",
      "18-month job seeker visa",
      "Strong industry apprenticeships",
    ],
    educationSystem:
      "Bachelors (3 years), Masters (2 years), plus Fachhochschulen focused on applied practice.",
    intakes: ["April", "October"],
    tuition: "EUR 0 - 20,000 per year",
    costOfLiving: "EUR 11,208 blocked account per year",
    scholarships: "DAAD scholarships, Deutschlandstipendium and university funds.",
    visaProcess: [
      "Receive admission letter",
      "Open a blocked account",
      "Arrange health insurance",
      "Book the national visa appointment",
      "Attend the interview at the consulate",
    ],
    workRights: "140 full days or 280 half days per year.",
    universities: 64,
    faqs: [
      {
        q: "Do I need German language skills?",
        a: "Many Masters programs are taught fully in English, though A1-B1 German helps daily life and part-time work.",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    code: "fr",
    tagline: "Business schools and design",
    description: "Prestigious grandes écoles with subsidised tuition.",
    overview:
      "France hosts globally ranked business schools and design institutes, with government-subsidised tuition and a 2-year post-study search permit.",
    whyStudy: [
      "Top-ranked business and management schools",
      "Subsidised public tuition",
      "APS residence permit for 2 years",
      "Cultural and travel access across Europe",
    ],
    educationSystem:
      "Licence (3 years), Master (2 years) and Doctorat, alongside grandes écoles programs.",
    intakes: ["January", "September"],
    tuition: "EUR 3,000 - 20,000 per year",
    costOfLiving: "EUR 9,000 - 13,000 per year",
    scholarships: "Eiffel Excellence, Charpak and institution-level awards.",
    visaProcess: [
      "Apply via Campus France",
      "Attend the Campus France interview",
      "Receive admission and pay fees",
      "Apply for the VLS-TS long stay visa",
      "Validate the visa after arrival",
    ],
    workRights: "964 hours per year (about 20 hours per week).",
    universities: 38,
    faqs: [
      {
        q: "What is Campus France?",
        a: "The mandatory pre-consular procedure for most international students applying to French institutions.",
      },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    flag: "🇦🇪",
    code: "ae",
    tagline: "Global campuses, tax-free careers",
    description: "International branch campuses in a fast-growing business hub.",
    overview:
      "Dubai's academic free zones host branch campuses of UK, Australian and Indian universities, awarding identical degrees close to home.",
    whyStudy: [
      "Branch campuses of global universities",
      "Tax-free salaries and internships",
      "Short flight times and familiar culture",
      "Golden visa options for top graduates",
    ],
    educationSystem:
      "KHDA-regulated Bachelors and Masters programs mirroring the home campus curriculum.",
    intakes: ["January", "September"],
    tuition: "AED 40,000 - 90,000 per year",
    costOfLiving: "AED 35,000 - 50,000 per year",
    scholarships: "Academic merit scholarships up to 50% at most branch campuses.",
    visaProcess: [
      "Accept the offer letter",
      "University applies for the entry permit",
      "Complete medical screening",
      "Emirates ID biometrics",
      "Student residence visa stamped",
    ],
    workRights: "Part-time work permitted within free zones with university approval.",
    universities: 21,
    faqs: [
      {
        q: "Is the degree the same as the home campus?",
        a: "Yes, branch campuses award the same degree certificate as the parent university.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    code: "sg",
    tagline: "Asia's top-ranked universities",
    description: "A safe, connected gateway to Asian business and technology.",
    overview:
      "Singapore blends top-50 global universities with a bilingual, safe and highly connected environment for finance, technology and hospitality careers.",
    whyStudy: [
      "Two universities in the global top 30",
      "Regional headquarters of global firms",
      "Safe, English-speaking city state",
      "Strong finance and tech internships",
    ],
    educationSystem:
      "Autonomous universities, polytechnics and private institutions with EduTrust certification.",
    intakes: ["January", "August"],
    tuition: "SGD 18,000 - 45,000 per year",
    costOfLiving: "SGD 12,000 - 18,000 per year",
    scholarships: "Tuition grants with service obligation and university merit awards.",
    visaProcess: [
      "Accept the offer",
      "Apply through the SOLAR system",
      "Complete the eForm 16",
      "Attend the pass issuance appointment",
      "Collect the Student Pass",
    ],
    workRights: "16 hours per week for students of approved institutions.",
    universities: 14,
    faqs: [
      {
        q: "What is the tuition grant?",
        a: "A government subsidy that lowers tuition in exchange for a work bond with a Singapore-based employer.",
      },
    ],
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    code: "mt",
    tagline: "Affordable English-medium EU study",
    description: "Mediterranean lifestyle with budget-friendly EU degrees.",
    overview:
      "Malta offers English-taught EU qualifications at a fraction of Western European costs, with a growing iGaming and finance job market.",
    whyStudy: [
      "Affordable EU degrees taught in English",
      "Safe island lifestyle",
      "Growing finance and iGaming sectors",
      "Simple visa process",
    ],
    educationSystem:
      "European Qualifications Framework aligned Bachelors, Masters and vocational diplomas.",
    intakes: ["February", "October"],
    tuition: "EUR 6,000 - 12,000 per year",
    costOfLiving: "EUR 8,000 - 10,000 per year",
    scholarships: "Early-payment discounts and university merit awards.",
    visaProcess: [
      "Receive acceptance letter",
      "Arrange accommodation and insurance",
      "Show proof of funds",
      "Apply for the national D visa",
      "Apply for the residence permit on arrival",
    ],
    workRights: "20 hours per week after 90 days of study.",
    universities: 9,
    faqs: [
      {
        q: "Is English widely spoken?",
        a: "Yes, English is an official language of Malta and the language of instruction.",
      },
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    flag: "🇪🇺",
    code: "eu",
    tagline: "Netherlands, Poland, Italy and more",
    description: "Explore affordable, English-taught programs across the EU.",
    overview:
      "Beyond the headline destinations, countries such as the Netherlands, Italy, Poland, Spain and Finland offer English-taught degrees at accessible tuition levels.",
    whyStudy: [
      "Wide choice of English-taught EU programs",
      "Low tuition in Central Europe",
      "Schengen travel access",
      "Strong internship and Erasmus networks",
    ],
    educationSystem:
      "Bologna Process structure with 180-ECTS Bachelors and 90-120 ECTS Masters degrees.",
    intakes: ["February", "September", "October"],
    tuition: "EUR 2,500 - 18,000 per year",
    costOfLiving: "EUR 7,000 - 13,000 per year",
    scholarships: "Erasmus Mundus joint Masters and national government scholarships.",
    visaProcess: [
      "Choose the country and program",
      "Secure admission and pay fees",
      "Prepare funds and insurance",
      "Apply for the national student visa",
      "Register locally after arrival",
    ],
    workRights: "Typically 20 hours per week, varying by member state.",
    universities: 70,
    faqs: [
      {
        q: "Which EU country is cheapest?",
        a: "Poland, Malta, Italy and Germany typically offer the lowest combined tuition and living costs.",
      },
    ],
  },
];
export const universities = [
  {
    id: "utoronto",
    name: "University of Toronto",
    short: "UofT",
    country: "Canada",
    city: "Toronto",
    courses: 420,
    ranking: "QS #21",
  },
  {
    id: "ubc",
    name: "University of British Columbia",
    short: "UBC",
    country: "Canada",
    city: "Vancouver",
    courses: 310,
    ranking: "QS #38",
  },
  {
    id: "melbourne",
    name: "University of Melbourne",
    short: "UniMelb",
    country: "Australia",
    city: "Melbourne",
    courses: 380,
    ranking: "QS #13",
  },
  {
    id: "monash",
    name: "Monash University",
    short: "Monash",
    country: "Australia",
    city: "Melbourne",
    courses: 350,
    ranking: "QS #37",
  },
  {
    id: "manchester",
    name: "University of Manchester",
    short: "UoM",
    country: "United Kingdom",
    city: "Manchester",
    courses: 400,
    ranking: "QS #34",
  },
  {
    id: "leeds",
    name: "University of Leeds",
    short: "Leeds",
    country: "United Kingdom",
    city: "Leeds",
    courses: 290,
    ranking: "QS #82",
  },
  {
    id: "asu",
    name: "Arizona State University",
    short: "ASU",
    country: "United States",
    city: "Phoenix",
    courses: 450,
    ranking: "US News #105",
  },
  {
    id: "northeastern",
    name: "Northeastern University",
    short: "NEU",
    country: "United States",
    city: "Boston",
    courses: 330,
    ranking: "US News #54",
  },
  {
    id: "auckland",
    name: "University of Auckland",
    short: "UoA",
    country: "New Zealand",
    city: "Auckland",
    courses: 240,
    ranking: "QS #65",
  },
  {
    id: "ucd",
    name: "University College Dublin",
    short: "UCD",
    country: "Ireland",
    city: "Dublin",
    courses: 270,
    ranking: "QS #126",
  },
  {
    id: "tum",
    name: "Technical University of Munich",
    short: "TUM",
    country: "Germany",
    city: "Munich",
    courses: 190,
    ranking: "QS #28",
  },
  {
    id: "nus",
    name: "National University of Singapore",
    short: "NUS",
    country: "Singapore",
    city: "Singapore",
    courses: 260,
    ranking: "QS #8",
  },
];
export const courseCategories = [
  "Business and Management",
  "Engineering",
  "Information Technology",
  "Healthcare",
  "Data Science",
  "Hospitality",
  "Finance",
  "Arts and Design",
];
export const educationLevels = ["Bachelors", "Masters", "Diploma", "PhD"];
export const intakeOptions = [
  "January",
  "February",
  "April",
  "May",
  "July",
  "September",
  "October",
];
export const courses = [
  {
    slug: "msc-data-science-toronto",
    name: "MSc Applied Data Science",
    university: "University of Toronto",
    universityShort: "UofT",
    country: "Canada",
    city: "Toronto",
    level: "Masters",
    category: "Data Science",
    duration: "2 years",
    tuitionFee: 32500,
    currency: "CAD",
    intakes: ["September", "January"],
    ielts: "6.5 overall, no band below 6.0",
    pte: "60 overall",
    overview:
      "A rigorous applied program covering statistical learning, large-scale data engineering and responsible AI, delivered with an industry capstone in the final term.",
    eligibility: [
      "Bachelors degree with 70% or equivalent",
      "Quantitative background in statistics or programming",
      "Two academic references",
    ],
    modules: [
      "Statistical Learning",
      "Data Engineering at Scale",
      "Machine Learning Systems",
      "Data Ethics and Governance",
      "Applied Capstone Project",
    ],
    careers: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Consultant",
      "Business Intelligence Lead",
    ],
  },
  {
    slug: "mba-melbourne",
    name: "Master of Business Administration",
    university: "University of Melbourne",
    universityShort: "UniMelb",
    country: "Australia",
    city: "Melbourne",
    level: "Masters",
    category: "Business and Management",
    duration: "18 months",
    tuitionFee: 48000,
    currency: "AUD",
    intakes: ["February", "July"],
    ielts: "7.0 overall, no band below 6.5",
    pte: "65 overall",
    overview:
      "A general management MBA built around leadership practice, strategy labs and a consulting project with an Australian or global partner organisation.",
    eligibility: [
      "Bachelors degree in any discipline",
      "Minimum 2 years of professional experience",
      "GMAT or executive assessment",
    ],
    modules: [
      "Strategic Management",
      "Corporate Finance",
      "Marketing Leadership",
      "Operations and Analytics",
      "Consulting Practicum",
    ],
    careers: ["Management Consultant", "Product Manager", "Operations Director", "Founder"],
  },
  {
    slug: "msc-cybersecurity-manchester",
    name: "MSc Cyber Security",
    university: "University of Manchester",
    universityShort: "UoM",
    country: "United Kingdom",
    city: "Manchester",
    level: "Masters",
    category: "Information Technology",
    duration: "1 year",
    tuitionFee: 28000,
    currency: "GBP",
    intakes: ["September"],
    ielts: "6.5 overall, no band below 6.0",
    pte: "62 overall",
    overview:
      "One-year specialist Masters covering network defence, cryptography, secure systems design and digital forensics with hands-on lab assessments.",
    eligibility: [
      "2:1 Honours degree in computing or related field",
      "Programming proficiency",
      "Statement of purpose",
    ],
    modules: [
      "Cryptography",
      "Network Security",
      "Digital Forensics",
      "Secure Software Engineering",
      "Research Dissertation",
    ],
    careers: ["Security Analyst", "Penetration Tester", "Security Architect", "GRC Consultant"],
  },
  {
    slug: "beng-mechanical-tum",
    name: "BEng Mechanical Engineering",
    university: "Technical University of Munich",
    universityShort: "TUM",
    country: "Germany",
    city: "Munich",
    level: "Bachelors",
    category: "Engineering",
    duration: "3 years",
    tuitionFee: 3000,
    currency: "EUR",
    intakes: ["October"],
    ielts: "6.0 overall",
    pte: "55 overall",
    overview:
      "A fundamentals-first engineering degree with strong laboratory work, industrial placements and access to Germany's automotive and aerospace sector.",
    eligibility: [
      "Higher secondary with strong maths and physics",
      "Recognised entrance qualification",
      "Language certificate",
    ],
    modules: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Materials Science",
      "CAD and Manufacturing",
      "Industrial Project",
    ],
    careers: ["Design Engineer", "Manufacturing Engineer", "Automotive R&D", "Project Engineer"],
  },
  {
    slug: "msn-nursing-asu",
    name: "Master of Science in Nursing",
    university: "Arizona State University",
    universityShort: "ASU",
    country: "United States",
    city: "Phoenix",
    level: "Masters",
    category: "Healthcare",
    duration: "2 years",
    tuitionFee: 34500,
    currency: "USD",
    intakes: ["Fall", "Spring"],
    ielts: "7.0 overall",
    pte: "68 overall",
    overview:
      "Advanced clinical practice program with simulation labs, community health placements and preparation for US licensure pathways.",
    eligibility: [
      "BSc Nursing degree",
      "Registered nurse licence",
      "Clinical experience of 1 year",
    ],
    modules: [
      "Advanced Pathophysiology",
      "Clinical Pharmacology",
      "Population Health",
      "Healthcare Leadership",
      "Clinical Practicum",
    ],
    careers: [
      "Nurse Practitioner",
      "Clinical Nurse Leader",
      "Healthcare Administrator",
      "Public Health Specialist",
    ],
  },
  {
    slug: "bba-hospitality-ucd",
    name: "BSc International Hospitality Management",
    university: "University College Dublin",
    universityShort: "UCD",
    country: "Ireland",
    city: "Dublin",
    level: "Bachelors",
    category: "Hospitality",
    duration: "3 years",
    tuitionFee: 17500,
    currency: "EUR",
    intakes: ["September"],
    ielts: "6.5 overall",
    pte: "61 overall",
    overview:
      "Industry-linked hospitality degree with paid internship placements across hotels, events and tourism operators in Ireland and Europe.",
    eligibility: [
      "Higher secondary certificate with 65%",
      "English proficiency",
      "Personal statement",
    ],
    modules: [
      "Hospitality Operations",
      "Revenue Management",
      "Food and Beverage",
      "Tourism Marketing",
      "Industry Placement",
    ],
    careers: ["Hotel Manager", "Events Director", "Revenue Analyst", "Guest Experience Lead"],
  },
  {
    slug: "mfin-finance-nus",
    name: "Master of Finance",
    university: "National University of Singapore",
    universityShort: "NUS",
    country: "Singapore",
    city: "Singapore",
    level: "Masters",
    category: "Finance",
    duration: "1 year",
    tuitionFee: 42000,
    currency: "SGD",
    intakes: ["January", "August"],
    ielts: "6.5 overall",
    pte: "62 overall",
    overview:
      "Quantitatively intensive finance Masters with modules in asset management, financial engineering and Asian capital markets.",
    eligibility: [
      "Bachelors in finance, economics or engineering",
      "GMAT or GRE",
      "Two references",
    ],
    modules: [
      "Corporate Valuation",
      "Derivatives",
      "Financial Econometrics",
      "Asian Capital Markets",
      "Applied Portfolio Project",
    ],
    careers: [
      "Investment Analyst",
      "Risk Manager",
      "Quantitative Researcher",
      "Corporate Finance Associate",
    ],
  },
  {
    slug: "ma-design-leeds",
    name: "MA Design and Digital Media",
    university: "University of Leeds",
    universityShort: "Leeds",
    country: "United Kingdom",
    city: "Leeds",
    level: "Masters",
    category: "Arts and Design",
    duration: "1 year",
    tuitionFee: 24000,
    currency: "GBP",
    intakes: ["September"],
    ielts: "6.5 overall",
    pte: "60 overall",
    overview:
      "Studio-led Masters combining interaction design, motion graphics and design research, culminating in a public exhibition.",
    eligibility: [
      "Honours degree in design or related area",
      "Portfolio submission",
      "Statement of intent",
    ],
    modules: [
      "Interaction Design",
      "Motion and Narrative",
      "Design Research Methods",
      "Studio Practice",
      "Final Exhibition",
    ],
    careers: ["Product Designer", "Motion Designer", "Creative Director", "UX Researcher"],
  },
  {
    slug: "pgd-business-analytics-ubc",
    name: "Postgraduate Diploma in Business Analytics",
    university: "University of British Columbia",
    universityShort: "UBC",
    country: "Canada",
    city: "Vancouver",
    level: "Diploma",
    category: "Data Science",
    duration: "1 year",
    tuitionFee: 19500,
    currency: "CAD",
    intakes: ["January", "May", "September"],
    ielts: "6.0 overall",
    pte: "58 overall",
    overview:
      "Career-focused diploma delivering practical analytics skills in SQL, visualisation and forecasting with a co-op work term.",
    eligibility: ["Bachelors degree in any discipline", "Basic quantitative aptitude", "Resume"],
    modules: [
      "Business Statistics",
      "SQL and Data Modelling",
      "Visual Analytics",
      "Forecasting",
      "Co-op Work Term",
    ],
    careers: ["Business Analyst", "Reporting Analyst", "Operations Analyst", "Data Consultant"],
  },
  {
    slug: "meng-software-monash",
    name: "Master of Software Engineering",
    university: "Monash University",
    universityShort: "Monash",
    country: "Australia",
    city: "Melbourne",
    level: "Masters",
    category: "Information Technology",
    duration: "2 years",
    tuitionFee: 45500,
    currency: "AUD",
    intakes: ["February", "July"],
    ielts: "6.5 overall",
    pte: "58 overall",
    overview:
      "Accredited software engineering Masters with cloud architecture, distributed systems and an industry-based team project.",
    eligibility: [
      "Bachelors degree in computing or engineering",
      "Programming background",
      "Academic transcripts",
    ],
    modules: [
      "Distributed Systems",
      "Cloud Architecture",
      "Software Quality",
      "Advanced Algorithms",
      "Industry Project",
    ],
    careers: ["Software Engineer", "Cloud Architect", "DevOps Engineer", "Technical Lead"],
  },
  {
    slug: "ms-information-systems-neu",
    name: "MS Information Systems",
    university: "Northeastern University",
    universityShort: "NEU",
    country: "United States",
    city: "Boston",
    level: "Masters",
    category: "Information Technology",
    duration: "2 years",
    tuitionFee: 39000,
    currency: "USD",
    intakes: ["Fall", "Spring"],
    ielts: "6.5 overall",
    pte: "61 overall",
    overview:
      "STEM-designated program pairing software development and enterprise systems with Northeastern's signature co-op placements.",
    eligibility: [
      "Bachelors degree with 3.0 GPA",
      "Programming coursework",
      "Statement of purpose",
    ],
    modules: [
      "Application Engineering",
      "Data Management",
      "Web Development",
      "Enterprise Architecture",
      "Co-op Experience",
    ],
    careers: ["Systems Analyst", "Full Stack Developer", "Solutions Architect", "Product Analyst"],
  },
  {
    slug: "bcom-auckland",
    name: "Bachelor of Commerce",
    university: "University of Auckland",
    universityShort: "UoA",
    country: "New Zealand",
    city: "Auckland",
    level: "Bachelors",
    category: "Business and Management",
    duration: "3 years",
    tuitionFee: 39500,
    currency: "NZD",
    intakes: ["February", "July"],
    ielts: "6.0 overall",
    pte: "50 overall",
    overview:
      "Flexible commerce degree letting students major in accounting, marketing, economics or international business.",
    eligibility: ["Higher secondary with 65%", "English proficiency", "Academic transcripts"],
    modules: [
      "Accounting Principles",
      "Microeconomics",
      "Marketing Fundamentals",
      "Business Analytics",
      "Capstone Strategy",
    ],
    careers: [
      "Accountant",
      "Marketing Executive",
      "Economic Analyst",
      "Business Development Manager",
    ],
  },
];
export const services = [
  {
    title: "Personalized Study Abroad Advisory",
    description:
      "Dedicated university matching, program selection, and personalized academic roadmap tailored to your child's goals and strengths.",
    icon: "Compass",
  },
  {
    title: "Direct University Placement",
    description:
      "Connecting students with selective universities across the USA, Canada, the UK, and 25 countries worldwide.",
    icon: "Building2",
  },
  {
    title: "Application & Essay Coaching",
    description:
      "Meticulous academic review, personal statement editing, recommendation letters, and application submissions that stand out.",
    icon: "FileCheck2",
  },
  {
    title: "Parent Transparency & Updates",
    description:
      "Parents stay informed at every milestone with clear timelines, admission offer tracking, and direct advisor communication.",
    icon: "FolderCheck",
  },
  {
    title: "Visa Coaching & Compliance Assurance",
    description:
      "Proven 98% student visa success rate through financial file validation, documentation auditing, and embassy interview coaching.",
    icon: "Plane",
  },
  {
    title: "Merit Scholarships & Tuition Guidance",
    description:
      "Helping families position for merit-based scholarships, tuition fee waivers, and financial aid to reduce study costs.",
    icon: "Award",
  },
  {
    title: "English Language Exam Preparation",
    description:
      "Structured training for Duolingo English Test, IELTS, and TOEFL to meet North American university requirements.",
    icon: "BookOpen",
  },
  {
    title: "Pre-Departure, Housing & Arrival",
    description:
      "Complete student accommodation guidance, airport welcome in North America, and ongoing mentoring until graduation.",
    icon: "Luggage",
  },
];

export const whatWeDoServices = [
  {
    step: "01",
    title: "Early Academic Preparation",
    subtitle: "Profile Building & Curriculum Strategy",
    tagline: "Build a strong academic profile aligned with international standards.",
    description:
      "From subject selection to GPA optimization and career orientation, we guide high school students to build a strong academic profile aligned with U.S. and Canadian admission standards.",
    points: [
      "Academic pathway planning",
      "Program and career alignment",
      "Early strategy for competitive universities",
    ],
    icon: "BookOpen",
    badge: "Early Preparation",
  },
  {
    step: "02",
    title: "English Language Training",
    subtitle: "Strong English. Strong Confidence. Strong Results.",
    tagline: "Master required English proficiency exams with confidence.",
    description:
      "We assess, train, and prepare students for required English exams (Duolingo, IELTS, TOEFL), ensuring they meet admission standards with confidence.",
    points: [
      "English level assessment",
      "Test preparation roadmap",
      "Interview communication coaching",
    ],
    icon: "Languages",
    badge: "Test Prep & Fluency",
  },
  {
    step: "03",
    title: "University Admission & Placement",
    subtitle: "From Confusion to Acceptance Letter",
    tagline: "Strategic positioning for admission success in the U.S. and Canada.",
    description:
      "We guide students step by step through school selection, document preparation, personal statements, and submission — strategically positioning them for admission success in the U.S. and Canada.",
    points: [
      "Best-fit school matching",
      "Application and essay review",
      "Scholarship and transfer guidance",
    ],
    icon: "Building2",
    badge: "Application Excellence",
  },
  {
    step: "04",
    title: "Visa & Financial Guidance",
    subtitle: "Prepared. Structured. Confident.",
    tagline: "Thorough documentation and embassy interview readiness.",
    description:
      "We help families understand financial proof requirements and visa processes to strengthen approval chances through meticulous file auditing and mock interview preparation.",
    points: [
      "Financial documentation guidance",
      "Visa interview preparation",
      "Compliance with immigration requirements",
    ],
    icon: "FileCheck2",
    badge: "Visa Assurance",
  },
  {
    step: "05",
    title: "Arrival, Housing & Long-Term Mentoring",
    subtitle: "Support Beyond Admission — Connected Until Graduation",
    tagline: "Continuous support from airport arrival to college graduation.",
    description:
      "We don’t stop at admission. From airport arrival guidance to housing support, campus adaptation, academic mentoring, and transfer strategy — we stay connected until graduation.",
    points: [
      "Pre-departure orientation",
      "Housing & arrival guidance",
      "Academic check-ins and long-term success strategy",
    ],
    icon: "Compass",
    badge: "Beyond Admission",
  },
];

export const corePillars = [
  {
    title: "Clarity",
    highlight: "Clear academic direction",
    description: "Clear academic direction tailored to student strengths and long-term ambition.",
  },
  {
    title: "Eligibility",
    highlight: "Honest eligibility assessment",
    description: "Honest eligibility assessment across U.S. and Canadian admission standards.",
  },
  {
    title: "Strategy",
    highlight: "Personalized success roadmap",
    description: "Personalized success roadmap maximizing scholarship opportunities and visa success.",
  },
];

export const whatWeDoPillars = [
  {
    title: "Structured & Transparent Process",
    highlight: "We don’t guess. We plan.",
    description:
      "From university selection to visa preparation, every step is clearly explained so students and families feel confident — not overwhelmed.",
  },
  {
    title: "Scholarships & Smart Financial Guidance",
    highlight: "Maximizing merit aid and realistic budgeting.",
    description:
      "We help students position themselves for merit-based scholarships and choose realistic programs aligned with their budget and goals.",
  },
  {
    title: "Support Beyond Admission",
    highlight: "Admission is just the beginning.",
    description:
      "We assist with pre-departure preparation, housing guidance, arrival orientation, and ongoing mentoring so students settle successfully in the U.S. and Canada.",
  },
];

export const whatWeDoStats = [
  { value: "+5k", label: "Students Guided", sublabel: "Over 5,000 Families Supported" },
  {
    value: "$3M+",
    label: "Scholarships Secured",
    sublabel: "Merit-based and university scholarships awarded",
  },
  {
    value: "10+",
    label: "Years of Commitment",
    sublabel: "Through guidance, strategy, and personalized support",
  },
  {
    value: "100%",
    label: "Pre-Departure & Arrival Support",
    sublabel: "Housing & airport preparation — we don’t leave students alone",
  },
];

export const realStoriesVideos = [
  {
    id: "bocar-diallo",
    person: "Bocar Diallo",
    role: "International Student",
    title: "Bocar Diallo — Student Success Story",
    category: "Student Testimonial",
    destination: "North America Admissions & Scholarship",
    quote: "Edu-X provided me with clarity and strategic guidance at every step of my university application.",
    duration: "0:13",
    poster: "https://static.wixstatic.com/media/e87925_71ee13a21f4b4e979437cceb85acd8a2f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_71ee13a21f4b4e979437cceb85acd8a2/720p/mp4/file.mp4",
  },
  {
    id: "sidy-sow",
    person: "Sidy Sow",
    role: "Enrolled Student in Canada",
    title: "Sidy Sow — Airport Arrival & On-Campus Welcome",
    category: "Arrival & Housing",
    destination: "Montreal, Canada",
    quote: "From my flight to airport pickup and moving into residence, Edu-X was right there beside me.",
    duration: "2:03",
    poster: "https://static.wixstatic.com/media/e87925_649eded3cad247c8bf6809557aa21351f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_649eded3cad247c8bf6809557aa21351/720p/mp4/file.mp4",
  },
  {
    id: "mamady",
    person: "Mamady",
    role: "International Student",
    title: "Mamady — Student Housing Experience & Settling In",
    category: "Arrival & Housing",
    destination: "Montreal Student Living",
    quote: "Finding safe, verified student accommodation abroad made the whole transition smooth and stress-free.",
    duration: "1:04",
    poster: "https://static.wixstatic.com/media/e87925_a1afbe73ded448d2b274478fdc26c459f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_a1afbe73ded448d2b274478fdc26c459/720p/mp4/file.mp4",
  },
  {
    id: "djinde-cisse",
    person: "Djinde Cissé",
    role: "U.S. Visa Grant Recipient",
    title: "Djinde Cissé — Visa Approval Testimonial",
    category: "Visa Success",
    destination: "United States University Admission",
    quote: "Thorough documentation prep and mock interviews gave me complete confidence at the consulate.",
    duration: "0:21",
    poster: "https://static.wixstatic.com/media/e87925_2d22b80f54dd46efa20e61dcc0b0b1bbf000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_2d22b80f54dd46efa20e61dcc0b0b1bb/720p/mp4/file.mp4",
  },
  {
    id: "elysee-sidibe",
    person: "Mr. Elysée Sidibé",
    role: "Parent of Outbound Student",
    title: "Mr. Elysée Sidibé — Parent Trust & Guidance",
    category: "Parents & Leadership",
    destination: "Family Partnership",
    quote: "As a parent, having constant communication and a structured roadmap gave our family total peace of mind.",
    duration: "1:00",
    poster: "https://static.wixstatic.com/media/e87925_458094ea39bb4b28a8ba783ab9c370d8f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_458094ea39bb4b28a8ba783ab9c370d8/720p/mp4/file.mp4",
  },
  {
    id: "accueil-installation",
    person: "Edu-X Ground Operations",
    role: "Arrival & Settlement Support",
    title: "Arrival & Settlement Journey — From Airport to Campus",
    category: "Arrival & Housing",
    destination: "Campus Arrival Protocol",
    quote: "We don't stop at visa approval. Our team welcomes students in North America and ensures their successful orientation.",
    duration: "2:40",
    poster: "https://static.wixstatic.com/media/e87925_9593dfa47ca24b338f0abdba2f007256f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_9593dfa47ca24b338f0abdba2f007256/720p/mp4/file.mp4",
  },
  {
    id: "moussa-arrival",
    person: "Moussa",
    role: "Enrolled Student",
    title: "Moussa — Arrival & First Days on Campus",
    category: "Arrival & Housing",
    destination: "North America Campus Journey",
    quote: "Arriving in a new country was exciting rather than intimidating because Edu-X prepared every detail.",
    duration: "1:25",
    poster: "https://static.wixstatic.com/media/e87925_ec859771a34f4697b71c9bb9824b4de3f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_ec859771a34f4697b71c9bb9824b4de3/720p/mp4/file.mp4",
  },
  {
    id: "rouki-arrival",
    person: "Rouki",
    role: "University Student",
    title: "Rouki — Student Arrival & University Reception",
    category: "Arrival & Housing",
    destination: "University Orientation & Mentoring",
    quote: "Edu-X helped me choose the right program and stayed with me through orientation week.",
    duration: "1:45",
    poster: "https://static.wixstatic.com/media/e87925_eb65f98eafa543cb8ff279cb61541f64f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_eb65f98eafa543cb8ff279cb61541f64/720p/mp4/file.mp4",
  },
  {
    id: "moussa-s-visa",
    person: "Moussa S.",
    role: "U.S. Visa Approved Student",
    title: "Moussa S. — Visa Interview & Approval Story",
    category: "Visa Success",
    destination: "Financial Vetting & Visa Stamp",
    quote: "The interview simulation matched the embassy officer's questions point-by-point. Approved on first attempt!",
    duration: "0:22",
    poster: "https://static.wixstatic.com/media/e87925_f276ce39c12c4c7597704ac673ecc741f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_f276ce39c12c4c7597704ac673ecc741/720p/mp4/file.mp4",
  },
  {
    id: "dr-traore",
    person: "Dr. Traoré",
    role: "Academic Leader & Educator",
    title: "Dr. Traoré — Academic Leadership Review",
    category: "Parents & Leadership",
    destination: "Proven Mentorship & Academic Rigor",
    quote: "Edu-X sets the benchmark for international academic mobility in West Africa, safeguarding student futures.",
    duration: "4:57",
    poster: "https://static.wixstatic.com/media/e87925_d50d06d06aad4471a34c17876b2fc941f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_d50d06d06aad4471a34c17876b2fc941/720p/mp4/file.mp4",
  },
  {
    id: "parent-review",
    person: "Témoignage Parent d'Élève",
    role: "Parent of Outbound Student",
    title: "Parent Reflection — Transparent Guidance & Support",
    category: "Parents & Leadership",
    destination: "Family Partnership",
    quote: "We never felt left in the dark. Every milestone was documented, explained, and successfully met.",
    duration: "2:38",
    poster: "https://static.wixstatic.com/media/e87925_2eb7df3111ac4a97b0056f3a3a658767f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_2eb7df3111ac4a97b0056f3a3a658767/720p/mp4/file.mp4",
  },
  {
    id: "student-journey-review",
    person: "Edu-X Mobility Scholar",
    role: "Undergraduate Student",
    title: "Student Journey Review — From Profile to Placement",
    category: "Student Testimonial",
    destination: "Comprehensive Mobility Program",
    quote: "The leader training program and academic counseling prepared me to excel in my university coursework.",
    duration: "1:20",
    poster: "https://static.wixstatic.com/media/e87925_ad8b0aab051946f4b21200e0c67e01c7f000.jpg",
    videoUrl: "https://video.wixstatic.com/video/e87925_ad8b0aab051946f4b21200e0c67e01c7/720p/mp4/file.mp4",
  },
];

export const studentVoicesQuotes = [
  {
    name: "Mamadou Diouf",
    detail: "Studying Artificial Intelligence in Canada",
    quote:
      "Edu-X made studying AI in Canada possible for me. From admission to visa and housing in Montréal, everything was structured and clear. I arrived prepared and confident.",
    badge: "AI Scholar in Canada",
  },
  {
    name: "Fatoumata Guindo",
    detail: "Admitted to Emory University (USA)",
    quote:
      "Getting into Emory required strategy and preparation. Edu-X helped me present a strong application and supported me even after arrival. Their mentoring program truly made the difference.",
    badge: "Emory University Admit",
  },
  {
    name: "Mr. Stéphane Toupane",
    detail: "Parent of Outbound Student",
    quote:
      "I discovered Edu-X Services and realized it’s not just an agency — it’s a team that truly takes your daughter under their wing, listens to her, advises her, and guides her every step of the way.",
    badge: "Parent Partnership",
  },
];
export const processSteps = [
  {
    title: "Step 01: Free Family Consultation",
    description:
      "We discuss your child's academic aspirations, family budget, and career goals to perform an honest eligibility assessment.",
  },
  {
    title: "Step 02: Best-Fit University & Scholarship Plan",
    description:
      "We build a personalized roadmap matching programs in the USA & Canada, identifying merit scholarships to ease the financial investment.",
  },
  {
    title: "Step 03: Applications, Essays & Admission Offers",
    description:
      "Step-by-step guidance through document collation, personal statements, recommendation letters, and university submissions.",
  },
  {
    title: "Step 04: Visa File Auditing & Arrival Settlement",
    description:
      "Thorough financial documentation review, mock interview coaching for 98% visa success, housing bookings, and airport welcome.",
  },
];
export const founderLetter = {
  author: "Mrs KONATE Djenabou Diawara",
  title: "Founder & Executive Director",
  organization: "Education eXcellence Services (Edu-X Services)",
  image: founderImageFile,
  fallbackImage: founderImageFile,
  headline: "A Letter from the Founder",
  tagline: "From Africa to the World — Transforming Uncertainty into Direction",
  quote: "Excellence should never be accidental. It should be intentional.",
  coverageStat: "USA & Canada Specialization",
  launchStat: "Columbia University Alumna",
  paragraphs: [
    "When I left Mali to pursue my studies in the United States, I believed that hard work alone would be enough.",
    "I quickly learned that ambition, while powerful, is not sufficient without structure, guidance, and strategic positioning.",
    "Like many African students, I entered the U.S. education system without fully understanding its complexity — the academic pathways, institutional expectations, cultural dynamics, and unspoken rules that determine long-term success.",
    "What I witnessed was sobering. Among the students who began that journey with me, very few completed it on time. Not because they lacked intelligence. Not because they lacked drive. But because they lacked a roadmap.",
    "That experience shaped my conviction: African talent is capable of competing at the highest global level — when properly prepared.",
    "Edu-X was built on that belief.",
    "We are not simply an admission agency. We are a strategic bridge between Africa and North America’s leading universities. We focus on positioning — academically, culturally, and professionally.",
    "We prepare students not only to gain admission, but to thrive. We support families not only with paperwork, but with clarity and confidence.",
    "Our mission is deliberate: To ensure that African talent is guided, structured, and equipped to succeed in the world’s most competitive academic environments.",
    "Excellence should never be accidental. It should be intentional.",
    "Through Edu-X, my personal journey has become a collective pathway — one that transforms uncertainty into direction, and ambition into achievement. From Africa to the World.",
  ],
};

export const credentials = [
  {
    title: "Academic Foundation — Columbia University",
    badge: "Ivy League Foundation",
    description:
      "A bachelor’s degree earned within one of the world’s most rigorous academic environments, providing firsthand experience navigating the U.S. higher education system at the highest level.",
  },
  {
    title: "ICEF Agency Trusted Certification",
    badge: "Global Compliance",
    description:
      "Recognition aligned with international standards in ethical student counselling and global university collaboration.",
  },
  {
    title: "ICEF Canada Course Graduate Credential",
    badge: "Canadian Mobility",
    description:
      "Advanced training in Canadian education systems, visa regulations, and admissions best practices.",
  },
  {
    title: "Duolingo English Test Partner Certification",
    badge: "Official Test Partner",
    description:
      "Verified expertise in guiding students through approved English proficiency pathways recognized by North American institutions.",
  },
  {
    title: "Excellence Recognition — Lycée Sacré Cœur “Excelsior 2024”",
    badge: "Academic Impact",
    description:
      "Awarded for measurable impact in preparing students for international academic success.",
  },
  {
    title: "Scholarship Recognition — Thompson Rivers University",
    badge: "University Award",
    description:
      "Documented scholarship outcomes secured for students through strategic application positioning and university alignment.",
  },
];

export const leadershipPrograms = [
  {
    id: "leader-coaching",
    title: "Leader Training Program",
    subtitle: "Structured Coaching for Long-Term Success",
    description:
      "Through guided coaching, students develop essential habits for university and lifelong leadership.",
    points: [
      "Confidence & self-discipline",
      "Strategic goal-setting habits",
      "Strong communication skills",
      "Vision-driven leadership",
    ],
  },
  {
    id: "seminars-workshops",
    title: "Seminars & Workshops",
    subtitle: "Practical. Strategic. University-Focused.",
    description:
      "Interactive sessions equipping students to navigate high-stakes academic environments and major selection.",
    points: [
      "Leadership & public speaking",
      "Academic excellence strategies",
      "Career clarity & major selection",
      "Personal branding for university applications",
    ],
  },
  {
    id: "monthly-activities",
    title: "Monthly Leadership Activities",
    subtitle: "Build Real Experience — Not Just Certificates",
    description:
      "Active engagement ensuring students build tangible extracurricular profiles for competitive admissions.",
    points: [
      "Community impact projects",
      "Networking events with professionals",
      "Mentorship circles",
      "Skill-building challenges",
    ],
  },
  {
    id: "global-mindset",
    title: "Global Mindset Development",
    subtitle: "Think Beyond Borders. Compete Globally.",
    description:
      "Studying abroad requires more than ambition — it requires cultural intelligence and adaptability.",
    points: [
      "International education systems",
      "Cross-cultural communication",
      "Global career pathways",
      "World-class standards of excellence",
    ],
  },
];

export const communityImpact = {
  headline:
    "At Edu-X Services, community impact is not a side initiative — it is at the heart of our mission.",
  subhead:
    "We believe that talent exists everywhere in Africa. What is often missing is recognition, exposure, and access to opportunity. Through our annual initiatives in Mali, we celebrate excellence, reward discipline, and open doors to global education.",
  gala: {
    title: "Gala Dinner of Excellence in Mali",
    subtitle: "Recognizing the Top 10 Students in the Country",
    description:
      "Each year, Edu-X organizes a prestigious Gala Dinner of Excellence in Mali to recognize the Top 10 students in the country. This event brings together students, parents, school leaders, community partners, and national stakeholders.",
    goals: [
      "Build a culture of academic excellence",
      "Inspire students to think globally",
      "Encourage families to believe in international opportunities",
      "Create visible success stories that motivate an entire generation",
    ],
  },
  competition: {
    title: "“Question pour un Excellent” Live Academic Competition",
    subtitle: "High-level intellectual competition across disciplines",
    description:
      "Inspired by intellectual challenge and academic rigor, this live event allows students to compete publicly by answering high-level academic questions across disciplines. The energy is powerful, the competition is intense, and the impact is transformative.",
    reward: "The winner receives a full scholarship to study in the United States.",
  },
};

export const faqs = [
  {
    q: "What is Edu-X Services?",
    a: "Education eXcellence Services (Edu-X) is an international education consulting and mobility platform that guides African students to study in the United States and Canada. We provide structured guidance from program selection, university application, and scholarship search to pre-departure orientation, arrival & housing, and ongoing mentoring.",
  },
  {
    q: "Do you guarantee admission or visa approval?",
    a: "No ethical institution can guarantee admission or visa approval. However, we assess academic readiness, match students with realistic options, guide them through every required step, and prepare them for interviews and documentation. Our strength is strategic positioning and preparation.",
  },
  {
    q: "What makes Edu-X different?",
    a: "We combine real lived experience (our Founder studied in the U.S. at Columbia University), modern technology infrastructure, a continental African vision, and a leadership development mindset. We guide students to study, thrive, and return stronger.",
  },
  {
    q: "What support is provided after visa issuance?",
    a: "We don't stop at admission. We assist with pre-departure preparation, housing guidance, arrival orientation, and ongoing mentoring so students settle successfully in the U.S. and Canada.",
  },
];

export const testimonials = [
  {
    name: "Mamadou Diouf",
    place: "Student in Montreal, Canada — Artificial Intelligence",
    rating: 5,
    quote:
      "Edu-X made studying AI in Canada possible for me. From admission to visa and housing in Montréal, everything was structured and clear. I arrived prepared and confident.",
  },
  {
    name: "Fatoumata Guindo",
    place: "Undergraduate Scholar, Emory University (USA)",
    rating: 5,
    quote:
      "Getting into Emory required strategy and preparation. Edu-X helped me present a strong application and supported me even after arrival. Their mentoring program truly made the difference.",
  },
  {
    name: "Mr. Stéphane Toupane",
    place: "Parent of Outbound Student in Canada",
    rating: 5,
    quote:
      "I discovered Edu-X Services and realized it’s not just an agency — it’s a team that truly takes your daughter under their wing, listens to her, advises her, and guides her every step of the way.",
  },
  {
    name: "Mr. Elysée Sidibé",
    place: "Parent of Outbound Student in the USA",
    rating: 5,
    quote:
      "As a parent, having constant communication and a structured roadmap gave our family total peace of mind. Every milestone was clearly documented and achieved.",
  },
  {
    name: "Djinde Cissé",
    place: "U.S. Visa Grant Recipient",
    rating: 5,
    quote:
      "Thorough financial documentation review and mock interview practice gave me complete confidence before my embassy appointment. Approved on my first attempt!",
  },
];

export const events = [
  {
    title: "Study in USA & Canada: Parent & Student Information Fair 2026",
    date: "14 November 2026",
    time: "09:30 AM - 05:00 PM GMT",
    location: "Dakar Regional Office & Radisson Blu, Senegal",
    online: false,
    description:
      "Meet admissions representatives and Edu-X advisors in person to review top university programs, scholarships, and admission criteria.",
  },
  {
    title: "Mastering the Student Visa: Financial Proof & Embassy Interview Prep",
    date: "28 November 2026",
    time: "04:00 PM GMT",
    location: "Live Interactive Webinar",
    online: true,
    description:
      "Essential guidance for parents and students on meeting Canadian PAL and U.S. I-20 financial requirements and passing consular interviews.",
  },
  {
    title: "North America Scholarships & Tuition Waivers: Practical Strategy",
    date: "12 December 2026",
    time: "11:00 AM - 01:00 PM GMT",
    location: "Dakar Plateau Hub & Virtual Stream",
    online: true,
    description:
      "How African high school seniors and university graduates can position their profiles for merit-based scholarships and partial tuition waivers.",
  },
  {
    title: "Pre-Departure & Student Housing Orientation: Montreal & US Campuses",
    date: "10 January 2027",
    time: "03:00 PM GMT",
    location: "Virtual Orientation for Outbound Families",
    online: true,
    description:
      "A complete walkthrough for outbound students and parents covering verified dorms, airport arrival, health insurance, and banking abroad.",
  },
];

export const blogs = [
  {
    slug: "how-to-study-in-usa-and-canada-from-africa",
    category: "Student Guide",
    title: "How to Study in the USA & Canada: The Complete Guide for African Students",
    date: "18 October 2026",
    excerpt:
      "A complete roadmap from high school subject selection and Duolingo prep to university acceptance and campus arrival.",
    image: "blog-visa",
  },
  {
    slug: "the-98-percent-visa-standard",
    category: "Visa & Financing",
    title: "The 98% Visa Standard: How Families Can Prepare Bulletproof Financial Files",
    date: "29 September 2026",
    excerpt:
      "Essential insights on Canadian PAL requirements, U.S. bank statements, sponsorship affidavits, and mock interview practice.",
    image: "blog-planning",
  },
  {
    slug: "global-university-scholarships-african-students",
    category: "Scholarships & Aid",
    title: "Securing Merit Scholarships: How African Students Can Reduce Tuition Costs",
    date: "12 September 2026",
    excerpt:
      "Discover how our students access university merit awards, departmental bursaries, and tuition discounts before applying.",
    image: "blog-scholarship",
  },
];

export const whyChooseUs = [
  {
    title: "Personalized Guidance for Every Family",
    description:
      "We don't treat you like a number. Our advisors take time to understand your child's passions, academic profile, and family budget.",
  },
  {
    title: "189+ Universities across 25 Countries",
    description:
      "Direct admissions pathways to selective universities across the USA, Canada, UK, Europe, and beyond.",
  },
  {
    title: "98% Proven Visa Success Rate",
    description:
      "Meticulous financial file validation and realistic consular interview simulations ensure families feel confident at the embassy.",
  },
  {
    title: "Total Transparency for Parents",
    description:
      "Honest eligibility assessments, clear cost estimates, and regular progress updates so parents never feel in the dark.",
  },
  {
    title: "Columbia University-Trained Mentorship",
    description:
      "Guidance backed by authentic lived experience navigating the Ivy League and North American higher education systems.",
  },
  {
    title: "End-to-End Support Beyond Admission",
    description:
      "From pre-departure orientation and student housing in North America to campus adaptation and ongoing academic check-ins.",
  },
];

export const contactInfo = {
  brand: "Education eXcellence Services",
  brandShort: "Edu-X Services",
  portalName: "Education eXcellence Services Portal",
  portalShort: "Edu-X Services",
  tagline: "Personalized guidance for ambitious students pursuing academic excellence",
  subTagline:
    "The leading study abroad agency in Senegal, guiding African students into top US and Canadian universities. Admission, visa, scholarships.",
  founder: "Mrs KONATE Djenabou Diawara",
  founderTitle: "Founder & Executive Director",
  founderRole: "Founder & Executive Director, Education eXcellence Services",
  founderImage: founderImageFile,
  email: "contact@edu-xservices.com",
  portalEmail: "partnerships@edu-xservices.com",
  phone: "+221 33 848 38 12",
  phoneClean: "221338483812",
  whatsapp: "221338483812",
  address: "AV Malick Sy Face Central, Immeuble 10, suite 21, Dakar Plateau, Dakar, Sénégal",
  hubs: ["Dakar (Headquarters)", "Lagos", "Nairobi", "London Liaison"],
  programCount: "96,083+",
  countryCount: "25+",
  universityCount: "189+",
  visaSuccessRate: "98%",
  matchingTimeline: "3 - 6 Months",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437.362142278918!2d-17.447576!3d14.678121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1724a7378d3eb%3A0x6b4f7a75069279ea!2sAvenue%20Malick%20Sy%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
  backendUrl: "https://portal.edu-xservices.com/coursefinder/backend",
};
