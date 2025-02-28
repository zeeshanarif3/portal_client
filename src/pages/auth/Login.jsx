
import React, { useState, useEffect } from 'react';
import './Login.css'; 
import logo from "../../assets/img/TpcLogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../services/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("handleLogin function called");  

        if (!email || !password) {
            toast.error("Please enter email and password.");
            return;
        }

        try {
            console.log("Calling loginUser API...");  
            const response = await loginUser({ email, password });
            console.log("Response received:", response); 

            if (!response) {
                console.error("No response from server");
                toast.error("No response from server.");
                return;
            }

            console.log("Message ID:", response?.messageID);
            console.log("Message:", response?.message);

            if (response?.messageID === 200) {
                toast.success(response.message);

                // Store token and user details
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.payload));
                console.log(response, "responseresponse");


                console.log("User details saved to localStorage");
                console.log(response.data.payload.role, "response")

                // Check user role
                if (response.data.payload.role === 0) {
                    navigate("/admindashboard"); 
                } else if (response.data.payload.role === 1) {
                    navigate("/trainerdashboard"); 
                }
            } else {
                console.error("Login failed with Message ID:", response?.messageID);
                toast.error(response?.message || "Login failed.");
            }
        } catch (err) {
            console.error("Login error:", err);

            if (err?.messageID === 404) {
                toast.error(err.message || "User not found.");
            } else if (err?.messageID === 401) {
                toast.error(err.message || "Invalid credentials.");
            } else {
                toast.error("Login failed. Please try again.");
            }
        }
    };


    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img src={logo} style={{ width: '185px' }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The TPC Team</h4>
                                        </div>

                                        <form onSubmit={handleLogin}>
                                            <p>Please login to your account</p>

                                            {/* Email Input */}
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Password Input */}
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Login Button */}
                                            <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block fa-lg mb-3"
                                                        style={{
                                                            backgroundColor: '#1E3A8A',
                                                            borderColor: '#1E3A8A',
                                                            color: 'white',
                                                            fontSize: '1.3rem',
                                                            padding: '4px 15px',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        Log in
                                                    </button>
                                                    <a className="text-muted" href="#">Forgot password?</a>
                                                </div>
                                            </div>

                                            {/* Account Registration Link */}

                                        </form>
                                    </div>
                                </div>

                                {/* Right-Side Gradient Section */}
                                <div
                                    className="col-lg-6 d-flex align-items-center"
                                    style={{
                                        background: '#1E3A8A',
                                    }}
                                >
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Commitment, Excellence, Growth</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Login;

