import TopBar from "../topbar/TopBar";
import { HabitsContent } from "./Habits";
import Footer from "../footer/Footer";
import { AddHabitButton } from "./Habits";
export default function NoHabits() {
    return (
        <>
            <TopBar />
            <HabitsContent>
                <h2>Meus hábitos</h2>
                <AddHabitButton>+</AddHabitButton>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitsContent>
            <Footer />
        </>
    );
}




