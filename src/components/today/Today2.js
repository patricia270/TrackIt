import styled from "styled-components";
import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";

export default function Today2 () {
    return (
        <>
            <TopBar />
            <SituationHabitsContent>
                <Date>Segunda, 17/05</Date>
                <Span>67% dos hábitos concluídos</Span>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    <Records>Sequência atual: <span>3 dias</span></Records>
                    <Records>Seu recorde: 5 dias</Records>
                </HabitSituation>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    <Records>Sequência atual: <span>3 dias</span></Records>
                    <Records>Seu recorde: <span>5 dias</span></Records>
                </HabitSituation>
            </SituationHabitsContent>
            <Footer />

        </>
    );
}


export const SituationHabitsContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0 17px;
    height: 100vh;
`;

export const Span = styled.span`
    color: #8FC549;
    font-size: 17.98px;
    position: absolute;
    top: calc(70px + 57px);
    margin-bottom: 28px;
    margin-bottom: 50px;
`;

export const Date = styled.h2`
    color: #126BA5;
    font-size: 22.98px;
    margin-bottom: 50px;
`;

export const HabitSituation = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 0 17px;
    margin-bottom: 10px;
    position: relative;
    button {
        width: 69px;
        height: 69px;
        background-color: #8FC549;
        position: absolute;
        top: 13px;
        right: 13px;
    }
    span {
        color: #8FC549;
    }
`;

export const HabitTitle = styled.h3`
    font-size: 19.98px;
    margin-bottom: 8px;
    color: #666666;
`;

export const Records = styled.h4`
    font-size: 12.98px;
    color: #666666;

`;