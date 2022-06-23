import React from 'react';
import {Route, Routes, Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from './LoginPage';

function ProtectedRoute() {
    const user = useSelector((state) => state.user.value);
    const isAuth = user.isAuth;
    
    return isAuth ? <Outlet /> : <Navigate to="/"/>
}

export default ProtectedRoute;