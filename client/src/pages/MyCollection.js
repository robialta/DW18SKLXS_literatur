import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const MyCollection = () => {
    return (
        <div className="profile">
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
                        My Collection
                    </span>
                </div>

                <div className="row">
                    {/* {myLiteratures.map((literature, index) => ( */}
                    <Link to={`detail/2`} style={{ textDecoration: "none" }}>
                        <div
                            // key={index}
                            className="card m-3"
                            style={{
                                border: "none",
                                zIndex: "-1",
                                width: "300px",
                            }}
                        >
                            <img
                                src={`../assets/img/literature-cover.png`}
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
                                    {/* {literature.title} */}
                                    Literature title
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
                    {/* ))} */}
                </div>
            </div>
        </div>
    );
};

export default MyCollection;
