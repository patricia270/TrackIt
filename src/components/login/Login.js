import { Link } from "react-router-dom";
import Logo from "./logo.png"
import { Form } from "../../styles/GlobalStyle";
import { Logotype } from "../../styles/GlobalStyle";
import { Input } from "../../styles/GlobalStyle";
import { Button } from "../../styles/GlobalStyle";

export default function Login() {


    return (
        <Form>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" ></Input>
            <Input type="password" placeholder="senha" ></Input>
            <Button>Entrar</Button>
            <Link to="/registration">Não tem uma conta? Cadastre-se!</Link>
        </Form >
    );
}


