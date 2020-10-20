import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { API } from "../config/api";

const Profile = () => {
    return (
        <div className="home">
            <div className="row mx-auto" style={{ width: "80%" }}>
                <Nav />
            </div>
            <div className="col-lg-12">
                <h1>Profile</h1>
            </div>
        </div>
    );
};

export default Profile;
