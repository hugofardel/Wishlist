import useAuth from "../hooks/useAuth.tsx";

const Account = () => {

    const { user } = useAuth()

    return (
        <div className="box">
            <h2>{user?.username}</h2>
            <p>Code de partage: {user?.share_code}</p>
        </div>
    );
};

export default Account;