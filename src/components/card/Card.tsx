import { IoMdSend } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { OwnerIcon } from "../ownerIcon/OwnerIcon";
import { UsersIcon } from "../usersIcon/usersIcon";
import * as C from "./styles";

interface card {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

interface Props {
  card: card;
  users: string[];
}

export const Card = ({ card, users = [] }: Props) => {
  return (
    <C.Container>
      <OwnerIcon>{card.owner}</OwnerIcon>
      <C.InfosCard>
        <span className="name">{card.name}</span>
        <span className="subject">
          <RiMessage2Fill /> {/*message icon*/}
          <span>{card.subject}</span>
        </span>
        <span className="task">
          <IoMdSend />
          <span>Tarefa 1</span>
        </span>
      </C.InfosCard>
      <C.Users>
        {users.map((user, index) => (
          <UsersIcon key={index} translateX={15 * users.length - index * 15}>
            {user}
          </UsersIcon>
        ))}
      </C.Users>
    </C.Container>
  );
};
