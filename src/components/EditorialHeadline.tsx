interface HeadlineSegment {
  text: string;
  weight: "light" | "bold";
  accent?: boolean;
}

interface EditorialHeadlineProps {
  segments: HeadlineSegment[];
  as?: "h1" | "h2";
  className?: string;
}

const EditorialHeadline = ({ segments, as: Tag = "h2", className = "" }: EditorialHeadlineProps) => (
  <Tag
    className={`text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] tracking-[-0.03em] ${className}`}
  >
    {segments.map((seg, i) => {
      const weightClass = seg.weight === "bold" ? "font-black" : "font-extralight text-foreground/85";
      if (seg.accent) {
        return (
          <span key={i} className={`${weightClass} relative inline-block`}>
            {seg.text}
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] rounded-full"
              style={{ background: 'hsl(var(--accent))' }}
            />
          </span>
        );
      }
      return (
        <span key={i} className={weightClass}>
          {seg.text}
        </span>
      );
    })}
  </Tag>
);

export default EditorialHeadline;
