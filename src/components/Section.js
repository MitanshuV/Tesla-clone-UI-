import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, imgUrl, description, leftButton, rightButton }) {
  return (
    <Wrap imgUrl={imgUrl}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;

  h1 {
    font-size: 40px;
    font-weight: 500;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
