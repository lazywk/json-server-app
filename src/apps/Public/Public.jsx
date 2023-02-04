import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { PublicHeader } from "../../pages/Public/PublicHeader/PublicHeader";
import { PublicHome } from "../../pages/Public/PublicHome/PublicHome";
import { Register } from "../../pages/Register/Register";

export const Public = () => {
    return (
        <div>
            <PublicHeader/>
            <Routes>
                <Route index path="/" element={<PublicHome/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<h1 className="h1 text-center my-5">Page Not Found</h1>}/>
            </Routes>
        </div>
    )
}