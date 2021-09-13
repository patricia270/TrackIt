import TopBar from "../topbar/TopBar";
import styled from "styled-components";
import Footer from "../footer/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { listHabitsToday } from "../../service/Service";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import HabitSituation from "./HabitSituation";
import ProgressContext from "../../contexts/ProgressContext";

export default function Today() {
    const data = dayjs()
    .locale('pt-br')
    .format("dddd, DD/MM");

    const [userHabitsToday, setUserHabitsToday] = useState([]);

    const {
        loginResponse
    } = useContext(UserContext);

    const {
        setProgress
    } = useContext(ProgressContext);


    function showHabitsToday() {
        const config = {
            headers: {
                Authorization: `Bearer ${loginResponse.token}`
            }
        }
        listHabitsToday(config)
        .then(resp => {setUserHabitsToday(resp.data)})
    }

    useEffect(showHabitsToday, []);

    const habitsDone = userHabitsToday.filter((habit) => habit.done);
    setProgress(data.length > 0 ? (habitsDone.length/data.length*100).toFixed(0) : "0")

    return (
        <>
            <TopBar />
            <SituationHabitsContent>
                <Date>{data}</Date>
                <Span habitsDone={habitsDone}>{userHabitsToday.length === 0 ? "Você não possui hábitos para hoje" : habitsDone.length > 0 ? `${(habitsDone.length/userHabitsToday.length*100).toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda" }</Span>
                {userHabitsToday.length === 0 ? "" :
                    userHabitsToday.map((habit) => (
                        <HabitSituation habit={habit} key={habit.id} showHabitsToday={showHabitsToday} />
                    ))            
                }
            </SituationHabitsContent>
            <Footer />

        </>
    );
}

const SituationHabitsContent = styled.div`
    padding: 98px 18px 0 17px;
    margin-bottom: 90px;
`;

const Span = styled.span`
    color: ${({habitsDone}) => habitsDone.length > 0 ? "#8FC549" : "#BABABA"};
    font-size: 17.98px;
    position: absolute;
    top: calc(70px + 57px);
    margin-bottom: 28px;
    margin-bottom: 50px;
`;

const Date = styled.h2`
    color: #126BA5;
    font-size: 22.98px;
    margin-bottom: 50px;
`;
