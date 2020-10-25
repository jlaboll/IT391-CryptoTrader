import React from "react";
import {Form, FormControl} from "react-bootstrap";
import history from './history';

export const Login = (props) => (
    <div>
        <Form>
            <FormControl type="text" placeholder="Username" className=""/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Password" className=""/>
        </Form>

        <button>
            Login
        </button>
        <button onClick={() => history.push('/Sign_up')}>
            Sign Up
        </button>
    </div>
)

