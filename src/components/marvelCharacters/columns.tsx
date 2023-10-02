import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { CharacterType } from "typing";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export type CharacterColumn = CharacterType["results"][0];

export const columns: ColumnDef<CharacterColumn>[] = [
  {
    accessorKey: "SN",
    cell: ({ row }) => {
      const index = row.index;
      return <span>{index + 1}</span>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const character = row.original;
      const description =
        character?.description?.length > 50
          ? character?.description?.slice(0, 50) + " ..."
          : character?.description;
      return (
        <span>{description?.length ? description : "N / A" ?? "N/A"}</span>
      );
    },
  },

  {
    accessorKey: "thumbnails",
    header: "Thumbnails",
    cell: ({ row }) => {
      const character = row.original;
      const thumbnail = character?.thumbnail?.path
        ? `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
        : "https://via.placeholder.com/150";
      return (
        <>
          {
            <img
              src={thumbnail}
              width={"80"}
              height={"80"}
              className="rounded-full object-cover"
            />
          }
        </>
      );
    },
  },

  {
    accessorKey: "series",
    header: "Series",
    cell: ({ row }) => {
      const character = row.original;
      const series = character?.series?.items?.length
        ? character?.series?.items?.map((item) => item.name).join(", ")
        : "N/A";
      return (
        <>
          {
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Show Series </AccordionTrigger>
                <AccordionContent>{series}</AccordionContent>
              </AccordionItem>
            </Accordion>
          }
        </>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original?.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/dashboard/character-profile/${id}`}>View More</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
