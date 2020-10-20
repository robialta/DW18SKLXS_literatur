import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

//Import components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import PrivateRoute from "./components/PrivateRoute";
import AddLiterature from "./pages/AddLiterature";

if (localStorage.token) setAuthToken(localStorage.token);

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
                <PrivateRoute exact path={"/home"} component={Home} />
                <PrivateRoute exact path={"/profile"} component={Profile} />
                <PrivateRoute
                    exact
                    path={"/addliterature"}
                    component={AddLiterature}
                />
                <PrivateRoute
                    exact
                    path={"/search/:title"}
                    component={Search}
                />
            </Switch>
        </Router>
    );
}

export default App;
