import React from "react";
import { Link } from "react-router-dom";
import SignUpModal from "../components/SignUpModal";
import SignInModal from "../components/SignInModal";

const Landing = () => {
    return (
        <div
            className="landing mx-auto"
            style={{
                width: "80%",
                backgroundImage: "url(/assets/img/landing-banner.png)",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundPosition: " right",
            }}
        >
            <div className="row m-0">
                <div className="col-xl-6">
                    <div className="row pl-4 pt-4">
                        <div
                            className="col-xl-12 ml-5"
                            style={{ height: "200px" }}
                        >
                            {/* <Link to="/home"> */}
                            <img
                                src="./assets/logo/main.png"
                                alt="Logo"
                                style={{
                                    position: "relative",
                                    top: "-10px",
                                }}
                            />
                            {/* </Link> */}
                        </div>
                        <div className="col-xl-12 ml-5 pb-5" style={{}}>
                            <span
                                style={{
                                    fontSize: "115px",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    fontFamily: "Times New Roman",
                                    lineHeight: "100px",
                                    letterSpacing: "0em",
                                }}
                            >
                                source of
                            </span>
                            <span
                                style={{
                                    fontSize: "115px",
                                    fontWeight: "700",
                                    fontFamily: "Times New Roman",
                                    lineHeight: "100px",
                                    letterSpacing: "0em",
                                }}
                            >
                                intelligence
                            </span>
                        </div>
                        <div className="col-xl-7 ml-5" style={{}}>
                            <p
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    fontFamily: "",
                                }}
                            >
                                source of intelligence
                            </p>
                        </div>
                        <div className="col-xs-9 ml-5 my-4 pl-3" style={{}}>
                            <button
                                data-toggle="modal"
                                data-target="#signupmodal"
                                className="btn dark btn-lg mr-3 text-light"
                                style={{
                                    width: "200px",
                                    background: "#EE4622",
                                }}
                            >
                                Sign up
                            </button>
                            <button
                                data-toggle="modal"
                                data-target="#signinmodal"
                                className="btn btn-light btn-lg ml-5"
                                style={{
                                    width: "200px",
                                    background: "rgba(233,233,233,0.7)",
                                }}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SignInModal />
            <SignUpModal />
        </div>
    );
};

export default Landing;
