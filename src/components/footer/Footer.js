import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressContext from "../../contexts/ProgressContext";
import { useContext } from "react";

export default function Footer() {
    const {
        progress
    } = useContext(ProgressContext);
    return (
        <FooterComponent>
            <Link to="/habits">Hábitos</Link>
            <Link to="/today">
                <ProgressBar>
                <CircularProgressbar
                        value={progress}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                        })}
                    />           
                </ProgressBar>
            </Link>
            <Link to="/historic">Histórico</Link>
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
    a {
        color: #52B6FF;
        font-size: 17.98px;
        text-decoration: none;
    }

`;

const ProgressBar = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: 142px;
`;