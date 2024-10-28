import style from "./style.module.css";
import SwitchTheme from "../SwitchTheme";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={style.container}>
            <Link className={style.link} to="/-18.-React-/beans">Beans</Link>
            <Link className={style.link} to="/-18.-React-/facts">Facts</Link>
            <Link className={style.link} to="/-18.-React-/recipes">Recipes</Link>
            <Link className={style.link} to="/-18.-React-/combinations">Combinations</Link>
            <Link className={style.link} to="/-18.-React-/history">History</Link>
            <SwitchTheme />
        </nav>
    );
};

export default Nav;

