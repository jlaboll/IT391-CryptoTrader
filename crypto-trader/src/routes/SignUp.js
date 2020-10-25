import React from "react";
import {Form, FormControl} from "react-bootstrap";


export const SignUp = (props) => (
    <div>
        <Form>
            <FormControl type="text" placeholder="First Name" className=""/>
            <input type="text" name ="First Name"/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Last Name" className=""/>
            <input type="text" name ="Last Name"/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Email" className=""/>
            <input type="text" name ="Email"/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Username" className=""/>
            <input type="text" name ="Username"/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Password" className=""/>
            <input type="text" name ="Password"/>
        </Form>
        <Form>
            <FormControl type="text" placeholder="Confirm Password" className=""/>
            <input type="text" name ="Confirm Password"/>
        </Form>

        <button>
            Submit
        </button>

    </div>
)