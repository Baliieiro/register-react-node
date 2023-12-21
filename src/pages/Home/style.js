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
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 218px);
`;
const H1 = styled.h1`
  margin-bottom: 80px;
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
`;

const InputLabel = styled.label`
  margin-left: 25px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
const Input = styled.input`
  padding: 15px 25px;
  font-size: 24px;
  line-height: 28px;
  width: 352px;
  height: 58px;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  border: none;
  outline: none;
  margin-bottom: 36px;
`;
const Button = styled.button`
  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;

  font-size: 17px;
  line-height: 28px;
  cursor: pointer;

  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    transform: rotate(180deg);
  }

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

export {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
};
