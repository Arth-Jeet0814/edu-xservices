import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Course Finder", to: "/courses" },
  { label: "Universities", to: "/universities" },
  { label: "Services", to: "/services" },
  { label: "Guides", to: "/blogs" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[#B21941] font-bold bg-[#B21941]/10" }}
              className="rounded-full px-2.5 py-2 text-[0.82rem] font-medium whitespace-nowrap text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button
            asChild
            size="sm"
            className="btn-interactive bg-[#B21941] hover:bg-[#8e1233] text-white text-xs font-bold rounded-xl shadow-md hover:shadow-[#B21941]/30 transition-all"
          >
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="px-4 pt-4">
              <Logo />
            </div>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-[#B21941]/10 text-[#B21941] font-bold" }}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2 px-4 pb-8">
              <Button
                asChild
                className="bg-[#B21941] hover:bg-[#8e1233] text-white font-bold"
                onClick={() => setOpen(false)}
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
