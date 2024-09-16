import { createContext, useState } from "react";
import { User } from "../types/user.ts";
import { useNavigate } from "react-router-dom";

interface ContextInterface {
    user: User | null;
    login: (username: string) => void;
    logout: () => void;
}

const defaultContext: ContextInterface = {
    user: null,
    login: () => { },
    logout: () => { }
};

const AuthContext = createContext<ContextInterface>(defaultContext);


interface propsAuthProvider {
    children: JSX.Element
}

const AuthProvider = ({ children }: propsAuthProvider) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate()


    function login(username: string) {
        setUser({ id: "1", username: username, share_code: "#GAR45" })
        navigate("/")
    }

    function logout() {
        setUser(null);
        navigate("/login");
    }


    return (
        <AuthContext.Provider value={{
            login, logout, user
        }}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };