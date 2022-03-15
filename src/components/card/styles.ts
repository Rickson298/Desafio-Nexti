import styled from "styled-components";
import { UsersIcon } from "../usersIcon/usersIcon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  border-bottom: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) =>
    theme.title === "dark" ? theme.colors.backgroundSecundary : "white"};
  gap: 15px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .name,
  .subject {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .subject,
  .task {
    display: flex;
    align-items: center;
    gap: 15px;
    text-overflow: ellipsis;
  }
`;

export const Users = styled.div`
  margin-left: auto;
  display: flex;
  align-items: end;
  justify-content: end;
  height: 100%;
  gap: 5px;
  &:hover ${UsersIcon} {
    transform: translateX(0px);
  }
`;
