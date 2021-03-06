import styled from "styled-components";
import { colors } from "../../constants/colors";

interface UsersIconProp {
  background?: string;
  translateX: number;
}

export const UsersIcon = styled.div<UsersIconProp>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${() => colors[Math.floor(Math.random() * colors.length)]};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  color: white;
  font-size: 12px;
  transition: all ease 0.2s;
  cursor: pointer;
`;
