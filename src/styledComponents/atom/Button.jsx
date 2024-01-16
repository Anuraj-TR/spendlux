import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #4d63e3;
  border-color: ${(props) => (props.$white ? "#ffffff" : "#4d63e3")};
  color: ${(props) => (props.$white ? "#4d63e3" : "#ffffff")};
  background: ${(props) => (props.$white ? "#ffffff" : "#4d63e3")};
  border-radius: 6px;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
    &:hover {
      border-color: ${(props) => (props.$white ? "#ffffff" : "#4d63e3")};
      color: ${(props) => (props.$white ? "#4d63e3" : "#ffffff")};
      background: ${(props) => (props.$white ? "#ffffff" : "#4d63e3")};
    }
  }
  &:hover {
    color: ${(props) => (props.$white ? "#ffffff" : "#4d63e3")};
    background: ${(props) => (props.$white ? "#4d63e3" : "#ffffff")};
  }
`;