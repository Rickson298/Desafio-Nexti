import styled from "styled-components";

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
