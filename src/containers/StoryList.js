import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Story from "../components/Story";

const Wrapper = styled.div`margin: 20px;`;

export default class StoryList extends Component {
  render() {
    const items = this.props.items;
    return (
      <Wrapper>
        {items.map((item, i) =>
          <Story key={item.id} item={item} rank={i + 1} />
        )}
      </Wrapper>
    );
  }
}

StoryList.propTypes = {
  items: PropTypes.array.isRequired
};
