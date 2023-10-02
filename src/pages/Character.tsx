import useMarvelCharacter from "@/hooks/useCharacter";
import { useParams } from "react-router-dom";
import { Result } from "typing";
import CharacterProfile from "../components/marvelCharacters/CharacterProfile";

export default function Character() {
  const { id } = useParams();
  const { marvelCharacterData } = useMarvelCharacter(id as string);

  return (
    <div className="flex flex-col  items-center justify-center h-screen w-full">
      <CharacterProfile
        character={
          marvelCharacterData?.data?.data?.results?.[0] as unknown as Result
        }
      />
    </div>
  );
}
