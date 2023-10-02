import { Outlet } from "react-router-dom";

import { SidebarNav } from "@/components/SidebarNav";
import { Flex, Text, Title } from "@tremor/react";
export default function Layout() {
  return (
    <div>
      <div className="px-4 space-y-4 w-full my-2 ">
        <div className="sticky bg-white z-10  top-0 right-0 left-0 ">
          <Flex className="xl:flex-row flex-col items-start xl:items-center space-y-4 ">
            <div className="space-y-2">
              <div className="flex flex-row space-x-3">
                <Title>Marvel Characters Dashboard</Title>
              </div>
              <Text>Welcome to the marvel character dashboard</Text>
            </div>
          </Flex>

          <SidebarNav />
        </div>
        <div className="flex flex-col space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
