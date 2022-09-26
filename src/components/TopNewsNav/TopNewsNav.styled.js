import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TopNavLink = styled(NavLink)`
  padding: 10px;
  border: 1px solid blue;

  &.active {
    background-color: red;
  }
`;
