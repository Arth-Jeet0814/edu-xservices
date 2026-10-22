import { Link } from "react-router-dom";
import eduxIcon from "@/assets/edux-icon.png";
import eduxLogo from "@/assets/edux-logo.png";

export function Logo({ inverted = false }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3 group">
      <img
        src={eduxIcon}
        alt="Edu-X Icon"
        className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
      />
      <img
        src={eduxLogo}
        alt="Education eXcellence Services"
        className={`h-7 sm:h-8 w-auto max-w-[220px] sm:max-w-[280px] object-contain transition-opacity ${
          inverted ? "brightness-0 invert opacity-95" : "opacity-100"
        }`}
      />
    </Link>
  );
}
