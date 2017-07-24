import React, { Component } from "react";
import styled from "styled-components";

import Menu, { MenuItem } from "./Menu";
import MenuButton from "./MenuButton";
import Brand from "./Brand";

const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  box-shadow: 5px 1px 5px #888888;
`;

class NavBar extends Component {
  state = {
    isMenuHidden: true
  };

  onToggleMenu = () => {
    this.setState((prevState, props) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    return (
      <Wrapper>
        <Brand href="/">HNews</Brand>
        <Menu isHidden={this.state.isMenuHidden}>
          {/* <MenuItem href="#">News</MenuItem> */}
        </Menu>
        <MenuButton onClick={this.onToggleMenu} />
      </Wrapper>
    );
  }
}

export default NavBar;
