import styled from "styled-components";
import { IoIosCheckmark } from "react-icons/io";
import { useContext} from "react";
import UserContext from "../../contexts/UserContext";
import { habitState } from "../../service/Service";
export default function HabitSituation({habit, showHabitsToday}) {

    const {
        loginResponse
    } = useContext(UserContext);

    function habitS() {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginResponse.token}`
            }
        }

        if (habit.done) {
            habitState("uncheck", habit.id, config).then(resp => {
                showHabitsToday();
            }).catch(err => {
                console.log("erro!")
            });
        } else {
            habitState("check", habit.id, config).then(resp => {
                showHabitsToday();
            }).catch(err => {
                console.log("erro!")
            });
        }
    }

    return (       

        <ComponentHabitSituation habit={habit} >
            <HabitTitle>{habit.name}</HabitTitle>
            <button>
                <IoIosCheckmark
                    color={'#FFFFFF'}
                    size="60px"
                    strokeWidth="10px" 
                    onClick={habitS}                               
                />
            </button>
            <Records color={habit.currentSequence === habit.highestSequence && habit.done ? "#8FC549" : "#666666"}>
                <p>Sequência atual: <span>{habit.currentSequence} {habit.currentSequence !== 1 ? "dias" : "dia"}</span></p>
                <p>Seu recorde: <span>{habit.highestSequence} {habit.highestSequence !== 1 ? "dias" : "dia"}</span></p>                    
                </Records>
        </ComponentHabitSituation> 
       
    );
}

const ComponentHabitSituation = styled.div`
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
        background-color:  ${({habit}) => habit.done ? "#8FC549" : "#EBEBEB"};
        position: absolute;
        top: 13px;
        right: 13px;
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
    span {
        color: ${props => props.color};
    }

`;