import React, { useState } from "react";
import styled from "styled-components";
import StartButtonComponent from "../components/StartButtonComponent";
import QuizPage from "./QuizPage";

import Reaper from "../assets/common/reaper.png";
import hi from "../assets/common/hi2.png";

const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  width: 100%;
  background-color: black;
  background-image: "../assets/common/hangul-day.jpg";
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 12rem;
  margin-bottom: 3rem;
  background-color: yellow;
  background-position: center;
  border-radius: 0.5rem;
  border: 3px solid red;
  text-align: center;
`;
const Intro = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #ff0000;
  margin-bottom: 4rem;
`;

const Title = styled.div`
  font-family: "Jalnan";
  font-size: 2.5rem;
  text-align: center;
  color: #ff0000;
  margin-top: 1.9rem;
  margin-bottom: 5.4rem;
`;
const Footer = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin-top: 5.9rem;
  margin-bottom: 2rem;
  color: #ff0000;
`;

const Logo = styled.img`
  width: 1.2rem;
`;

const TitleLogo = styled.img`
  width: 30rem;
`;
function LandingPage() {
  const [isShow, setIsShow] = useState(true);
  const [isQuizShow, setIsQuizShow] = useState(false);

  const onClickStartBtn = () => {
    setIsShow(false);
    setIsQuizShow(true);
  };
  return (
    <>
      <Wrapper isShow={isShow}>
        <Container>
          <Intro>
            <p />
            나는 수명은 얼마나 남았을까?
            <br /> 남은 수명 찾기 테스트
            <p /> <TitleLogo src={hi} />
            <p />
          </Intro>
          <Title>
            생<p>사</p>
            <p></p>부
          </Title>
          <StartButtonComponent
            type={true}
            text={"시작하기"}
            onclick={onClickStartBtn}
          />

          <Footer>
            염.대.전 &nbsp;
            <Logo src={Reaper} />
          </Footer>
        </Container>
      </Wrapper>
      <QuizPage isShow={isQuizShow} />
    </>
  );
}

export default LandingPage;
