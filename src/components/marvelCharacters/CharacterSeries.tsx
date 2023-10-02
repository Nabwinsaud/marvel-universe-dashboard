import { Badge } from "../ui/badge";
import { CharacterProfileProps } from "./CharacterProfileCard";

export default function SeriesList(props: CharacterProfileProps) {
  const { character } = props;
  return (
    <div className="space-y-1 mt-2">
      <p>
        Series:
        <span className="flex flex-wrap gap-2 my-1">
          {character?.series?.items.map((item, idx) => (
            <Badge
              className="font-semibold uppercase leading-relaxed"
              variant="outline"
              key={idx}
            >
              {item?.name?.length ? item?.name : "N/A" ?? "N/A"}
            </Badge>
          ))}
        </span>
      </p>
      <p>
        Available Series:{"   "}
        <span className="font-semibold">
          {character?.series?.available ?? 0}
        </span>{" "}
      </p>
    </div>
  );
}
