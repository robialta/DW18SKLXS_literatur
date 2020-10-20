import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [state] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                state.loading ? (
                    <h1>Loading...</h1>
                ) : state.isLogedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;
