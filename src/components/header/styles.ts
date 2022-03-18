import styled from "styled-components";
import { Modal } from "../modal/Modal";

export const Container = styled.div`
  height: 7vh;
  background: ${({ theme }) => theme.colors.backgroundHeader};
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  padding: 0 30px;
  color: white;
  border-bottom: ${({ theme }) => theme.colors.border};

  .config {
    cursor: pointer;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover + ${Modal} {
      transform: scale(1);
    }
  }

  .menu-icon {
    padding: 5px;
    border-radius: 15px;
    margin-right: auto;
    cursor: pointer;
    transition: all ease 0.2s;
    width: 30px;
    height: 30px;
    visibility: hidden;
    @media (max-width: 900px) {
      visibility: visible;
    }
    &:hover {
      background: #ccc;
      color: black;
    }
  }
`;
