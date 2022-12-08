import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, Catalog } from "../../ui";
import { SearchBar } from "../../ui/common_ui/SearchBar.jsx";

const Landing = ({ children }) => {
    return (
        <div className="w-full h-screen">
            <Header/>
            <SearchBar/>
            <section className="w-full flex flex-row flex-wrap">
                <Catalog/>
                <main className="w-[85%]">
                    {children}
                </main>
            </section>
            <Footer/>
        </div>
    );
};

export default Landing;

Landing.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
