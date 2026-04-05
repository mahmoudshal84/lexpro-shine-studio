import { cn } from "@/lib/utils";

interface DepthCardProps {
  children: React.ReactNode;
  className?: string;
}

const DepthCard = ({ children, className }: DepthCardProps) => (
  <div className={cn("rounded-xl p-[1px] card-hover group", className)} style={{
    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.19) 0%, transparent 60%)',
  }}>
    {/* Top-edge light reflection */}
    <div className="relative rounded-[11px] bg-card p-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 10%, hsl(0 0% 100% / 0.15) 50%, transparent 90%)' }}
      />
      {children}
    </div>
  </div>
);

export default DepthCard;
