import React from "react";
import './Password.css';
import {useState} from "react";

function Password(props) {

    const [password, setPassword] = useState("");
    const confirmPassword = "LearnMoreAboutMe";
    const [unlocked, setUnlocked] = props

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            setUnlocked(false)
        } else {
            setUnlocked(true)
            console.log("pass", unlocked)
        }
    }

    return (
        <div>
            <form>
                <div className="text-input-container">
                    <label
                        htmlFor="password"
                    >
                        <h4>Password</h4>
                    </label>
                    <input 
                        value={password}
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Password;