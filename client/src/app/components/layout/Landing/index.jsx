import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "../../ui";

const Landing = ({ children }) => {
    return (
        <div className="w-full h-screen">
            <Header/>
            <main>
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
