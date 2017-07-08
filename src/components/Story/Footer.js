import React from "react";
import { FooterWrapper, FooterLinkItem, FooterTextItem } from "./Styles";

export default function Footer(props) {
  return (
    <FooterWrapper>
      <FooterTextItem>
        {props.score} point by
        <FooterLinkItem href="#">{props.username}</FooterLinkItem>
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
