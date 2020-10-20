import React from "react";
import Nav from "../components/Nav";

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
