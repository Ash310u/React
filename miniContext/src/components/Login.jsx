import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div >
            <h2 className="text-center text-3xl ">Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 m-2 text-black"/>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 m-2 text-black"/>
            <button onClick={handleSubmit} className="bg-gray-400 p-2 rounded-xl">Submit</button>
        </div>
    )
}

export default Login