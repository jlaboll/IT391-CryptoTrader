import React, {Component} from 'react';
import  {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator
} from 'react-native';
import {findByLogin} from "../services/User_Service"


export default class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            uname: this.state.username,
            passwd: this.state.password
        };

        var proceed = false;
        findByLogin(params.uname, params.passwd)
            .then((response) => response.json())
            .then((response) => {
                if (response.status==200) proceed = true;
                else this.setState({ message: response.message });
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) this.props.onLoginPress();
            })
            .catch(err => {
                this.setState({ message: err.message });
                this.setState({ isLoggingIn: false })
            });
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput
                    ref={component => this._username = component}
                    placeholder='Username'
                    onChangeText={(username) => this.setState({username})}
                    autoFocus={true}
                    onFocus={this.clearUsername}
                />
                <TextInput
                    ref={component => this._password = component}
                    placeholder='Password'
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    onFocus={this.clearPassword}
                    onSubmitEditing={this._userLogin}
                />
                {!!this.state.message && (
                    <Text
                        style={{fontSize: 14, color: 'red', padding: 5}}>
                        {this.state.message}
                    </Text>
                )}
                {this.state.isLoggingIn && <ActivityIndicator />}
                <View style={{margin:7}} />
                <Button
                    disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                    onPress={this._userLogin}
                    title="Submit"
                />
            </ScrollView>
        )
    }
}