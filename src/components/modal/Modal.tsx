import styled from "styled-components";

export const Modal = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: start;
  transition: all ease 0.2s;
  border-radius: 8px;
  padding: 15px;
  border: ${({ theme }) => theme.colors.border};
  flex-direction: column;
  z-index: 9999;
  transform: scale(0);
  transform-origin: 100% 10%;
  overflow: hidden;
  gap: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  position: absolute;
  top: 45px;

  &:hover {
    transform: scale(1);
  }
`;
