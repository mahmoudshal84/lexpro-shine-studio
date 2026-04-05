import { useState, useMemo } from "react";
import StarRating from "@/components/StarRating";
import EditorialHeadline from "@/components/EditorialHeadline";
import DepthCard from "@/components/DepthCard";
import { REVIEWS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const PER_PAGE = 6;

const ReviewsPage = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const serviceOptions = useMemo(() => {
    const unique = Array.from(new Set(REVIEWS.map((r) => r.service)));
    return ["All", ...unique];
  }, []);

  const filtered = filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.service === filter);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const avg = (filtered.reduce((a, r) => a + r.rating, 0) / filtered.length).toFixed(1);

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <StarRating rating={5} size={28} />
            <span className="text-3xl font-black text-foreground">{avg}</span>
          </div>
          <p className="text-muted-foreground">{filtered.length} Reviews</p>
          <EditorialHeadline
            as="h1"
            segments={[
              { text: "Client ", weight: "light" },
              { text: "Reviews", weight: "bold", accent: true },
            ]}
            className="mt-2"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => { setFilter(opt); setPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === opt
                  ? "bg-primary text-primary-foreground border-primary glow-blue-sm"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginated.map((r, i) => (
            <DepthCard key={i}>
              <StarRating rating={r.rating} />
              <p className="text-sm text-muted-foreground mt-4 mb-4 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.service}</p>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </DepthCard>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={page === i + 1 ? "default" : "ghost"}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ReviewsPage;
