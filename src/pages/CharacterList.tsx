import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/marvelCharacters/columns";
import useMarvelCharacters from "@/hooks/useCharacters";
import { useMemo, useState } from "react";
import { Result } from "typing";
export default function CharacterList() {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 30,
  });
  const [search, setSearch] = useState("");

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const { marvelCharacterData, isLoading } = useMarvelCharacters<Result>({
    limit: pageSize,
    offset: pageIndex,
    query: search,
  });

  return (
    <div className="px-6 py-6">
      <DataTable
        columns={columns}
        data={marvelCharacterData?.data?.data?.results ?? []}
        pageCount={marvelCharacterData?.data?.data?.total ?? 0}
        pagination={pagination}
        setPagination={setPagination}
        isLoading={isLoading}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
