import React, { useContext } from "react";
import { useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const emailValue = useRef();
    const passwordValue = useRef();
    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const loginSubmit = (evt) => {
        evt.preventDefault();

        axios.post('http://localhost:8080/login', {
            email: emailValue.current.value,
            password: passwordValue.current.value,
        })
            .then(data => {
                if (data.status == 200) {
                    setToken(data.data.accessToken);
                    setUser(data.data.user);
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }


    return <div className="w-50 mx-auto my-5 p-5 shadow">
        <h2 className="h1 text-center">Login</h2>
        <form onSubmit={loginSubmit}>
            <input ref={emailValue} className="form-control mb-3" type="email" placeholder="Email" />
            <input ref={passwordValue} className="form-control mb-3" type="password" placeholder="Password" />
            <button className="btn btn-primary d-block ms-auto w-100" type="submit">login</button>
        </form>
    </div>;
}