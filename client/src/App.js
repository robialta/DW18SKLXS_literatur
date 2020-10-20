import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
    return (
        // <Router>
        //     <Switch>
        //         <Route path={"/"} element={Landing} />
        //     </Switch>
        // </Router>
        <>
            <Landing />
        </>
    );
}

export default App;
