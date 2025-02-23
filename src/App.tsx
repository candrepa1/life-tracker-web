import { css, Global } from "@emotion/react";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Home />
    </>
  );
}

const GlobalStyles = css`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    height: 100vh;
  }
`;

export default App;
