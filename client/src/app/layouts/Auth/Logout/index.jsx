import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice.js";
import paths from "../../../routes/paths.js";
import Loader from "../../../components/common/Loader.jsx";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { AUTH_LOGIN } = paths;

    useEffect(() => {
        dispatch(logout());
        navigate(AUTH_LOGIN);
    }, []);

    return (
        <div className="w-[inherit] flex justify-center">
            <Loader/>
        </div>
    );
};

export default Logout;
