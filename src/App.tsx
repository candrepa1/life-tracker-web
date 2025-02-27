import { css, Global } from "@emotion/react";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routing />
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
    background-color: #121221;
    color: #ffffff;
    height: 100vh;
    font-family: "Manrope", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
`;

export default App;
