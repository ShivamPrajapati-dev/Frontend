import React, { useState, useEffect, useRef, useCallback } from "react";
import GlassCard from "./GlassCard";
import useCompanySearch from "../CustomHook/useCompanySearch";
import EmptyCard from "./EmptyCard";
function CardGrid({ q }) {
  const [query, setQuery] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setQuery(q);
    setPageNumber(1);
  }, [q]);

  const { loading, hasMore, companies } = useCompanySearch(query, pageNumber);

  const observer = useRef();
  const lastCard = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div className="img-grid">
      {companies.map((company, index) => {
        if (companies.length === index + 1)
          return (
            <GlassCard
              Ref={lastCard}
              key={index}
              Website={company.Website}
              Owner={company.Owner}
              Name={company.Name}
              Established={company.Established}
              Description={company.Description}
            />
          );
        else
          return (
            <GlassCard
              key={index}
              Website={company.Website}
              Owner={company.Owner}
              Name={company.Name}
              Established={company.Established}
              Description={company.Description}
            />
          );
      })}
      {loading && <EmptyCard />}
      {loading && <EmptyCard />}
      {loading && <EmptyCard />}
    </div>
  );
}

export default CardGrid;
