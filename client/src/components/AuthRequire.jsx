import React from 'react';
import {useLocation, Navigate, Outlet} from "react-router";
import App from "../App";
import Users from "../pages/Users";

const AuthRequire = () => {
    const token = localStorage.getItem('token')
    const location = useLocation()
    console.log(token)
    return (
        token ?
            <Outlet/>
            :
            <Navigate to="/login" state={{from: location}} replace/>
    );
};

export default AuthRequire;