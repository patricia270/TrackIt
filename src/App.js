
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Habits from "./components/habits/Habits";
import Today from "./components/today/Today";
import Today2 from "./components/today/Today2";
import Historic from "./components/historic/Historic";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";
import { useState } from "react";

function App() {
  const [loginResponse, setLoginResponse] = useState(null);
  const [progress, setProgress] = useState("60");

  return (
    <UserContext.Provider value={{loginResponse, setLoginResponse}}>
    <ProgressContext.Provider value={{progress, setProgress}}>  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login loginResponse={loginResponse} setLoginResponse={setLoginResponse} />
        </Route>
        <Route path="/registration">
          <Register />
        </Route>
        <Route path="/habits">
          <Habits />
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
    </ProgressContext.Provider>
    </UserContext.Provider>    
  );
}

export default App;
