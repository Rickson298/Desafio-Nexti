import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
  quantityOptions?: number | string;
}

export const Container = styled.div<ContainerProps>`
  border: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.border : "1px solid transparent"};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  transition: all ease 0.2s;
  height: ${({ isOpen, quantityOptions }) =>
    isOpen
      ? quantityOptions
        ? `${Number(quantityOptions) * 50 + 50}px`
        : "max-content"
      : "50px"};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: ${({ theme }) => theme.colors.border};
  }
  .children {
    display: flex;
    flex-direction: column;
  }

  .container-title-options {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .icon {
      background: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid transparent;
      color: gray;
      transition: all ease 0.2s;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(180deg)" : "rotate(0deg)"};
      cursor: pointer;
      &:hover {
        border: 1px solid #ccc;
      }
    }
  }
`;
