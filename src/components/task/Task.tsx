import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import * as C from "./styles";

interface SubMenu {
  id: number;
  name: string;
}

interface Props {
  taskName: string;
  dataSubMenus: SubMenu[];
  setCurrentSubMenu: (newState: number) => void;
  onClickSubmenu: () => void;
}

export const Task = ({
  taskName,
  dataSubMenus = [],
  setCurrentSubMenu,
  onClickSubmenu,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <C.Task isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <IoIosArrowForward className="arrow-icon" />
        <span>{taskName}</span>
        <span className="lenght-submenu">{dataSubMenus.length}</span>
      </C.Task>
      <C.SubMenus isOpen={isOpen} height={`${dataSubMenus.length * 50}px`}>
        {dataSubMenus.map(({ id, name }: SubMenu) => (
          <C.SubMenu
            onClick={() => {
              setCurrentSubMenu(id);
              onClickSubmenu();
            }}
            key={id}
          >
            {name}
          </C.SubMenu>
        ))}
      </C.SubMenus>
    </>
  );
};
