import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

import GenderIcon from "../static/icon/gender.png";
import EmailIcon from "../static/icon/email.png";
import PhoneIcon from "../static/icon/phone.png";
import LocalIcon from "../static/icon/local.png";
import PotoProfil from "../static/img/potoprofil.png";
import Nav from "../components/Nav";

const Profile = () => {
    const [state, dispatch] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [myLiteratures, setMyLiteratures] = useState([]);

    useEffect(() => {
        const loadMyLiteratures = async () => {
            try {
                const res = await API.get(`/myliteratures/${state.user.id}`);
                setMyLiteratures(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        loadMyLiteratures();
    }, []);
    return (
        <div className="profile">
            <div className="row mx-auto" style={{ width: "90%" }}>
                <Nav />
                <div className="col-md-12 " style={{ background: "" }}>
                    <div className="row py-4">
                        <div className="col-md-12">
                            <span
                                style={{
                                    fontFamily: "Times New Roman",
                                    fontSize: "36px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "37px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                Profile
                            </span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12">
                            <div
                                className="card"
                                style={{
                                    minHeight: "339px",
                                    background: "#252525",
                                    width: "100%",
                                    border: "none",
                                }}
                            >
                                <div className="row m-3 mt-5 mr-4">
                                    <div
                                        className="col-xl-9"
                                        style={{ background: "" }}
                                    >
                                        <ul class="list-group" style={{}}>
                                            <li
                                                class="list-group-item"
                                                style={{
                                                    display: "flex",
                                                    backgroundColor: "#252525",
                                                    border: "none",
                                                }}
                                            >
                                                <div
                                                    className="mr-4"
                                                    style={{
                                                        maxWidth: "75px",
                                                        background: "",
                                                    }}
                                                >
                                                    <img
                                                        className=""
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "7px",
                                                        }}
                                                        src={EmailIcon}
                                                        alt="usericon"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        maxWidth: "",
                                                        background: "",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "",
                                                            fontWeight: 700,
                                                            color: "white",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        {state.user.email}
                                                    </span>{" "}
                                                    <br></br>
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "3px",
                                                            color: "#929292",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            fontFamily:
                                                                "Google Sans",
                                                        }}
                                                    >
                                                        E-mail
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="list-group-item"
                                                style={{
                                                    display: "flex",
                                                    backgroundColor: "#252525",
                                                    border: "none",
                                                }}
                                            >
                                                <div
                                                    className="mr-4"
                                                    style={{
                                                        maxWidth: "75px",
                                                        background: "",
                                                    }}
                                                >
                                                    <img
                                                        className=""
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "7px",
                                                        }}
                                                        src={GenderIcon}
                                                        alt="usericon"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        maxWidth: "",
                                                        background: "",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "",
                                                            fontWeight: 700,
                                                            color: "white",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        {state.user.gender}
                                                    </span>{" "}
                                                    <br></br>
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "3px",
                                                            color: "#929292",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            fontFamily:
                                                                "Google Sans",
                                                        }}
                                                    >
                                                        Gender
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="list-group-item"
                                                style={{
                                                    display: "flex",
                                                    backgroundColor: "#252525",
                                                    border: "none",
                                                }}
                                            >
                                                <div
                                                    className="mr-4"
                                                    style={{
                                                        maxWidth: "75px",
                                                        background: "",
                                                    }}
                                                >
                                                    <img
                                                        className=""
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "7px",
                                                        }}
                                                        src={PhoneIcon}
                                                        alt="usericon"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        maxWidth: "",
                                                        background: "",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "",
                                                            fontWeight: 700,
                                                            color: "white",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        {state.user.phone}
                                                    </span>{" "}
                                                    <br></br>
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "3px",
                                                            color: "#929292",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            fontFamily:
                                                                "Google Sans",
                                                        }}
                                                    >
                                                        Mobile phone
                                                    </span>
                                                </div>
                                            </li>
                                            <li
                                                class="list-group-item"
                                                style={{
                                                    display: "flex",
                                                    backgroundColor: "#252525",
                                                    border: "none",
                                                }}
                                            >
                                                <div
                                                    className="mr-4"
                                                    style={{
                                                        maxWidth: "75px",
                                                        background: "",
                                                    }}
                                                >
                                                    <img
                                                        className=""
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "7px",
                                                        }}
                                                        src={LocalIcon}
                                                        alt="usericon"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        maxWidth: "",
                                                        background: "",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "",
                                                            fontWeight: 700,
                                                            color: "white",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        {state.user.address}
                                                    </span>{" "}
                                                    <br></br>
                                                    <span
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "3px",
                                                            color: "#929292",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            fontFamily:
                                                                "Google Sans",
                                                        }}
                                                    >
                                                        Address
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="col-xl-3 p-0 text-center"
                                        style={{ background: "" }}
                                    >
                                        <img
                                            style={{ width: "" }}
                                            src={PotoProfil}
                                            class="rounded mx-auto"
                                            alt="potoprofil"
                                        />
                                        <button
                                            className="btn dark btn-md  text-light my-3"
                                            style={{
                                                width: "227px",
                                                background: "#EE4622",
                                            }}
                                        >
                                            Change Photo Profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-12">
                            <span
                                style={{
                                    fontFamily: "Times New Roman",
                                    fontSize: "36px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "37px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                My Books
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        {myLiteratures.map((literature, index) => (
                            <Link
                                to={`detail/`}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    key={index}
                                    className="card m-3"
                                    style={{
                                        border: "none",
                                        zIndex: "-1",
                                        width: "300px",
                                    }}
                                >
                                    <img
                                        src={`../assets/img/literatur-cover.png`}
                                        className="card-img-top"
                                        alt="lb1"
                                    />
                                    <div className="card-body p-0 ">
                                        <p
                                            className="card-text mt-3 mb-2"
                                            style={{
                                                color: "black",
                                                fontFamily: "Times New Roman",
                                                fontSize: "24px",
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                lineHeight: "24px",
                                                letterSpacing: "0em",
                                            }}
                                        >
                                            {literature.title}
                                        </p>
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: "20px",
                                                lineHeight: "20.27px",
                                            }}
                                        >
                                            <small className="text-muted">
                                                User name
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
