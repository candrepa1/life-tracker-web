import { FC } from "react";
import styled from "@emotion/styled";

import Tabs from "../../components/Tabs";
import Sleep from "../../components/Sleep";

const Home: FC = () => {
  return (
    <HomeContainer>
      <Tabs />
      <Sleep />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export default Home;
