import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Styles";
import Header from "./Header";
import Footer from "./Footer";

export default function Story(props) {
  const item = props.item;

  return (
    <Wrapper>
      <Header url={item.url} title={item.title} rank={props.rank} />
      <Footer
        username={item.by}
        score={item.score}
        timestamp={item.time}
        itemId={item.id}
      />
    </Wrapper>
  );
}

Story.propTypes = {
  item: PropTypes.object.isRequired
};
