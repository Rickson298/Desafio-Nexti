import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  background: #f04c0c;
  transition: all ease 0.2s;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 750px) {
    transform: scale(0.8);
  }
`;
