import React from "react";
import styled, { css } from "styled-components";
import { desktop } from "../../utils/media";

import { StyledLink } from "./Link";

const MenuButton = styled(StyledLink).attrs({
  height: null,
  width: null
})`
  height: 16px;
  float: right;
  display: block;
  line-height: 14px;

  &:hover {
    background: none;
    color: #f2f2f2;
  }

  ${desktop(css`
    display: none;
  `)};
`;

export default props => <MenuButton {...props}>&#9776;</MenuButton>;
