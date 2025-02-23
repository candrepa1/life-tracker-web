import { FC } from "react";
import styled from "@emotion/styled";

type TabProps = {
  title: string;
};

const Tab: FC<TabProps> = ({ title }) => {
  return <TabContainer>{title}</TabContainer>;
};

const TabContainer = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  width: fit-content;
  padding: 15px;
`;

export default Tab;
