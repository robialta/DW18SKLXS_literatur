import React, { useState } from "react";

function SignUpModal() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        gender: "",
        phone: "",
    });

    const { fullName, email, password, address, gender, phone } = formData;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const config = {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         };
    //         const body = JSON.stringify({
    //             fullName,
    //             email,
    //             password,
    //             address,
    //             gender,
    //             phone,
    //         });
    //         const res = await API.post("/register", body, config);
    //         setFormData({
    //             fullName: "",
    //             email: "",
    //             password: "",
    //             address: "",
    //             gender: "",
    //             phone: "",
    //         });
    //         alert(res.data.message);
    //     } catch (err) {
    //         alert("Failed");
    //     }
    // };
    return (
        <div
            className="modal fade"
            id="signupmodal"
            tabIndex="-1"
            aria-labelledby="signUpmodalLabel"
            aria-hidden="true"
        >
            <div
                className="modal-dialog"
                style={{ width: "416px", height: "408px", top: "100px" }}
            >
                <div className="modal-content p-3 text-center">
                    <div className="modal-header" style={{ border: "none" }}>
                        <h5
                            className="modal-title"
                            id="exampleModalLabel"
                            style={{ fontWeight: "700", fontSize: "36px" }}
                        >
                            Sign Up
                        </h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group mb-4">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="fullName"
                                    value={fullName}
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Fullname"
                                />
                            </div>
                            <select
                                onChange={(e) => handleChange(e)}
                                name="gender"
                                defaultValue={"DEFAULT"}
                                className="custom-select custom-select-lg mb-4 bg-light"
                            >
                                <option value="DEFAULT" disabled>
                                    Gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <div className="form-group mb-4">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="phone"
                                    name="phone"
                                    value={phone}
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="form-group mb-5">
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="address"
                                    value={address}
                                    className="form-control form-control-lg bg-light"
                                    placeholder="Address"
                                />
                            </div>

                            <button
                                onClick={(e) => {
                                    // handleSubmit(e);
                                }}
                                data-dismiss="modal"
                                className="btn btn-lg btn-block btn-dark mb-3"
                                style={{
                                    background: "#EE4622",
                                    border: "none",
                                }}
                            >
                                Sign Up
                            </button>

                            <small
                                id="emailHelp"
                                className="form-text pt-2"
                                style={{
                                    fontSize: "16px",
                                }}
                            >
                                Already have an account ? Click{" "}
                                <strong>here</strong>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
