import React from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../../pages/Posts/Posts";
import { PrivateHeader } from "../../pages/Private/PrivateHeader/PrivateHeader";
import { PrivateHome } from "../../pages/Private/PrivateHome/PrivateHome";
import { Users } from "../../pages/Users/Users";

export const Private = () => {
    return (
        <div>
            <PrivateHeader/>
            <div className="container">
                <Routes>
                    <Route index path="/" element={<PrivateHome/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="*" element={<h1 className="h1 text-center my-5">Page Not Found</h1>}/>
                </Routes>
            </div>
        </div>
    )
}