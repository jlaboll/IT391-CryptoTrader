import React from 'react';
import {SignUpDiv} from "../Styles";
import Button from '@bit/nexxtway.react-rainbow.button';

const css = { margin: 5, background:'#CCB114', color: '#284B63'}

export default class SignUp extends React.Component{

    render() {
        return (
            <SignUpDiv className={'signup'}>
                <h1>Sign Up!</h1>
                <h3>Start Trading Today!</h3>
                 <Button
                    style={css}
                    shaded
                    label="Click Here!"
                    onClick={event => window.location.href='/signup'}
                    variant="brand" />
            </SignUpDiv>
        );
    }
}


