import React, {useState} from "react";

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    {
            return (
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                    </div>

                    <button type="button" className="btn btn-primary btn-block" onClick={e => onSubmit({email, password})} >Submit</button>

                </form>
        );
    }

}
export default LoginForm;