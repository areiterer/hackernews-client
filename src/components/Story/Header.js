import React from "react";
import {
  HeaderWrapper,
  RankContainer,
  Title,
  SourceContainer,
  SourceLink
} from "./Styles";

export default function Header(props) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(.*?)\//;
  let match = regex.exec(props.url);
  let sourceUrl = match[1] ? match[1] : "#";

  return (
    <HeaderWrapper>
      <RankContainer>
        {props.rank}.
      </RankContainer>
      <Title href={props.url}>
        {props.title}
      </Title>
      <SourceContainer>
        (<SourceLink href={"http://" + sourceUrl}>{sourceUrl}</SourceLink>)
      </SourceContainer>
    </HeaderWrapper>
  );
}
