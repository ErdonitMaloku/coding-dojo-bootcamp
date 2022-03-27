import React, {useState} from "react"

const UserForm = (props) =>
    {   const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const createUser = (e) =>{
            e.preventDefalt();

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }

        return (
            <div> 
                <form onSubmit={createUser}>
                    <div class="field">
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={ (e)  => setFirstName(e.target.value)} />
                        
                    </div>
                    <div  class="field">
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}  />
                    </div>
                    <div  class="field">
                        <label>Email:</label>
                        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                    <div  class="field">
                        <label>Password:</label>
                        <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                    <div  class="field">
                        <label>ConfirmPassword:</label>
                        <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    </div>
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