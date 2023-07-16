import {useRef} from "react";

import Form from "../../../components/form/form/form";
import Input from "../../../components/form/input/input";
import Button from "../../../components/button/button";

import './signIn.scss'

const SignIn = () => {
    const emailRef = useRef();
    return (
        <div className="container">
            <div className="signIn">
                <a href="" className="signIn-backHome">Back to home</a>
                <h2 className="signIn-title">Sign In</h2>
                <Form className="signIn-form">
                    <Input label="Email" placeholder="Your email" refLink={emailRef}/>
                    <Input label="Password" placeholder="Your password"/>
                    <a className="signIn-form-forgot">Forgot password?</a>
                    <Button>Sign In</Button>
                    <p className="signIn-form-registration">Don’t have an account? <a
                        className="signIn-form-registration-link">Sign Up</a></p>
                </Form>
            </div>
        </div>
    )
}
export default SignIn;