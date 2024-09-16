import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css"
import useAuth from "./hooks/useAuth.tsx";
import { FormEvent } from "react";

const Navbar = () => {
    const { logout, user } = useAuth()

    function handleLogout(e: FormEvent) {
        e.preventDefault()
        logout()
    }

    if (!user) {
        return null
    }

    return (
        <header>
            <Link to="/">Logo</Link>
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/account">Mon compte</NavLink></li>
                    <button type="button" onClick={handleLogout}>Se déconnecter</button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;