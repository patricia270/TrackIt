import { Form } from "../../styles/GlobalStyle";
import { Logotype } from "../../styles/GlobalStyle";
import { Input } from "../../styles/GlobalStyle";
import { Button } from "../../styles/GlobalStyle";
import Logo from "../login/logo.png"


export default function Register() {
    return (
        <Form >
            <Logotype src={Logo} alt="Logo" />
            <Input type="text" placeholder="email" ></Input>
            <Input type="text" placeholder="senha" ></Input>
            <Input type="text" placeholder="nome" ></Input>
            <Input type="text" placeholder="foto" ></Input>
            <Button>Entrar</Button>
            <a href="#">Não tem uma conta? Cadastre-se!</a>
        </Form >
    );
};
