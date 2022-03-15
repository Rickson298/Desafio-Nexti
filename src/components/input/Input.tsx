import styled from "styled-components";

interface InputProps {
  width?: string;
  height?: string;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  transition: all ease 0.2s;
  outline: none;

  &:focus {
    border: 1px solid gray;
    background: ${({ theme }) =>
      theme.title === "dark" ? theme.colors.backgroundSecundary : "#ddd"};
  }

  &::placeholder {
    color: #ccc;
  }
`;
