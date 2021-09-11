import styled from "styled-components";
import TopBar from "../topbar/TopBar";
import { AddHabitButton } from "./Habits";
import { HabitsContent } from "./Habits";
import { Weekdays } from "./Habits";
import { Weekday } from "./Habits";
import Footer from "../footer/Footer";
import { IoIosTrash } from "react-icons/io";

export default function WithHabits() {
    return (
        <>
        <TopBar />
        <HabitsContent>
            <h2>Meus hábitos</h2>
            <AddHabitButton>+</AddHabitButton>
            <Habit>
                <h3>Ler 1 capítulo de livro</h3>
                <IoIosTrash />
                <Weekdays>
                    <Weekday>D</Weekday>
                    
                    <Weekday>S</Weekday>
                    
                    <Weekday>T</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>S</Weekday>
                   
                    <Weekday>S</Weekday>
                </Weekdays>
            </Habit>
            <Habit>
                <h3>Ler 1 capítulo de livro</h3>
                <Weekdays>
                    <Weekday>D</Weekday>
                    
                    <Weekday>S</Weekday>
                    
                    <Weekday>T</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>S</Weekday>
                   
                    <Weekday>S</Weekday>
                </Weekdays>
            </Habit>
            <Habit>
                <h3>Ler 1 capítulo de livro</h3>
                <Weekdays>
                    <Weekday>D</Weekday>
                    
                    <Weekday>S</Weekday>
                    
                    <Weekday>T</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>Q</Weekday>
                    
                    <Weekday>S</Weekday>
                   
                    <Weekday>S</Weekday>
                </Weekdays>
            </Habit>
        </HabitsContent>
        <Footer />
    </>
    );
}


const Habit = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 0 17px;
    margin-bottom: 10px;
    position: relative;
    h3 {
        font-size: 19.98px;
        margin-bottom: 8px;
    }

    button:nth-child(2n) {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`;