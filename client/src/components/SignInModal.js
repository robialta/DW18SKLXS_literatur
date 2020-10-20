import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import { UserContext } from "../context/userContext";

const SignInModal = () => {
    const history = useHistory();
    const [state, dispatch] = useContext(UserContext);
    const [formData, setformData] = useState({
        email: "obyaltha@gmail.com",
        password: "Rr892195",
    });
    const { email, password } = formData;

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ email, password });
        try {
            const res = await API.post("/login", body, config);
            if (res.status === 200) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data.data.token,
                });
                setAuthToken(res.data.data.token);
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
                    alert(res.data.error.message);
                }
                history.push(
                    res.data.data.type == "admin" ? "/admin" : "/home"
                );
            } else {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: res.data.data,
                });
                console.log(res.data.error.message);
            }
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILED",
            });
        }
    };

    return (
        <div
            className="modal fade"
            id="signinmodal"
            tabIndex="-1"
            aria-labelledby="signinmodalLabel"
            aria-hidden="true"
        >
            <div
                className="modal-dialog"
                style={{ width: "416px", height: "408px", top: "200px" }}
            >
                <div className="modal-content p-3 text-center">
                    <div className="modal-header" style={{ border: "none" }}>
                        <h5
                            className="modal-title"
                            id="exampleModalLabel"
                            style={{ fontWeight: "700", fontSize: "36px" }}
                        >
                            Sign In
                        </h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="form-group mb-5">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>

                            <button
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                                data-dismiss="modal"
                                className="btn btn-lg btn-block btn-dark mb-3"
                                style={{
                                    background: "#EE4622",
                                    border: "none",
                                }}
                            >
                                Sign In
                            </button>

                            <small
                                id="emailHelp"
                                className="form-text pt-2"
                                style={{
                                    fontSize: "16px",
                                }}
                            >
                                Don't have an account ? Click{" "}
                                <strong>here</strong>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
