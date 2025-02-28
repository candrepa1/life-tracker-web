import styled from "@emotion/styled";

const Profile = () => {
  return (
    <div>
      <DataContainer>
        <Pic src="https://www.sportschosun.com/images/2025/01/14/hyeri-she-was-hospital-directors-daughterthe-life-43946/hyeri-she-was-hospital-directors-daughterthe-life-4394601.jpg" />
        <Data>
          <h1>Hyeri</h1>
          <p>Paid plan</p>
        </Data>
      </DataContainer>
      <ProfileActions>
        <StyledButton>Log out</StyledButton>
        <StyledButton isActive>Upgrade</StyledButton>
      </ProfileActions>
    </div>
  );
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
