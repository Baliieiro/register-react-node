import People from "../../assets/image-home.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img src={People} alt="imagem-logo" />
      <Link to="/">home</Link>
      <Link to="/usuarios">Usuarios</Link>
      home
    </div>
  );
}
