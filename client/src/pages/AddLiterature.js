import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import AttachIcon from "../static/icon/attach.png";
import AddBookIcon from "../static/icon/addbookwhite.png";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";

function AddLiterature() {
    const history = useHistory();
    const [state] = useContext(UserContext);
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        publication: "",

        userId: "",
        pages: "",
        ISBN: "",
    });

    const { title, publication, pages, ISBN, file } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({
                title,
                publication,
                userId: state.user.id,
                pages,
                ISBN,
                file: title + ".pdf",
                status: "Waiting to be verified",
            });
            await API.post("/literature", body, config);
            setFormData({
                title: "",
                publication: "",
                userId: "",
                pages: "",
                ISBN: "",
            });
            alert("Literature added");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="myCollection">
            <div className="row mx-auto" style={{ width: "90%" }}>
                <Nav />

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
                        Add Literature
                    </span>
                </div>

                <div className="row pt-4">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group mb-4 pb-2">
                                <input
                                    placeholder="Title"
                                    type="text"
                                    className="form-control form-control-lg bg-light"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="title"
                                    value={title}
                                />
                            </div>
                            <div className="form-group mb-4 pb-2">
                                <input
                                    placeholder="Publication Date"
                                    type="text"
                                    className="form-control form-control-lg bg-light"
                                    name="publication"
                                    value={publication}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>

                            <div className="form-group mb-4 pb-2">
                                <input
                                    placeholder="Pages"
                                    type="text"
                                    className="form-control form-control-lg bg-light"
                                    name="pages"
                                    value={pages}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="form-group mb-4 pb-2">
                                <input
                                    placeholder="ISBN"
                                    type="text"
                                    className="form-control form-control-lg bg-light"
                                    name="ISBN"
                                    value={ISBN}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>

                            <div
                                className="form-group mb-2"
                                style={{ width: "250px" }}
                            >
                                <div className="input-group input-group-lg">
                                    <input
                                        type="text"
                                        className="form-control bg-light"
                                        id="inlineFormInputGroup"
                                        placeholder="Attach Book File"
                                    />
                                    <div
                                        style={{
                                            lineHeight: "45px",
                                            position: "relative",
                                            left: "-35px",
                                        }}
                                    >
                                        <img
                                            src={AttachIcon}
                                            alt="Attach file"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12" style={{}}>
                        <button
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                            className="btn text-white"
                            style={{
                                float: "right",
                                background: "#EE4622",
                                fontSize: "18px",
                            }}
                        >
                            Add Boook
                            <img
                                className="ml-2"
                                style={{ width: "25px", height: "25px" }}
                                src={AddBookIcon}
                                alt="Attach file"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddLiterature;
