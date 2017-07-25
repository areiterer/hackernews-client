import React from "react";
import PropTypes from "prop-types";
import * as utils from "../../utils/helper";

import {
  HeaderWrapper,
  RankContainer,
  Title,
  SourceContainer,
  SourceLink
} from "./Styles";

export default function Header(props) {
  let url = props.url;
  let sourceUrl;

  if (!url) {
    url = utils.getItemUrl(props.itemId);
  }

  sourceUrl = utils.getSourceUrl(url);

  return (
    <HeaderWrapper>
      <RankContainer>
        {props.rank}.
      </RankContainer>
      <Title href={url}>
        {props.title}
      </Title>
      <SourceContainer>
        (<SourceLink href={"http://" + sourceUrl}>{sourceUrl}</SourceLink>)
      </SourceContainer>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  itemId: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};
