import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Story from "../components/Story";

const Wrapper = styled.div`margin: 20px;`;

export default class StoryList extends Component {
  render() {
    const items = this.props.items;

    if (items.length > 0) {
      return this.renderList(items);
    } else return <div>Loading...</div>;
  }

  renderList(items) {
    return (
      <Wrapper>
        {items.map((item, i) => <Story key={item.id} item={item} />)}
      </Wrapper>
    );
  }
}

StoryList.propTypes = {
  items: PropTypes.array.isRequired
};
