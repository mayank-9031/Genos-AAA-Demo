type PipelineBlockProps = {
  label: string;
  heading: string;
  role: string;
  body: string;
  connector?: string;
  isLast?: boolean;
};

export function PipelineBlock({
  label,
  heading,
  role,
  body,
  connector,
  isLast = false,
}: PipelineBlockProps) {
  return (
    <div
      className={[
        "group relative p-6 md:p-8 transition-colors duration-200 ease-out hover:bg-ink/[0.03]",
        !isLast ? "border-b border-sage/30 lg:border-b-0" : "",
        !isLast ? "lg:border-r lg:border-sage/40" : "",
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-[2px] bg-amber origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {connector ? (
        <p className="italic text-sage text-[12.5px] leading-snug -mt-1 mb-4">
          {connector}
        </p>
      ) : null}

      <p className="text-ink text-[11px] tracking-[0.16em] font-medium uppercase">
        {label}
      </p>
      <h3 className="font-serif text-ink text-[22px] md:text-[24px] leading-tight mt-4">
        {heading}
      </h3>
      <p className="italic text-sage text-[15px] mt-2">{role}</p>
      <p className="text-charcoal text-[16px] leading-relaxed mt-4">{body}</p>
    </div>
  );
}
