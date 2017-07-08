import React from "react";

import { Wrapper } from "./Styles";
import Header from "./Header";
import Footer from "./Footer";

export default function Story(props) {
  const item = props.item;
  return (
    <Wrapper>
      <Header url={item.url} title={item.title} rank={props.rank} />
      <Footer username={item.by} score={item.score} timestamp={item.time} />
    </Wrapper>
  );
}
