import React, { useState } from "react"

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirsName = (e) => {
        setFirstName(e.target.value)

        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 character")
        } else {
            setFirstNameError("");
        }
    }


    const handleLastName = (e) => {
        setLastName(e.target.value)

        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 character")
        } else {
            setLastNameError("");
        }
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)

        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 character")
        } else {
            setEmailError("");
        }
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 character")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)

        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must macht")
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form>
                <div className="field">
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={handleFirsName} />
                </div>
                {firstNameError ? <p className="error">{firstNameError}</p> : ''}

                <div className="field">
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                </div>
                {lastNameError ? <p className="error">{lastNameError}</p> : ''}

                <div className="field">
                    <label>Email:</label>
                    <input type="text" value={email} onChange={handleEmail} />
                </div>
                {emailError ? <p className="error">{emailError}</p> : ''}

                <div className="field">
                    <label>Password:</label>
                    <input type="text" value={password} onChange={handlePassword} />
                </div>
                {passwordError ? <p className="error">{passwordError}</p> : ''}

                <div className="field">
                    <label>ConfirmPassword:</label>
                    <input type="text" value={confirmPassword} onChange={handleConfirmPassword} />
                </div>
                {confirmPasswordError ? <p className="error">{confirmPasswordError}</p> : ''}
            </form>
            <div>
                <h3>Your Form Deta</h3>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {password}</h4>
                <h4>ConfirmPassword: {confirmPassword}</h4>
            </div>
        </div>
    );
};

export default UserForm