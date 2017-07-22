import React from "react";
import styled, { css } from "styled-components";
import { desktop } from "../../utils/media";

import { StyledLink } from "./Link";

const MenuWrapper = styled.div`
  overflow: hidden;
  float: left;
  display: none;

  ${desktop(css`
    display: inline;
  `)};
`;
const MenuItem = styled(StyledLink)`float: left;`;

function Menu(props) {
  return (
    <MenuWrapper>
      {props.children}
    </MenuWrapper>
  );
}

export default Menu;
export { MenuItem };
