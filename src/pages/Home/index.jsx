import People from "../../assets/image-home.svg";
import Arrow from "../../assets/arrow.png";
import Title from "../../components/Title";
import {
  Button,
  Container,
  ContainerItens,
  Image,
  Input,
  InputLabel,
} from "./style";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addUsers() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    navigate("/usuarios");
  }

  return (
    <Container>
      <Image src={People} alt="imagem-logo" />
      <ContainerItens>
        <Title>Olá</Title>
        <InputLabel htmlFor="name">Nome</InputLabel>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome:"
          ref={inputName}
        />
        <InputLabel htmlFor="age">Idade</InputLabel>
        <Input
          type="text"
          name="age"
          id="age"
          placeholder="Digite sua idade:"
          ref={inputAge}
        />

        <Button onClick={addUsers}>
          Cadastrar <img src={Arrow} alt="seta" />
        </Button>
      </ContainerItens>
    </Container>
  );
}
