import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "../../ui";
import styles from "./index.module.scss";

const Landing = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.container_main}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Landing;

Landing.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
