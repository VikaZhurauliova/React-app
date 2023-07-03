import Button from "../../../components/button/button";

import './registrationConfirmation.scss'
const RegistrationConfirmation = () => {
    return (
        <div className="container">
            <div className="registration-confirmation">
                <a href="" className="signIn-backHome">Back to home</a>
                <h2 className="signIn-title">Success</h2>
            </div>
            <div className="registration-confirmation-block">
                <div className="registration-confirmation-block-text">
                    <p>Email confirmed.</p>
                    <p>Your registration is now completed</p>
                </div>
                <Button>Go to home</Button>
            </div>
        </div>
    )
}

export default RegistrationConfirmation