import styled from "styled-components";

import { StyledLink } from "./Link";

const Brand = styled(StyledLink)`
  float:left;
  font-size: 16px;
  font-weight: bold;

  padding: 11px 14px;

  margin-right: 20px;

  &:hover {
    color: #f2f2f2;
  }
`;

export default Brand;
