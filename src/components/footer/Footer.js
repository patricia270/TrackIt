
import styled from "styled-components";
export default function Footer() {
    return (
        <FooterComponent>
            <p>Hábitos</p>
            <p>Histórico</p>
        </FooterComponent>
    );
}


const FooterComponent= styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 31px 0 36px;
    justify-content: space-between;
    p {
        color: #52B6FF;
        font-size: 17.98px;
    }

`;