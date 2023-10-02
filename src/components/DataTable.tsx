import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DataTablePagination } from "./DataTablePagination";
import { Input } from "./ui/input";

interface Pagination {
  pageIndex: number;
  pageSize: number;
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageCount: number;
  pagination: Pagination;
  setPagination: (value: Pagination) => void;
  isLoading?: boolean;
  search?: string;
  setSearch?: (value: string) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageCount,
  pagination,
  setPagination,
  isLoading,
  search,
  setSearch,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [tableData, setTableData] = useState<TData[]>([]);

  const { pageIndex, pageSize } = pagination;

  const [totalCount, setTotalCount] = useState(pageCount);
  const debouncedSearch = useDebounce(search, 500);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    // @ts-expect-error // unable to infer type
    onPaginationChange: setPagination,
    manualFiltering: true,
    onGlobalFilterChange: setSearch,
    pageCount: Math.ceil(totalCount / pageSize),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
      columnFilters,
      globalFilter: search,
    },
  });

  useEffect(() => {
    setTableData(data);
    setTotalCount(pageCount);
  }, [debouncedSearch, pageIndex, pageSize, pageCount, data]);

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search By Character name ..."
          value={search}
          onChange={(e) => {
            setSearch && setSearch(e.target.value);
          }}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody
            className={cn({
              "blur-sm": isLoading,
            })}
          >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="py-4">
          <DataTablePagination table={table} totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}
