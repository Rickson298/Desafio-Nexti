import styled from "styled-components";
import { colors } from "../../constants/colors";

export const OwnerIcon = styled.div`
  background: ${() => colors[Math.floor(Math.random() * colors.length)]};
  color: white;
  min-width: 40px;
  min-height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
