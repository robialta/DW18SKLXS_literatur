import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

//Componen
import ListCard from "../components/ListCard";
import Nav from "../components/Nav";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

const Home = () => {
    const [state, dispatch] = useContext(UserContext);
    const history = useHistory();
    const [formData, setFormData] = useState({ keyword: "" });

    const { keyword } = formData;

    const handleChange = (e) => {
        setFormData({ [e.target.name]: e.target.value });
    };

    const searching = async () => {
        history.push(`/search/${keyword}`);
    };
    return (
        <div className="home">
            <div className="row mx-auto" style={{ width: "80%" }}>
                <Nav />
                <div className="col-sm-12 ">
                    <form className="form-inline mx-auto">
                        <div
                            className="mx-auto"
                            style={{
                                marginTop: "30%",
                            }}
                        >
                            <div className="form-group">
                                <input
                                    required
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    className="form-control form-control-lg"
                                    type="text"
                                    name="keyword"
                                    value={keyword}
                                    placeholder="Search for literatur"
                                />
                                <button
                                    onClick={() => searching()}
                                    type="submit"
                                    class="btn btn-lg btn-primary mx-2"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
