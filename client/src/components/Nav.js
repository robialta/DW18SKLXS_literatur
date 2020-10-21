import React from "react";
import { Link } from "react-router-dom";

const style = {
    lineHeight: "80px",
    color: "white",
};

const Nav = () => {
    const logOut = () => {
        localStorage.removeItem("token");
    };
    return (
        <div className="col-lg-12 " style={{ width: "100%" }}>
            <nav className="nav">
                <Link to={"/profile"} className="nav-link" style={style}>
                    Profile
                </Link>
                <Link to={"/mycollection"} className="nav-link" style={style}>
                    My Collection
                </Link>
                <Link to={"/addliterature"} className="nav-link" style={style}>
                    Add Literatur
                </Link>
                <Link
                    to={"/"}
                    onClick={() => {
                        logOut();
                    }}
                    className="nav-link"
                    style={style}
                >
                    Log out
                </Link>
                <Link
                    to={"/home"}
                    className="nav-link"
                    style={{ float: "right" }}
                >
                    <img src={"../assets/logo/main.png"} />
                </Link>
            </nav>
        </div>
    );
};

export default Nav;
