import { FormEvent, useState } from "react";
import useAuth from "../hooks/useAuth.tsx";

import "../styles/login.css"


const USERNAME: string = "toto"
const PASSWORD: string = "toto"


const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { login } = useAuth()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (username === USERNAME && password === PASSWORD) {
            login(username)
        }
    }

    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
};

export default Login;