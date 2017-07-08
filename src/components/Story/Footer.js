import React from "react";
import PropTypes from "prop-types";

import { FooterWrapper, FooterLinkItem } from "./Styles";
import * as utils from "../../utils";

export default function Footer(props) {
  const userUrl = utils.getUserUrl(props.username);
  const itemUrl = utils.getItemUrl(props.itemId);

  return (
    <FooterWrapper>
      {props.score} point by
      <FooterLinkItem href={userUrl}>{props.username}</FooterLinkItem>
      <FooterLinkItem href="#">8 minutes ago</FooterLinkItem>
      |
      <FooterLinkItem href={itemUrl}>view on HackerNews</FooterLinkItem>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  username: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
};
