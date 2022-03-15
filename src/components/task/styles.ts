import styled from "styled-components";

interface PropsStyle {
  isOpen: boolean;
}

interface SubMenusProps {
  isOpen: boolean;
  height: string;
}

export const Task = styled.div<PropsStyle>`
  display: flex;
  align-items: center;
  color: gray;
  gap: 10%;
  padding: 15px;
  cursor: pointer;
  transition: all ease 0.2s;
  border: 1px solid ${({ isOpen, theme }) => (isOpen ? "#ccc" : "transparent")};
  color: gray;

  &:hover {
    border: 1px solid #ccc;
  }

  .lenght-submenu {
    margin-left: auto;
  }

  .arrow-icon {
    transition: all ease 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

export const SubMenus = styled.div<SubMenusProps>`
  transition: all ease 0.6s;
  height: ${({ isOpen, height }) => (isOpen ? height : "0px")};
  overflow: hidden;
`;

export const SubMenu = styled.div`
  margin-left: 25%;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ease 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.textSecundary};
  }
`;
