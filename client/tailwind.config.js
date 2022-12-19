/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                loader: {
                    "0%": {
                        "background-color": "rgba(253, 230, 138, 0.65)",
                        rotate: "0deg"
                    },
                    "50%": {
                        "background-color": "rgba(245, 158, 11, 0.95)",
                        rotate: "90deg"
                    },
                    "100%": {
                        "background-color": "rgba(55, 65, 81, 0.85)",
                        rotate: "180deg"
                    }
                }
            },
            animation: {
                loader: "loader 2.5s infinite"
            }
        },
        listStyleType: {
            square: "square"
        }
    },
    plugins: []
};
