import styled from "styled-components";

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
