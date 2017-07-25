import React from "react";
import PropTypes from "prop-types";

import { FooterWrapper, FooterLink } from "./Styles";
import * as utils from "../../utils/helper";

export default function Footer(props) {
  const userUrl = utils.getUserUrl(props.username);
  const itemUrl = utils.getItemUrl(props.itemId);

  return (
    <FooterWrapper>
      {props.score} point by
      <FooterLink href={userUrl}>{props.username}</FooterLink>
      |
      <FooterLink>{new Date(props.timestamp * 1000).toDateString()}</FooterLink>
      |
      <FooterLink href={itemUrl}>view on HackerNews</FooterLink>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  username: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
};
