import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("/src/assets/bg-image.svg");
  background-size: cover;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
const Image = styled.img`
  margin: 30px;
`;

const ContainerItens = styled.section`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  min-height: calc(100vh - 200px);
  gap: 28px;
`;

const Button = styled(Link)`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #fff;

  font-size: 17px;
  line-height: 28px;
  cursor: pointer;

  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px;

  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 14px;
  outline: none;

  p {
    font-size: 24px;
    font-weight: 400;
  }

  button {
    width: 24px;
    height: 28px;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export { Container, Image, ContainerItens, Button, User };
