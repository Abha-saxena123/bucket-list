import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
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
  justify-self: center;
  .glow {
    color: #4a0404;
    text-align: center;
    text-shadow: 0 0 7px lightCoral, 0 0 10px lightCoral, 0 0 21px lightCoral,
      0 0 42px coral, 0 0 82px coral, 0 0 92px coral, 0 0 102px coral,
      0 0 151px coral;
  }
  height: 95vh;
  width: 450px;
  background-image: url(/cover.gif);
  box-shadow: inset 0px 0px 0px 0px rgb(240 128 128), 0px 0px 9px black,
    0px 0px 10px green;
  border-radius: 10px;
`;

export const AppContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
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
