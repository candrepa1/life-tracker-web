import { FC } from "react";
import styled from "@emotion/styled";

import { MOCK_CATEGORIES } from "../../data";
import Tab from "../Tab";

const Tabs: FC = () => {
  return (
    <TabsContainer>
      {MOCK_CATEGORIES.map(({ id, name }) => (
        <Tab key={id} title={name} />
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Tabs;
