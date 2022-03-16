import styled from "styled-components";

interface SideBarProps {
  isOpen: boolean;
}

export const Options = styled.div`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  .filter {
    font-size: 26px;
    cursor: pointer;
    margin-left: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

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

  .iconUser-container {
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

  .novo {
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

export const List = styled.main`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .wrapper-cards {
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
      gap: 15px;
    }
  }

  @media (max-width: 900px) {
    padding: 15px;
  }
`;
