export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="bg-primary-soft text-primary-deep inline-flex rounded-full px-3.5 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-muted-foreground">{description}</p> : null}
    </div>
  );
}
