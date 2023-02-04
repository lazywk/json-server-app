import React from "react";
import { useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {

    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const emailValue = useRef();
    const passwordValue = useRef();
    const firstNameVal = useRef();
    const lastNameVal = useRef();

    const loginSubmit = (evt) => {
        evt.preventDefault();

        axios.post('http://localhost:8080/users', {
            first_name: firstNameVal.current.value,
            last_name: lastNameVal.current.value,
            email: emailValue.current.value,
            password: passwordValue.current.value,
        })
            .then(data => {
                if(data.status == 201) {
                    setToken(data.data.accessToken);
                    setUser(data.data.user);
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }


    return <div className="w-50 mx-auto my-5 p-5 shadow">
        <h2 className="h1 text-center">Register</h2>
        <form onSubmit={loginSubmit}>
            <input ref={firstNameVal} className="form-control mb-3" type="text" placeholder="Firstname" />
            <input ref={lastNameVal} className="form-control mb-3" type="text" placeholder="Lastname" />
            <input ref={emailValue} className="form-control mb-3" type="email" placeholder="Email" />
            <input ref={passwordValue} className="form-control mb-3" type="password" placeholder="Password" />
            <button className="btn btn-primary d-block ms-auto w-100" type="submit">Register</button>
        </form>
    </div>;
}