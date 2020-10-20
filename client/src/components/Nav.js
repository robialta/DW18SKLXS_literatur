import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="col-lg-12">
                <nav className="nav">
                    <Link to={"/profile"} className="nav-link">
                        Profile
                    </Link>
                    <Link to={"/"} className="nav-link">
                        My Collection
                    </Link>
                    <Link to={"/addliterature"} className="nav-link">
                        Add Literatur
                    </Link>
                    <Link to={"/"} className="nav-link">
                        Log out
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
