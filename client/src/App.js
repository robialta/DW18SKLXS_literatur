import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { API } from "./config/api";
import { UserContext } from "./context/userContext";

//Import components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const [state, dispatch] = useContext(UserContext);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await API.get("/auth");
                dispatch({
                    type: "USER_LOADED",
                    payload: res.data.data,
                });
            } catch (error) {
                dispatch({
                    type: "AUTH_ERROR",
                });
            }
        };
        loadUser();
    });
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Landing} />
                <PrivateRoute exact path={"/home"} component={Home} />
                <PrivateRoute exact path={"/profile"} component={Profile} />
            </Switch>
        </Router>
    );
}

export default App;
