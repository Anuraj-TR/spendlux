import styled from "styled-components";
import { devices } from "../base/StyledComponentbase";

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #27292c;
  text-decoration: none;

  @media ${devices.tablet} {
    font-size: 22px;
  }

  @media ${devices.tabletPro}{
    font-size: 26px;
  }
`;