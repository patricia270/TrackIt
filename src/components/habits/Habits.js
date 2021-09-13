import styled from "styled-components";
import { Input } from "../../styles/GlobalStyle";
import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { createHabit } from "../../service/Service";
import { listHabits } from "../../service/Service";
import HabitUser from "./Habit";
import Loader from "react-loader-spinner";

export default function Habits() {
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false)

    const [habitsArray, setHabitsArray] = useState("");
    const [reset, setReset] = useState(false);

    const [habitoCriado, setHabitoCriado] = useState([])

    const weekdays = [
        {
            name: "D",
            id: 0
        },
        {
            name: "S",
            id: 1
        },
        {
            name: "T",
            id: 2
        },
        {
            name: "Q",
            id: 3
        },
        {
            name: "Q",
            id: 4
        },
        {
            name: "S",
            id: 5
        },
        {
            name: "S",
            id: 6
        },
    ]
    const [habitCreationForm, setHabitCreationForm] = useState(false);
    const [days, setDays] = useState([]);


    function openHabitCreationForm() {
        if (habitCreationForm === false) {
             setHabitCreationForm(true)
        } else {
            setHabitCreationForm(false)
        }
    }

    const {
        loginResponse
    } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${loginResponse.token}`
        }
    }

    function create() {
    
            const body = {
                name,
                days
            }
    
            createHabit(config, body)
                .then(resp => {
                    setHabitoCriado(resp.data);
                    setDisabled(false);
                    openHabitCreationForm();
                    setName("");
                    setDays([]);
                    setReset(true);
                    setTimeout(() => {
                        setReset(false);
                    }, 0)
                    
            })
                .catch(err => {
                    alert("Preencha os campos");
                    setDisabled(false);
                })
    }


    function showHabits() {
        listHabits(config)
        .then(resp => {
            setHabitsArray(resp.data)
        })
        .catch(err => {
            alert("erro!")
        });
    }

    useEffect(showHabits, [])


    return (
        <>
            <TopBar />
            <HabitsContent>
                <h2>Meus hábitos</h2>
                <AddHabitButton onClick={openHabitCreationForm}>+</AddHabitButton>
                <AddHabitBox habitCreationForm={habitCreationForm}>
                    <Input placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} required></Input>
                    <Weekdays>
                        {!reset ? weekdays.map((weekday, index) => (<Weekday key={index} weekday={weekday} index={index} setDays={setDays} days={days} setDisabled={setDisabled} disabled={disabled}/>)) : ""}
                    </Weekdays>
                    <h5 onClick={() => openHabitCreationForm()}>Cancelar</h5>
                    <SaveButton onClick={create} disabled={disabled}>{ disabled ? 
                        <Loader
                            type="ThreeDots"
                            color="white"
                            height={30}
                            width={60}
                            timeout={3000}           
                        /> : "Salvar"}
                    </SaveButton>
                </AddHabitBox>
                    {habitsArray.length === 0 ? 
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                        habitsArray.map((habit) => (
                            <HabitUser habit={habit} key={habit.id} showHabits={showHabits} weekdays={weekdays} />
                        )) 
                    }
            </HabitsContent>
            <Footer />
        </>
    );
};


function Weekday({weekday, index, setDays, days, disabled, setDisabled}) {
    const [selected, setSelected] = useState(false)

    function select() {
        if (selected === false) {
            setSelected(true);
            setDays([...days, weekday.id])            
        } else {
            setSelected(false);
            setDays(days.filter(day => day !== weekday.id))
        }
    }

    return (
        <Day key={index} onClick={select} selected={selected} disabled={disabled}>{weekday.name}</Day>
    );
}



export const HabitsContent = styled.div`

    padding: 98px 18px 0 17px;
    margin-bottom: 80px;
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

export const AddHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    position: absolute;
    top: calc(70px + 21px);
    right: 18px;
    color: #FFFFFF;
    font-size: 26.98px;
    font-weight: bold;
`;


export const AddHabitBox = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 19px 0 18px;
    margin-bottom: 29px;
    position: relative;
    display: ${({habitCreationForm}) => habitCreationForm === false ? "none" : "block" };
    h5 {
        font-size: 15.98px;
        color: #52B6FF;
        position: absolute;
        top: 139px;
        right: 123px;
        text-decoration: none;
        
    }
`;

export const Weekdays = styled.div`
    display: flex;
`;


export const Day = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    background-color:  ${({selected}) => selected === false ? "#FFFFFF" : "#CFCFCF"};
    margin-left: 4px;
    font-size: 19.98px;
    color: ${({selected}) => selected === false ? "#DBDBDB" : "#FFFFFF"};
`;

export const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    color: #FFFFFF;
    font-size: 15.98px;
    position: absolute;
    top: 130px;
    right: 16px;
`;

