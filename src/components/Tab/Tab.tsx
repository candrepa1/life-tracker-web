import { FC } from "react";
import styled from "@emotion/styled";

type TabProps = {
  title: string;
};

const Tab: FC<TabProps> = ({ title }) => {
  return <StyledTab>{title}</StyledTab>;
};

const StyledTab = styled.button`
  all: unset;
  cursor: pointer;
  width: fit-content;
  padding: 15px;
`;

export default Tab;
