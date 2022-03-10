import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const BoxLogin = styled.div`
  width: 450px;
  height: 450px;
  border: ${({ theme }) => theme.colors.border};
  transition: all ease 1s;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;

  .content-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding: 30px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.backgroundSecundary};
  }

  .sideBar {
    background: ${({ theme }) => theme.colors.backgroundSecundary};
    right: 0;
    height: 100%;
    width: 25px;
  }

  button {
    background: none;
    transition: all ease 0.2s;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: ${({ theme }) => theme.colors.border};
    color: #ccc;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.backgroundSecundary};
      color: white;
    }
  }

  label {
    margin-bottom: -10px;
  }

  .inputs {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    input {
      border: ${({ theme }) => theme.colors.border};
      outline: none;
      border-radius: 8px;
      transition: all ease 0.2s;
      padding: 10px;
      background: ${({ theme }) => (theme.title === "dark" ? "#333" : "#fff")};
      &:focus {
        background: ${({ theme }) =>
          theme.title === "dark" ? "#ccc" : "#f8f8f8"};
      }
    }
  }
`;
