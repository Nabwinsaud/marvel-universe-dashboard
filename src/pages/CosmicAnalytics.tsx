import AnalyticsChart, { ChartData } from "@/components/analytics/Analytics";
import useMarvelCharacters from "@/hooks/useCharacters";
import { useState } from "react";
import { Result } from "typing";

export default function CosmicAnalytics() {
  const [limitOffset] = useState({
    query: "",
    limit: 50,
    offset: 50,
  });

  const { marvelCharacterData, isLoading } = useMarvelCharacters<Result>({
    limit: limitOffset?.limit,
    offset: limitOffset?.offset,
    queryKey: "analytics",
  });

  const filteredData = marvelCharacterData?.data?.data?.results?.map(
    (cosmics) => {
      return {
        name: cosmics?.name,
        date: cosmics?.modified?.slice(0, 10),
        availableComics: cosmics?.comics.available,
        cosmicItems: cosmics.comics.items?.length,
      };
    }
  );
  return (
    <div>
      <AnalyticsChart
        data={filteredData as ChartData["data"]}
        categories={["name", "availableComics", "cosmicItems"]}
        isLoading={isLoading}
      />
    </div>
  );
}
