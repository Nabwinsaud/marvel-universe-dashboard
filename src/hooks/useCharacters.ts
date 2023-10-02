import getAxiosRequest from "@/lib/getAxiosRequest";
import { useQuery } from "@tanstack/react-query";
import { LimitOffset } from "typing";

/*
 this is defined to use the same hooks in both analytics and characters
 because react query cache the result of the query so i want pagination of 30 and 40 in different components to be cached separately
 and i have set the fetch on component mount to false so that it does not fetch the data on component mount
*/

export default function useMarvelCharacters<T>(props: LimitOffset) {
  const { limit, offset, query, queryKey = "characters" } = props;

  const { data: marvelCharacterData, isLoading } = useQuery({
    queryKey: ["characters", queryKey, limit, offset, query],
    queryFn: () => getAxiosRequest<T>("characters?orderBy=name", limit, offset),
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return { marvelCharacterData, isLoading };
}
