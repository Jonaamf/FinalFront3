import { createContext } from "react";

export const themes = {
    light: {
        font:"black",
        background: "white"
    },
    dark: {
        font: "white",
        background: "black"
    }
};

const themeContext = createContext(themes.light);

export default themeContext;