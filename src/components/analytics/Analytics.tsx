import { Card, Title, AreaChart } from "@tremor/react";
import Skeleton from "../Skeleton";

const dataFormatter = (number: number) => {
  return number.toString();
};

export interface ChartData {
  data:
    | {
        date: string;
        name: string;
        availableComics: number;
        cosmicItems: number;
      }[];
  categories: string[];
  isLoading?: boolean;
}
export default function AnalyticsChart(props: ChartData) {
  const { data, categories, isLoading } = props;

  return (
    <Card>
      <Title>Number of cosmic Appeared (Count)</Title>

      {isLoading ? (
        <Skeleton />
      ) : (
        <AreaChart
          className="h-72 mt-4"
          data={data as ChartData["data"]}
          index="Date"
          categories={categories}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      )}
    </Card>
  );
}
