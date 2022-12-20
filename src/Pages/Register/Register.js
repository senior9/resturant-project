import React from 'react';
import Form from 'react-bootstrap/esm/Form';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const [signInWithGoogle,user1,error1] = useSignInWithGoogle(auth);

    const handleSubmitForm = async (event) => {
        console.log("Hello");
        event.preventDefault();
        const userName = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const password2 = event.target.password2.value;
        await createUserWithEmailAndPassword(email, password, password2, userName,);
       
    }
    if(user || user1){
        return(
            navigate("/home")
            );
        
    }
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p style={{color:"red"}}>Error: {error.message}</p>
            </div>
    }
    if (user) {
        console.log(user);
    }


    return (
        <div className='login-box' onSubmit={handleSubmitForm}>
            <h1 className='text-center'>Welcome to Belly Food </h1>
            <Form onSubmit={handleSubmitForm}>
                <div id="login-box" >
                    <div className="left">

                        <input type="text" name="username" placeholder="Username" required />
                        <input type="text" name="email" placeholder="E-mail" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="password" name="password2" placeholder="Retype password" required />
                        <Link className='text-decoration-none text-danger' to="/login">Already User?</Link>
                        <br />
                        <input type="submit" name="signup_submit" defaultValue="Signup" />
                        {errorElement}
                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>

                        <button  className="social-signin facebook">Log in with facebook</button>
                        <button  className="social-signin twitter">Log in with Twitter</button>
                        <button onClick={()=> signInWithGoogle()}  className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or-register">OR</div>
                </div>
            </Form>
        </div>
    );
};

export default Register;