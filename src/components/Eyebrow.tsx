interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const Eyebrow = ({ children, className = "", center = true }: EyebrowProps) => (
  <p
    className={`inline-flex items-center gap-2.5 uppercase font-semibold mb-4 ${center ? "justify-center" : ""} ${className}`}
    style={{
      fontSize: '11px',
      letterSpacing: '0.15em',
      color: 'hsl(var(--accent))',
    }}
  >
    <span
      className="inline-block w-[2px] h-4 rounded-full shrink-0"
      style={{ background: 'hsl(var(--primary))' }}
    />
    {children}
  </p>
);

export default Eyebrow;
