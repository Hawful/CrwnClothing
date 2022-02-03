import React from "react";

import FormInput from "../form-components/FormInput";
import CustomButton from "../form-components/CustomButton"

import { auth, createUserProfileDocument } from "../../firebase/firebase-utils"

import './SignUp.scss';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="displayName" 
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required 
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="Password"
                        required 
                    />
                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignUp;