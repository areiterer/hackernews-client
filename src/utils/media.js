import { css } from "styled-components";

export const phone = inner => css`
  @media only screen and (min-width : ${480 / 16}em) {
    ${inner}
  }
`;

export const tablet = inner => css`
  @media only screen and (min-width : ${768 / 16}em) {
    ${inner}
  }
`;

export const desktop = inner => css`
  @media only screen and (min-width : ${992 / 16}em) {
    ${inner}
  }
`;

export const maxPhone = inner => css`
  @media only screen and (max-width : ${768 / 16}em) {
    ${inner}
  }
`;

export const maxTablet = inner => css`
  @media only screen and (max-width : ${992 / 16}em) {
    ${inner}
  }
`;
