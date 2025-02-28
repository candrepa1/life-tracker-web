import { FC } from "react";
import { Outlet } from "react-router";
import styled from "@emotion/styled";

import IconsProvider from "../../providers/IconsProvider";
import Tabs from "../../components/Tabs";
import Profile from "../../components/Profile";

const Home: FC = () => {
  return (
    <IconsProvider>
      <HomeContainer>
        <FirstColumnContainer>
          <Tabs />
          <Profile />
        </FirstColumnContainer>
        <Outlet />
      </HomeContainer>
    </IconsProvider>
  );
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  height: 100%;
`;

const FirstColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
  padding: 15px 0 25px 0;
`;

export default Home;
