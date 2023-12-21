import People from "../../assets/image-home.svg";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.svg";
import {
  Button,
  Container,
  ContainerItens,
  H1,
  Image,
  Input,
  InputLabel,
  User,
} from "./style";
import { useRef, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addUsers() {
    const newUser = {
      name: inputName.current.value,
      age: inputAge.current.value,
      id: Math.random(),
    };

    console.log(inputName);

    setUsers([...users, newUser]);
  }

  function deleteUsers(userId) {
    const userDeleted = users.filter((user) => user.id !== userId);
    setUsers(userDeleted);
  }

  return (
    <Container>
      <Image src={People} alt="imagem-logo" />
      <ContainerItens>
        <H1>Olá</H1>
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
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age} Anos</p>{" "}
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}
