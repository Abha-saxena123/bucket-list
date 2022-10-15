import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

// ${MediaBreakpoints.between('md', 'xl')} {
//   width: max-content;
// }

// ${MediaBreakpoints.up('xxl')} {
//   max-width: ${THEME_DEFAULTS.BREAKPOINTS.xxl}px;
//   margin: 0 auto;
// }

export const AppWrapper = styled.div`
  flex-grow: 1;
`;

export const AppContent = styled.main`
  display: flex;
  flex: 1;
  background-color: floralwhite;
`;
// ${MediaBreakpoints.down('md')} {
//   margin-right: ${spacing(5)};
//   margin-left: ${spacing(5)};
//   margin-top: ${spacing(10)};
// }

export const AppSideImage = styled.div`
  width: 200px;
  border-right: 2px solid darkcyan;
  border-left: 2px solid darkcyan;
  background-image: url(/list-side-image.jpg);
  background-size: contain;
`;

export const AuthContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1024px;
  margin: 50px auto 0 auto;
  padding-left: 44px;
  padding-right: 44px;
`;
