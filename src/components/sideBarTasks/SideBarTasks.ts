import styled from "styled-components";

interface SideBarProps {
  isOpen: boolean;
}

export const SideBarTasks = styled.aside<SideBarProps>`
  width: 25vw;
  border-right: ${({ theme }) => theme.colors.border};
  min-height: 93vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
  transition: all ease 0.3s;
  opacity: 1;

  @media (max-width: 900px) {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    position: absolute;
    width: 80%;
    z-index: 99;
    margin-left: ${({ isOpen }) => (isOpen ? "0" : "-80%")};
  }

  .icon-user {
    display: flex;
    width: 45px;
    height: 45px;
    color: white;
    border-radius: 50%;
    justify-content: center;
    font-size: 16px;
    align-items: center;
    background: blue;
  }

  .new {
    font-size: 14px;
    color: #f04c0c;
    font-weight: bold;
  }

  .container-side {
    display: flex;
    width: 100%;
    height: max-content;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 15px 15px;
    border-bottom: ${({ theme }) => theme.colors.border};
    margin-bottom: 15px;
  }
`;
