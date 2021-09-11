
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NoHabits from "./components/habits/NoHabits";
import Habits from "./components/habits/Habits";
import WithHabits from "./components/habits/WithHabits";
import Today from "./components/today/Today";
import Today2 from "./components/today/Today2";
import Historic from "./components/historic/Historic";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/registration">
          <Register />
        </Route>
        <Route path="/nohabits">
          <NoHabits />
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
        <Route path="/with-habits">
          <WithHabits />
        </Route>
        <Route path="/today">
          <Today />
        </Route>
        <Route path="/today2">
          <Today2 />
        </Route>
        <Route path="/historic">
          <Historic />
        </Route>

      </Switch>
      <GlobalStyle />
    </BrowserRouter>
    
  );
}

export default App;
