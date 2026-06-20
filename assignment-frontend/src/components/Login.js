import { useState } from "react";
import { login } from "../services/api";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {

        try {

            const response = await login({ username, password });
            const token = response.data.token;
            localStorage.setItem("jwtToken", token);
            onLogin();

        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}> Login </button>
        </div>
    );
}

export default Login;