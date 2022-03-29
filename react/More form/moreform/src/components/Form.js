import React, { useState } from 'react';
    
    const Form = (props) => {

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

        const createUser = (e) => {

            e.preventDefault();

            const newUser = {firstName, lastName, email, password, confirmPassword};
            console.log("Welcome", newUser);

        }
        
        const [formObj, setFormObj] = useState({
            firstName: firstName,
            lastName: lastName ,
            email: email ,
            password: password,
            confirmPassword: confirmPassword

        })

        const handleName = (e) => {
            setFirstName(e.target.value);
            if(e.target.value.length < e.target.minLength) {
                setFirstNameError("First Name must be at least "+ e.target.minLength + " characters!");
            } else {
                setFirstNameError("");
            }
        }
        const handleLastName = (e) => {
            setLastName(e.target.value);
            if(e.target.value.length < e.target.minLength) {
                setLastNameError("Last Name must be at least "+ e.target.minLength + " characters!");
            } else {
                setLastNameError("");
            }
        }
        const handleEmail = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < e.target.minLength) {
                setEmailError("Email must be at least "+ e.target.minLength + " characters!");
            } else {
                setEmailError("");
            }
        }
        const handlePassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < e.target.minLength) {
                setPasswordError("Password must be at least "+ e.target.minLength + " characters!");
            } else {
                setPasswordError("");
            }
        }
        const handleConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            
            if(e.target.value.length < e.target.minLength) {
                setConfirmPasswordError("Password must be at least "+ e.target.minLength + " characters!");
            }
            else if (e.target.value !== password) {
                setConfirmPasswordError("Password must match");
            } else {
                setConfirmPasswordError("");
            }
        }
        const submit = ()=> {
            if(!firstName || !lastName || !email || !password || !confirmPassword){
                setFormObj({
                    firstName: ' ',
                    lastName: ' ',
                    email: ' ',
                    password: ' ',
                    confirmPassword: ' '
                });
            }
            else{
                setFormObj({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                });
            }
                                    
        }
            

        


    return (
    <div>
        <form onSubmit={createUser}>
            <div class="form-input">
                <label>First Name </label>
                <input type="text" value={firstName} minLength="2" onChange={ handleName } />
            </div>
                {
                    firstNameError ?
                    <p>{firstNameError}</p> :
                    ''
                }
            <div class="form-input">
                <label>Last Name </label>
                <input type="text" value={lastName} minLength="2" onChange={ handleLastName } />
            </div>
            {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ''
            }
            <div class="form-input">
                <label>Email </label>
                <input type="email" value={email} minLength="5" onChange={ handleEmail } />
            </div>
            {
                    emailError ?
                    <p>{emailError}</p> :
                    ''
            }
            <div class="form-input">
                <label>Password </label>
                <input type="password" value={password} minLength="8" onChange={ handlePassword } />
            </div>
            {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ''
            }
            {
                    confirmPasswordError  ?
                    <p>{confirmPasswordError}</p> :
                    ''
            }
            
            <div class="form-input">
                <label>Confirm Password </label>
                <input type="password" value={confirmPassword} minLength="8" onChange={ handleConfirmPassword } />
            </div>
            
            {
                firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                <input type="submit" class="form-btn" value="Submit" onClick={submit} disabled /> :
                <input type="submit" class="form-btn" value="Submit" onClick={submit} />
            }
            
            
            
        </form>
        <div class="data">
            <p id="title">Your Form Data</p>
            <p>
                First Name: {formObj.firstName}
            </p>
            <p>
                Last Name: {formObj.lastName}
            </p>
            <p>
                Email: {formObj.email}
            </p>
            <p>
                Password: {formObj.password}
            </p>
            <p>
                Confirm Password: {formObj.confirmPassword}
            </p>
        </div>

    </div> 
        )

    }

    export default Form;