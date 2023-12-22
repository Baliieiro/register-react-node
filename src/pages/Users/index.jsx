import { useEffect, useState } from "react";
import { Button, Container, ContainerItens, Image, User } from "./style";
import Title from "../../components/Title";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3000/users");
      setUsers(newUser);
    }
    fetchUsers();
  }, []);

  function deleteUsers(userId) {
    const userDeleted = users.filter((user) => user.id !== userId);
    setUsers(userDeleted);
  }
  return (
    <Container>
      <Image src="/src/assets/users.svg" alt="imagem-logo" />
      <ContainerItens>
        <Title>Usuários</Title>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} Anos</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src="/src/assets/trash.svg" alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img src="/src/assets/arrow.png" alt="" />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}
