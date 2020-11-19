import React from "react";
import {LoginContainer} from "../resources/Styles";
import LoginForm from "../components/LoginForm";


export class Login extends React.Component {
    render() {
        return (
            <LoginContainer>
                <LoginForm/>
            </LoginContainer>
        );
    }
}

