import styled from "styled-components";
import Trackit from "./trackit.svg";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
export default function TopBar() {

    const {
        loginResponse
    } = useContext(UserContext);
    return (
        <ComponentTopBar>
            <LogotypeTopBar src={Trackit} alt="Logo TrackIt" />
            <ProfileImg src={loginResponse.image} alt="Imagem de perfil" />
        </ComponentTopBar>
    );
}


const ComponentTopBar = styled.header`
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    box-shadow: 0px  4px 4px  0px  #00000026;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 0 18px;   
    z-index: 1; 
`;

const LogotypeTopBar = styled.img`
    width: 97px;
    height: 49px;
`;

const ProfileImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`;