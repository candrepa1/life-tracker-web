import styled from "@emotion/styled";
import { PiGear, PiQuestion } from "react-icons/pi";

const TopNavbar = () => {
  return (
    <>
      <MainContainer>
        <BrandingContainer>
          <img src="../../../assets/life-tracker.png" />
          <span>Life tracker</span>
        </BrandingContainer>
        <ButtonsContainer>
          <StyledButton>
            <PiGear size={20} />
          </StyledButton>
          <StyledButton>
            <PiQuestion size={20} />
          </StyledButton>
        </ButtonsContainer>
      </MainContainer>
      <Divider />
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
`;

const BrandingContainer = styled.div`
  display: flex;

  & img {
    height: 22px;
    width: 22px;
    margin-right: 16px;
  }

  & span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  all: unset;
  background-color: #242447;
  padding: 10px;
  margin-right: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  border: #ffffff 0.5px solid;
`;

export default TopNavbar;
