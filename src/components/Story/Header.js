import React from "react";
import {
  HeaderWrapper,
  RankContainer,
  Title,
  SourceContainer,
  SourceLink
} from "./Styles";

function Header(props) {
  return (
    <HeaderWrapper>
      <RankContainer>
        {props.rank}.
      </RankContainer>
      <Title href="www.google.at">
        {props.title}
      </Title>
      <SourceContainer>
        (<SourceLink href="#">getdropbox.com</SourceLink>)
      </SourceContainer>
    </HeaderWrapper>
  );
}

export default Header;
