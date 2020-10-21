import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { API } from "../config/api";

const Search = () => {
    const [literatures, setLiteratures] = useState([]);

    const { title } = useParams();
    const [formData, setFormData] = useState({ keyword: title });

    const { keyword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const searchLiterature = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post(`/search?title=${keyword}`);
            setLiteratures(res.data.data);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await API.post(`/search?title=${title}`);
                setLiteratures(res.data.data);
            } catch (err) {
                alert(err);
            }
        };
        loadData();
    }, []);
    return (
        <div>
            <div className="row mx-auto" style={{ width: "90%" }}>
                <Nav />

                <div className="col-sm-12 my-3">
                    <form className="form-inline ">
                        <div className="form-group">
                            <input
                                autoFocus
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                value={keyword}
                                name="keyword"
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Search for literatur"
                            />
                        </div>
                        <input
                            type="button"
                            value="Search"
                            onClick={(e) => {
                                searchLiterature(e);
                            }}
                            className="btn btn-lg btn-primary mx-2"
                        />
                    </form>
                </div>
                <div className="col-sm-12 ">
                    <div className="row">
                        <div className="col-sm-2 ">
                            {" "}
                            <p style={{ color: "#AF2E1C" }}>Anytime</p>
                        </div>
                        <div className="col-sm-10 ">
                            <div className="row">
                                {literatures.map((literature, index) => (
                                    <div className="col-sm-4 " key={index}>
                                        <Link
                                            to={`/detail/${literature.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <div
                                                className="card m-3"
                                                style={{
                                                    border: "none",
                                                    zIndex: "-1",
                                                }}
                                            >
                                                <img
                                                    src={`../assets/img/${literature.file}`}
                                                    className="card-img-top"
                                                    alt="lb1"
                                                />
                                                <div className="card-body p-0 ">
                                                    <p
                                                        className="card-text mt-3 mb-2"
                                                        style={{
                                                            color: "black",
                                                            fontFamily:
                                                                "Times New Roman",
                                                            fontSize: "24px",
                                                            fontStyle: "normal",
                                                            fontWeight: 700,
                                                            lineHeight: "24px",
                                                            letterSpacing:
                                                                "0em",
                                                        }}
                                                    >
                                                        {literature.title}
                                                    </p>
                                                    <p
                                                        className="card-text"
                                                        style={{
                                                            fontSize: "20px",
                                                            lineHeight:
                                                                "20.27px",
                                                        }}
                                                    >
                                                        <small className="text-muted">
                                                            User name
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
