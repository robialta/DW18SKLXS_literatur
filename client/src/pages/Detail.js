import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useHistory, useParams } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function Detail() {
    const [state] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [libraries, setLibraries] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    const { id } = useParams();
    const idUser = state.user.id;
    const history = useHistory();
    function readBook() {
        history.push("/reader");
    }
    const [literature, setLiterature] = useState({});

    const handleAddToLibrary = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = { UserId: idUser, BookId: id };

            await API.post("/libraries", body, config);
            alert("Book added to my library");
            setIsAdded(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const loadDetailLiterature = async () => {
            try {
                setLoading(true);
                const res = await API.get(`/literature/${id}`);

                setLiterature(res.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        const loadLibraries = async () => {
            try {
                const id = state.user.id;
                setLoading(true);
                const res = await API.get(`/literature/${id}`);
                setLibraries(
                    res.data.data.libraries.filter(
                        (book) => book.status == "Aproved"
                    )
                );
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };
        // loadLibraries();
        loadDetailLiterature();
    }, []);

    return (
        <div className="Detail ">
            <div className="row mx-auto" style={{ width: "90%" }}>
                <Nav />

                <div className="col-md-12">
                    <div
                        className="card"
                        style={{
                            backgroundColor: "#161616",
                            minHeight: "339px",
                            width: "100%",
                            border: "none",
                        }}
                    >
                        <div className="row m-3 mt-5 mr-4">
                            <div
                                className="col-sm-4 p-0"
                                style={{ background: "" }}
                            >
                                <img
                                    src={`../assets/img/${literature.file}`}
                                    style={{}}
                                    className="card-img-top mr-3"
                                    alt="lb1"
                                />
                            </div>
                            <div
                                className="col-sm-8"
                                style={{ background: "" }}
                            >
                                <ul className="list-group" style={{}}>
                                    <li
                                        className="list-group-item pt-0"
                                        style={{
                                            backgroundColor: "#161616",
                                            display: "flex",

                                            border: "none",
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: "",
                                                background: "",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "Times New Roman",
                                                    fontWeight: 700,
                                                    color: "white",
                                                    fontSize: "64px",
                                                    lineHeight: "77px",
                                                }}
                                            >
                                                {literature.title}
                                            </span>{" "}
                                            <br></br>
                                            <span
                                                style={{
                                                    color: "#929292",
                                                    fontWeight: 400,
                                                    fontSize: "24px",
                                                    lineHeight: "24.36px",
                                                }}
                                            >
                                                {literature.file}
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        className="list-group-item pb-0"
                                        style={{
                                            display: "flex",
                                            backgroundColor: "#161616",
                                            border: "none",
                                        }}
                                    >
                                        <div
                                            className="mt-1"
                                            style={{
                                                maxWidth: "",
                                                background: "",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: "24px",
                                                    lineHeight: "28.92px",
                                                }}
                                            >
                                                Publication Date
                                            </span>{" "}
                                            <br></br>
                                            <span
                                                style={{
                                                    color: "#929292",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    lineHeight: "30px",
                                                }}
                                            >
                                                {literature.publication}
                                            </span>
                                        </div>
                                    </li>

                                    <li
                                        className="list-group-item pb-0"
                                        style={{
                                            display: "flex",
                                            backgroundColor: "#161616",
                                            border: "none",
                                        }}
                                    >
                                        <div
                                            className=""
                                            style={{
                                                maxWidth: "",
                                                background: "",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: "24px",
                                                    lineHeight: "28.92px",
                                                }}
                                            >
                                                Pages
                                            </span>{" "}
                                            <br></br>
                                            <span
                                                style={{
                                                    color: "#929292",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    lineHeight: "30px",
                                                }}
                                            >
                                                {literature.pages}
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        className="list-group-item pb-0"
                                        style={{
                                            display: "flex",
                                            backgroundColor: "#161616",
                                            border: "none",
                                        }}
                                    >
                                        <div
                                            className=""
                                            style={{
                                                maxWidth: "",
                                                background: "",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: "24px",
                                                    lineHeight: "28.92px",
                                                    color: "#EE4622",
                                                }}
                                            >
                                                ISBN
                                            </span>{" "}
                                            <br></br>
                                            <span
                                                style={{
                                                    color: "#929292",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    lineHeight: "30px",
                                                }}
                                            >
                                                {literature.ISBN}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-dark m-3"
                                    type="button"
                                    style={{ backgroundColor: "#EE4622" }}
                                >
                                    Download
                                </button>
                                <button
                                    className="btn btn-dark m-3"
                                    type="button"
                                    style={{ backgroundColor: "#EE4622" }}
                                >
                                    Add to Library
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
