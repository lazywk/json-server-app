import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { UserContext } from "../../../context/UserContext";

export const PrivateHeader = () => {
    const { setToken } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = () => {
        setToken('');
        navigate('/');
    }
    return (
        <header className="header bg-dark py-4">
            <div className="container">
                <div className="d-flex align-items-center">
                    <Link className="fs-4 text-white text-decoration-none" to='/'>LOGO</Link>
                    <Link className="nav-link text-white ms-5" to='/posts'>Posts</Link>
                    <Link className="nav-link text-white ms-5" to='/users'>Users</Link>
                    <button onClick={logOut} className="btn btn-warning rounded-circle py-2 px-2 ms-auto" title="Account">
                        {user.first_name.at(0) + '.' + user.last_name.at(0)}
                    </button>
                </div>
            </div>
        </header>
    )
}