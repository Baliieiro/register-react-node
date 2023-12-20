import { Outlet } from "react-router-dom";
import { Container } from "./styles/styles";

function App() {
  return (
    <>
      <Container className="container">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
