import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdFilterAlt } from "react-icons/md";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Checkbox } from "../../components/checkbox/Checkbox";
import Header from "../../components/header/Header";
import { Input } from "../../components/input/Input";
import { List } from "../../components/list/List";
import { SideBarTasks } from "../../components/sideBarTasks/SideBarTasks";
import { Task } from "../../components/task/Task";
import { itens } from "../../constants/itens";
import { menus } from "../../constants/menus";
import * as C from "./styles";

export const MessagesList = () => {
  // const [fetch, tasks, loading] = useGetApi();

  // useEffect(() => {
  //   fetch("menu.json");
  // }, []);

  const [currentSubMenuId, setCurrentSubMenuId] = useState(0);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const currentMessages = useMemo(() => {
    return itens.find((item) => item.id === currentSubMenuId);
  }, [currentSubMenuId]);

  let messagesFiltered = currentMessages?.subMenuItems.filter((item) =>
    item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
  );

  return (
    <>
      <Header onClickMenuIcon={() => setIsOpenSideBar(!isOpenSideBar)} />
      <C.Container>
        <SideBarTasks isOpen={isOpenSideBar}>
          <div className="container-side">
            <div className="icon-user">RO</div>
            <span className="new">{t("new")}</span>
          </div>
          <div>
            {menus.map((menu) => (
              <Task
                onClickSubmenu={() => setIsOpenSideBar(!isOpenSideBar)}
                setCurrentSubMenu={setCurrentSubMenuId}
                dataSubMenus={menu.subMenus}
                key={menu.id}
                taskName={menu.name}
              />
            ))}
          </div>
        </SideBarTasks>
        <List>
          <div style={{ padding: "15px 15px 10px 15px" }}>
            <Input
              data-cy="input-search-messages"
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              type="search"
            />
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
            {messagesFiltered?.map((item, index) => (
              <Card users={item.users} card={item} key={item.id} />
            ))}
          </div>
        </List>
      </C.Container>
    </>
  );
};
