import React from "react";
import { Link } from "react-router-dom";

export const PublicHeader = () => {
    return (
        <header className="header bg-dark py-4">
            <div className="container">
                <div className="d-flex align-items-center">
                    <Link className="fs-4 text-white text-decoration-none" to='/'>LOGO</Link>
                    <Link className="btn btn-outline-primary ms-auto" to='/login'>Sign In</Link>
                    <Link className="btn btn-outline-success ms-2" to='/register'>Sign Up</Link>
                </div>
            </div>
        </header>
    )
}