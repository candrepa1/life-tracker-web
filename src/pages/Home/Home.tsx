import { FC } from "react";
import styled from "@emotion/styled";

import Tabs from "../../components/Tabs";

const Home: FC = () => {
  return (
    <HomeContainer>
      <Tabs />
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
