import React from "react";

//Componen
import ListCard from "../components/ListCard";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className="home">
            <div className="row mx-auto" style={{ width: "80%" }}>
                <Nav />
                <div className="col-sm-12 ">
                    <form
                        className="mx-auto"
                        style={{ marginTop: "30%", width: "60%" }}
                    >
                        <div className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Search for literatur"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
