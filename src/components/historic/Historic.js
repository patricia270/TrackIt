
import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import styled from "styled-components";
export default function Historic() {
    return (
        <>
            <TopBar />
            <HistoricContent>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            </HistoricContent>
            <Footer />

        </>
    );
}

const HistoricContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0 17px;
    height: 100vh;
    h2 {
        color: #126BA5;
        font-size: 22.98px;
        margin-bottom: 28px;
    }
    p {
        color: #666666;
        font-size: 17.98px;
        width: 340px;
        overflow-wrap: break-word;
    }
`;