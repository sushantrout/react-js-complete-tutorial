import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ContextExampleTest = () => {
    let contxt = useContext(ThemeContext);
    console.log(contxt)
}

export default ContextExampleTest;