import { Link, useHistory } from "react-router-dom";
import Logo from "./logo.png"
import { Form } from "../../styles/GlobalStyle";
import { Logotype } from "../../styles/GlobalStyle";
import { Input } from "../../styles/GlobalStyle";
import { Button } from "../../styles/GlobalStyle";
import { useState } from "react";
import { postForLogin } from "../../service/Service";
import Loader from "react-loader-spinner";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false)
    const [loginResponse, setLoginResponse] = useState(null);
    const [buttonLoginContent, setButtonLoginContent] = useState("Entrar");

    const history = useHistory();



    function start (event) {
        event.preventDefault();
        const body = {
            email,
            password
        }

        postForLogin(body)
            .then(resp => {
                setLoginResponse(resp.data)
                history.push("/today")       
            })
            .catch(err => alert("Ocorreu um erro durante a operação")) 

        if (loginResponse === null) {
            return (setDisabled(true), setButtonLoginContent(<Loader
                type="ThreeDots"
                color="white"
                height={60}
                width={60}
                timeout={3000}
           
                />));    
        }    
            
    }

    console.log(loginResponse);



    return (
        <Form onSubmit={start}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}></Input>
            <Button type="submit">{buttonLoginContent}</Button>
            <Link to="/registration">Não tem uma conta? Cadastre-se!</Link>
        </Form >
    );
}


