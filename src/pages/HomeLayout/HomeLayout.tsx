import { FC } from "react";
import { Outlet } from "react-router";
import styled from "@emotion/styled";

import IconsProvider from "../../providers/IconsProvider";
import Tabs from "../../components/Tabs";

const Home: FC = () => {
  return (
    <IconsProvider>
      <HomeContainer>
        <Tabs />
        <Outlet />
      </HomeContainer>
    </IconsProvider>
  );
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  height: 100%;
`;

export default Home;
