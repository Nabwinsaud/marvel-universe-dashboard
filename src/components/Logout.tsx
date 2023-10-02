import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface LogoutProps {
  onClick?: () => void;
  user: string;
}
export default function Logout(props: LogoutProps) {
  const { onClick, user } = props;
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup className="py-2 px-2" value={user}>
            {user}
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarSeparator />
          <MenubarItem onClick={onClick} inset>
            Logout...
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
