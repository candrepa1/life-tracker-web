import styled from "@emotion/styled";

import Tab from "../Tab";

type Categories = {
  id: number;
  name: string;
};

const MOCK_CATEGORIES: Categories[] = [
  { id: 1, name: "sleep" },
  { id: 2, name: "workout" },
  { id: 3, name: "food" },
];

const Tabs = () => {
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
