import styled from "styled-components";

export const Container = styled.div`
  height: 7vh;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  padding: 0 30px;
  color: white;

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

export const OptionsModal = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: ${({ theme }) => theme.colors.border};
  padding: 25px;
  transition: all ease 0.2s;
  border-radius: 8px;
  z-index: 9999;
  top: 35px;
  width: 150px;
  right: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  div {
    cursor: pointer;
    transition: all ease 0.2s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid gray;
    }
  }
`;

export const OptionWithModal = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  color: white;

  button {
    background: none;
    border-bottom: none;
    cursor: pointer;
    outline: none;
    transition: all ease 0.2s;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
      border-bottom: 1px solid gray;
    }
  }

  span {
    cursor: default;
  }

  &:hover ${OptionsModal} {
    display: flex;
  }
`;
