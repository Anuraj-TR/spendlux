import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #4d63e3;
  background-color: ${props => props.$secondary ? '#fff' :  '#4d63e3'};
  border-radius: 6px;
  &:hover{
    color: #4d63e3;
    background-color: #fff;
  }
`