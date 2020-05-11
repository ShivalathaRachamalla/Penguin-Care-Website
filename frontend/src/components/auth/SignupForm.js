import React, {useState} from "react";

function SingnupForm({onSubmit}) {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
       <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" value={firstName} onChange={e => setFName(e.target.value)} placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" value={lastName} onChange= {e => setLName(e.target.value)}  placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" value={email} onChange= {e => setEmail(e.target.value)} placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange= {e => setPassword(e.target.value)} placeholder="Enter password" />
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={e => onSubmit({firstName, lastName, email, password})} >Sign Up</button>

        </form>)

    }
    export default SingnupForm;
