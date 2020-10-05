import React from "react";
import {Form, FormControl} from "react-bootstrap";


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
        <button>
            Sign Up
        </button>
    </div>
)