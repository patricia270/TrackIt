import { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "../../styles/GlobalStyle";
import { Logotype } from "../../styles/GlobalStyle";
import { Input } from "../../styles/GlobalStyle";
import { Button } from "../../styles/GlobalStyle";
import Logo from "../login/logo.png"
import { postRegistration } from "../../service/Service";
import Loader from "react-loader-spinner";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [responseVerification, setResponseVerification] = useState(null);
    const [disabled, setDisabled] = useState(false)
    const [buttonContent, setButtonContent] = useState("Cadastrar")

    const history = useHistory();

    function registration (event) {
        event.preventDefault();
        const body = ({
            email,
            name,
            image,
            password
        })

        postRegistration(body)
            .then(resp => {
                setResponseVerification(resp.data)
                history.push("/")
            })
            .catch(err => alert("Erro na operação!"))

        if (responseVerification === null) {
            return (setDisabled(true), setButtonContent(<Loader
                type="ThreeDots"
                color="white"
                height={60}
                width={60}
                timeout={3000}
       
             />));    
        }
        
    };

    return (
        <Form onSubmit={registration}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}></Input>
            <Input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} disabled={disabled}></Input>
            <Input type="url" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} disabled={disabled}></Input>
            <Button type="submit" disabled={disabled}>{buttonContent}</Button>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Form >
    );
};
