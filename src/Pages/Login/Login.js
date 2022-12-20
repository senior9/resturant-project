import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef=useRef('');
    const passRef=useRef('');
    const navigate=useNavigate();
    // Social Login System
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGoogle,user1,error1] = useSignInWithGoogle(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);


    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if(user || user1){
        return(
        navigate("/home")
        )
        
    }
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p style={{color:"red"}}>Error: {error?.message}</p>
            </div>
    }



    return (
        <div className='login-box'>
            <h1 className='text-center'> Please Login</h1>
            <Form onSubmit={handleSignIn} >
                <div id="login-box">

                    <div className="left">
                        {/* <input type="text" name="username" placeholder="Username" required /> */}
                        
                        <input ref={emailRef} type="text" name="email" placeholder="E-mail" required />
                        <input ref={passRef} type="password" name="password" placeholder="Password" required />
                        {/* <input type="password" name="password2" placeholder="Retype password" required /> */}
                        <Link className='text-decoration-none text-danger' to="/signup">New User?</Link>
                        <br />
                        <input type="submit" name="signup_submit" value="Submit" />
                        {errorElement}
                    </div>

                    <div className="right">
                        <button onClick={()=>signInWithFacebook()} className="social-signin facebook">Log in with facebook</button>
                        <button onClick={()=>signInWithTwitter()} className="social-signin twitter">Log in with Twitter</button>
                        <button onClick={()=> signInWithGoogle()} className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </Form>
        </div>
    );
};

export default Login;