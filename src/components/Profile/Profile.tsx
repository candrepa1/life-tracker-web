import { useEffect, useState } from "react";
import { Location, useLocation, useNavigate } from "react-router";
import styled from "@emotion/styled";

import fetchUserData from "../../utils/fetchUserData";
import logout from "../../utils/logout";

type UserInfo = {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  email_verified?: boolean;
  locale?: string;
  hd?: string;
};

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const token = getTokenFromUrl(location);
      if (token) {
        const loggedUser = await fetchUserData(token);

        setUser(loggedUser);
        setToken(token);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <DataContainer>
        <Pic src={user?.picture} />
        <Data>
          <h1>{user?.given_name}</h1>
          <p>Paid plan</p>
        </Data>
      </DataContainer>
      <ProfileActions>
        <StyledButton
          onClick={() => {
            logout(token as string);
            navigate("/");
          }}
        >
          Log out
        </StyledButton>
        <StyledButton isActive>Upgrade</StyledButton>
      </ProfileActions>
    </div>
  );
};

const getTokenFromUrl = (location: Location) => {
  const literalParams = location.hash.substring(1);
  const params = new URLSearchParams(literalParams);
  const accessToken = params.get("access_token");

  return accessToken;
};

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Pic = styled.img`
  height: 65px;
  width: 65px;
  object-fit: cover;
  border-radius: 30%;
`;

const Data = styled.div`
  height: 100%;
  margin-left: 20px;

  & * {
    margin: 0;
  }

  & > p {
    color: #9494c7;
  }
`;

const ProfileActions = styled.div`
  display: flex;
  width: 100%;
`;

const StyledButton = styled.button<{ isActive?: boolean }>`
  all: unset;
  flex: 1;
  background-color: ${({ isActive }) => (isActive ? "#1A1AE5" : "#242447")};
  margin-left: ${({ isActive }) => isActive && "12px"};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
`;

export default Profile;
