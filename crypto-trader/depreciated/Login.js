import React from "react";
import {LoginContainer} from "../src/resources/Styles";
import LoginForm from "../src/_components/LoginForm";


export class Login extends React.Component {
    render() {
        return (
            <LoginContainer>
                <LoginForm/>
            </LoginContainer>
        );
    }
}

