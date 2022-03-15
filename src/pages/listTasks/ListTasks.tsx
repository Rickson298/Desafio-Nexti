import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdFilterAlt } from "react-icons/md";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Checkbox } from "../../components/checkbox/Checkbox";
import Header from "../../components/header/Header";
import { Input } from "../../components/input/Input";
import { Task } from "../../components/task/Task";
import { itens } from "../../constants/itens";
import { menus } from "../../constants/menus";
import * as C from "./styles";

export const ListTasks = () => {
  // const [fetch, tasks, loading] = useGetApi();

  // useEffect(() => {
  //   fetch("menu.json");
  // }, []);

  const [currentSubMenu, setCurrentSubMenu] = useState(0);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const { t } = useTranslation();

  const currentCard = itens.find((item) => item.id === currentSubMenu);

  return (
    <>
      <Header onClickMenuIcon={() => setIsOpenSideBar(!isOpenSideBar)} />
      <C.Container>
        <C.SideBarTasks isOpen={isOpenSideBar}>
          <div className="container-side">
            <div className="iconUser-container">RO</div>
            <span className="novo">{t("new")}</span>
          </div>
          <div>
              {menus.map((menu) => (
                <Task
                  onClickSubmenu={() => setIsOpenSideBar(!isOpenSideBar)}
                  setCurrentSubMenu={setCurrentSubMenu}
                  dataSubMenus={menu.subMenus}
                  key={menu.id}
                  taskName={menu.name}
                />
              ))}
          </div>
        </C.SideBarTasks>
        <C.List>
          <div style={{ padding: "15px 15px 10px 15px" }}>
            <Input placeholder={t("search")} type="search" />
          </div>
          <C.Options>
            <Checkbox />
            <C.Buttons>
              <Button>{t("assign")}</Button>
              <Button>{t("archive")}</Button>
              <Button>{t("schedule")}</Button>
            </C.Buttons>
            <MdFilterAlt className="filter" /> {/*filter icon*/}
          </C.Options>
          <div className="wrapper-cards">
            {currentCard?.subMenuItems.map((item, index) => (
              <Card users={item.users} card={item} key={item.id} />
            ))}
          </div>
        </C.List>
      </C.Container>
    </>
  );
};
