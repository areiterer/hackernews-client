import React from "react";
import { FooterWrapper, FooterLinkItem, FooterTextItem } from "./Styles";

import * as utils from "../../utils";

export default function Footer(props) {
  const userUrl = utils.getUserUrl(props.username);

  return (
    <FooterWrapper>
      <FooterTextItem>
        {props.score} point by
        <FooterLinkItem href={userUrl}>{props.username}</FooterLinkItem>
        <FooterLinkItem href="#">8 minutes ago</FooterLinkItem>
        |
        <FooterLinkItem href="#">hide</FooterLinkItem>
        |
        <FooterLinkItem href="#">past</FooterLinkItem>
        |
        <FooterLinkItem href="#">web</FooterLinkItem>
        |
        <FooterLinkItem href="#">discuss</FooterLinkItem>
      </FooterTextItem>
    </FooterWrapper>
  );
}
