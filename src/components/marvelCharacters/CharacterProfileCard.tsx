import { useNavigate } from "react-router-dom";
import { Result } from "typing";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SeriesList from "./CharacterSeries";

export interface CharacterProfileProps {
  character: Result;
}
export default function CharacterProfileCard({
  character,
}: CharacterProfileProps) {
  const thumbnail = character?.thumbnail?.path
    ? `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
    : "https://via.placeholder.com/300/450";

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex h-full  flex-col">
        <div className="justify-center mt-10 mx-auto md:px-24 px-5">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            className="mb-4 ml-5 md:ml-0"
          >
            Back
          </Button>

          <div className="md:flex">
            <img
              src={thumbnail}
              alt={character?.name}
              width={300}
              height={450}
              className="object-cover rounded-md"
            />

            <div className="flex flex-col ml-5">
              <h1 className="text-2xl font-bold mb-2 border-b py-2">
                {character?.name}
              </h1>
              <h6 className="text-sm font-medium mb-8 leading-relaxed">
                {character?.name}
              </h6>
              <div className="md:flex ">
                <Badge className="text-sm font-semibold uppercase leading-relaxed text-white">
                  {character?.name}
                </Badge>
              </div>
              <div className="text-sm mt-2 flex-wrap gap-2 space-x-2 flex ">
                {character?.comics?.items.map((item, idx) => (
                  <Badge
                    className="font-semibold uppercase leading-relaxed"
                    variant="outline"
                    key={idx}
                  >
                    {item?.name?.length ? item?.name : "N/A" ?? "N/A"}
                  </Badge>
                ))}
              </div>
              <p className="text-md mt-2 text-justify">
                {character?.description?.length
                  ? character?.description
                  : "No Description Available" ?? "N/A"}
              </p>
              <h5 className="mt-5">Marvel List</h5>
              <div className="space-y-1 mt-2">
                <p>
                  Cosmic:
                  <span className="flex flex-wrap gap-2 my-1">
                    {character?.comics?.items.map((item, idx) => (
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
                  Available Cosmic:{"   "}
                  <span className="font-semibold">
                    {character?.comics?.available ?? 0}
                  </span>{" "}
                </p>
              </div>

              <SeriesList character={character} />
            </div>
          </div>
        </div>
        <div className="justify-center mt-10 mx-auto md:px-24 px-5 ml-5">
          <h3>Gallery</h3>
          <div className="flex overflow-x-scroll bg-white space-x-2 py-3 ">
            <div className="w-[160px] h-auto border">
              <div className="object-cover rounded-md hover:scale-105 transition ease-in-out duration-150">
                <img src={thumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
