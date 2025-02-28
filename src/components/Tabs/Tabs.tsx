import { FC } from "react";
import { NavLink } from "react-router";
import styled from "@emotion/styled";
import upperFirst from "lodash/upperFirst";
import { PiHouse, PiListBold, PiChartLine, PiQuotes } from "react-icons/pi";

const MENU_ITEMS = [
  { id: 1, name: "dashboard", renderIcon: () => <PiHouse />, route: "/" },
  { id: 2, name: "entries", renderIcon: () => <PiListBold /> },
  { id: 3, name: "trends", renderIcon: () => <PiChartLine /> },
  { id: 4, name: "insights", renderIcon: () => <PiQuotes /> },
];

const Tabs: FC = () => {
  return (
    <div>
      {MENU_ITEMS.map(({ id, name, renderIcon, route }) => (
        <StyledNavLink key={id} to={route || `/${name}`}>
          {({ isActive }) => (
            <TabContainer isActive={isActive}>
              {renderIcon && renderIcon()}
              <span>{upperFirst(name)}</span>
            </TabContainer>
          )}
        </StyledNavLink>
      ))}
    </div>
  );
};

const TabContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  ${({ isActive }) => isActive && "background-color: #242447"};

  & span {
    margin-left: 12px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin: 10px 25px;
`;

export default Tabs;
