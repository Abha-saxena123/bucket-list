import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 140px;
  background-color: floralwhite;
  display: flex;
  border: 2px solid darkcyan;
`;

// ${MediaBreakpoints.down("sm")} {
//   margin-left: 0;
//   justify-content: center;
//   padding-bottom: 60px;
// }

export const FooterContainerItem = styled.div`
  :not(:last-child) {
    margin-right: 40px;
  }
`;
