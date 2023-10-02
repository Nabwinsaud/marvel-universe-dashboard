import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/context/auth";
import { cn } from "@/lib/utils";
import { Divider } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "./Logout";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },

  {
    title: "Character",
    href: "/dashboard/character-list",
  },
];

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user } = useUser();

  return (
    <>
      <nav
        className={cn(
          "flex justify-between items-center space-x-2 mt-3",
          className
        )}
        {...props}
      >
        <Tabs
          defaultValue={
            pathname === "/dashboard" ? "/dashboard" : pathname || "/dashboard"
          }
          onValueChange={(v) => {
            navigate(v);
          }}
        >
          <TabsList className="flex w-full flex-wrap gap-6">
            {items.map((item) => (
              <TabsTrigger key={item.title} value={item.href}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* <Title>
          Welcome {"   "}{" "}
          <span className="font-bold">{user?.name?.toUpperCase()}</span>
        </Title> */}
        <Logout
          user={(user?.name as string) ?? "Anonymous"}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        />
      </nav>
      <Divider />
    </>
  );
}
