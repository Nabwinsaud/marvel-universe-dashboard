import getAxiosRequest from "@/lib/getAxiosRequest";
import { useQuery } from "@tanstack/react-query";
export default function useMarvelCharacter<T>(characterId: string) {
  const { data: marvelCharacterData } = useQuery({
    queryKey: ["characters", characterId],
    queryFn: () => getAxiosRequest<T>(`characters/${characterId}?orderBy=name`),
    enabled: !!characterId,
    // staleTime: Infinity,
  });

  return { marvelCharacterData };
}
