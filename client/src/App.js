import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { API } from "./config/api";
import { UserContext } from "./context/userContext";
import Landing from "./pages/Landing";

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
    }, []);
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Landing} />
            </Switch>
        </Router>
    );
}

export default App;
