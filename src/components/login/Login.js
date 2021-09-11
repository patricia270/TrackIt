import Logo from "./logo.png"
import { Form } from "../../styles/GlobalStyle";
import { Logotype } from "../../styles/GlobalStyle";
import { Input } from "../../styles/GlobalStyle";
import { Button } from "../../styles/GlobalStyle";

export default function Login() {
    return (
        <Form >
            <Logotype src={Logo} alt="Logo" />
            <Input type="text" placeholder="email" ></Input>
            <Input type="text" placeholder="senha" ></Input>
            <Button>Entrar</Button>
            <a href="#">Não tem uma conta? Cadastre-se!</a>
        </Form >
    );
}


