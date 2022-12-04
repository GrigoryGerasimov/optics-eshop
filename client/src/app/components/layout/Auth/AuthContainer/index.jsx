import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../index.module.scss";

const AuthContainer = () => {
    return (
        <div className={styles.auth_container}>
            <Outlet/>
        </div>
    );
};

export default AuthContainer;
