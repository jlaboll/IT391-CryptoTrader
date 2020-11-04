import React, {Component} from "react";
import  {
    ScrollView,
    Text,
    TextInput,
    View,
    ActivityIndicator
} from 'react-native';
import {TextBubble} from "../resources/Styles";
import Button from "@bit/nexxtway.react-rainbow.button";
import {createUser} from "../services/User_Service";

const css = { margin: 5, background:'#CCB114', color: '#284B63'}

export default class SignUp extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        username: '',
        password: '',
        passwd_check: '',
        isSigningUp: false,
        message: ''
    }

    _userSignUp = () => {

        this.setState({ isSigningUp: true, message: '' });

        var params = {
            fname: this.state.fname,
            lname: this.state.lname,
            uname: this.state.username,
            email: this.state.email,
            psswd: this.state.password
        };
        if(!this.state.password === this.state.passwd_check){
            this.setState({ message: 'Passwords do not match!' });
        }
        else{
            var proceed = false;
            createUser(params)
                .then((response) => response)
                .then((response) => {
                    if (response.status===200) proceed = true;
                    else this.setState({ message: response.status.message });
                })
                .then(() => {
                    this.setState({ isSigningUp: false })
                    if (proceed) this.props.onSignUp();
                })
                .catch(err => {
                    this.setState({ message: err.message });
                    this.setState({ isSigningUp: false })
                });
        }
    }

    clearFirstName = () => {
        this._fname.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearLastName = () => {
        this._lname.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearUsername = () => {
        this._uname.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearEmail = () => {
        this._email.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._psswd.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassCheck = () => {
        this._psswd_check.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView>
                <TextBubble>
                    Sign Up
                </TextBubble>
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._fname = component}
                    placeholder='First Name'
                    onChangeText={(fname) => this.setState({fname})}
                    autoFocus={true}
                    onFocus={this.clearFirstName}
                />
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._lname = component}
                    placeholder='Last Name'
                    onChangeText={(lname) => this.setState({lname})}
                    autoFocus={true}
                    onFocus={this.clearLastName}
                />
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._uname = component}
                    placeholder='Username'
                    onChangeText={(uname) => this.setState({uname})}
                    autoFocus={true}
                    onFocus={this.clearUsername}
                />
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._email = component}
                    placeholder='Email (optional)'
                    onChangeText={(email) => this.setState({email})}
                    autoFocus={true}
                    onFocus={this.clearEmail}
                />
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._psswd = component}
                    placeholder='Password'
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    onFocus={this.clearPassword}
                />
                <View style={{margin:5}} />
                <TextInput
                    style={{padding:'4px', background: '#94d6d6'}}
                    ref={component => this._psswd_check = component}
                    placeholder='Confirm Password'
                    onChangeText={(passwrd_check) => this.setState({passwrd_check})}
                    secureTextEntry={true}
                    onFocus={this.clearPassCheck}
                    onSubmitEditing={this._userLogin}
                />
                {!!this.state.message && (
                    <Text
                        style={{fontSize: 15, color: 'red', padding: 5}}>
                        {this.state.message}
                    </Text>
                )}
                {this.state.isLoggingIn && <ActivityIndicator />}
                <View style={{margin:5}} />
                <Button
                    style={css}
                    shaded
                    label="Submit"
                    onClick={this._userSignUp}
                    variant="brand" />
            </ScrollView>
        )
    }
}