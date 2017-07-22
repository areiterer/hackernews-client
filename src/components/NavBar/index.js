import React, { Component } from "react";
import styled from "styled-components";

import Menu, { MenuItem } from "./Menu";
import MenuButton from "./MenuButton";
import Brand from "./Brand";

const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
`;

class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <Brand>HNews</Brand>
        <Menu>
          <MenuItem href="#">News</MenuItem>
          <MenuItem href="#">Top</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </Menu>
        <MenuButton href="#" />
      </Wrapper>
    );
  }
}

export default NavBar;
