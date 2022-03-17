import styled from "styled-components";

interface OptionProps {
  optionSelected?: boolean;
}

export const Option = styled.button<OptionProps>`
  padding: 15px;
  height: 50px;
  transition: all ease 0.2s;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  background: none;
  text-align: start;
  cursor: pointer;
  border-radius: 8px;
  font-weight: ${({ optionSelected }) => optionSelected && "bold"};
  &:hover {
    color: ${({ theme }) => theme.colors.textSecundary};
    background: ${({ theme }) => theme.colors.backgroundSecundary};
  }
`;
