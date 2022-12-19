import React from "react";

const Loader = () => {
    return (
        <div>
            {Array.from("123", item => (
                <div
                    key={item}
                    className='inline-block w-2 h-2 m-2 rounded-sm bg-yellow-100 bg-opacity-60 animate-loader'
                ></div>
            ))}
        </div>
    );
};

export default Loader;
