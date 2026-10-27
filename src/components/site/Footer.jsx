import { Link } from "react-router-dom";
import { Globe2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { contactInfo, destinations } from "@/data/site";
import { Logo } from "./Logo";
const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Course Finder", to: "/courses" },
  { label: "Study Destinations", to: "/destinations" },
  { label: "Universities", to: "/universities" },
  { label: "Services", to: "/services" },
  { label: "Events & Fairs", to: "/events" },
  { label: "Student & Parent Guides", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
];
export function Footer() {
  return (
    <footer className="bg-[#061A3A] text-white border-t border-white/10">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm text-white/75 leading-relaxed">
            <strong className="text-white">{contactInfo.brand}</strong> ({contactInfo.portalShort})
            is the leading study abroad agency guiding African students and families to study at top universities in the USA, Canada, and across 25 global destinations.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#E8A0B0] font-semibold">
            <ShieldCheck className="size-4 text-[#B21941]" />
            <span>Guiding Students. Creating Futures. Changing Lives.</span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#E8A0B0]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#E8A0B0]">
            Global Destinations
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {destinations.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link to={`/destinations/${d.slug}`} className="transition-colors hover:text-white">
                  {d.flag} Study in {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#E8A0B0]">
            Headquarters & Hubs
          </h3>
          <ul className="mt-4 space-y-3 text-xs text-white/80">
            <li className="flex gap-2.5 items-start">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#B21941]" />
              <div>
                <strong className="text-white block font-semibold">Head Office:</strong>
                <span>{contactInfo.address}</span>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Globe2 className="size-4 shrink-0 text-emerald-400" />
              <span>Dakar • Lagos • Nairobi • London Liaison</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="size-4 shrink-0 text-emerald-400" />
              <a href={`tel:${contactInfo.phoneClean}`} className="hover:text-white font-medium">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="size-4 shrink-0 text-[#E8A0B0]" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#040f22]">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {contactInfo.brand} ({contactInfo.portalShort}). All
            rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
