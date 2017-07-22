import React from "react";
import styled, { css } from "styled-components";
import { desktop, maxTablet } from "../../utils/media";

import { StyledLink } from "./Link";

const MenuWrapper = styled.div`
  overflow: hidden;
  display: none;

  ${desktop(css`
    display:block;
  `)};

  ${props =>
    maxTablet(
      props.isHidden ||
        css`
        display:block;
        width: 100%;
        margin-top: 40px;
      `
    )};
`;
const MenuItem = styled(StyledLink)`
  float: left;

  ${props =>
    maxTablet(
      props.isHidden ||
        css`
      float: none;
      display:block;
      text-align: left;

      font-size:12px;
      letter-spacing: 1px;
      color: #333;
      background-color: #f6f6ef;
      border-bottom: 1px solid rgba(255,255,255,0.75);

      &:active {
        background-color: #e6e6e6;
        font-weight: bold;
      }
    `
    )};
`;

function Menu(props) {
  const children = props.children;

  return (
    <MenuWrapper isHidden={props.isHidden}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isHidden: props.isHidden })
      )}
    </MenuWrapper>
  );
}

export default Menu;
export { MenuItem };
