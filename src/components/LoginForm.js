//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, InputField, Spinner} from "./common";
// create a component
class LoginForm extends Component {
    state={
        email: '',
        password: '',
        error: "",
        loading: false
    }

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState({ error:"", loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail)
        });
    }

    onLoginFail = () => {
        this.setState({ error: 'Authentication Failed', loading: false})
    }

    onLoginSuccess = () => {
        this.setState({
            email:"",
            password:"",
            loading: false,
            error: ""
        })
    }

    renderButton() {
        if( this.state.loading){
        return <Spinner size="small"/>
       } 
        return(
         <Button onPress={this.onButtonPress}>
            Log in
         </Button>
        )
           
    }

    render() {
        const { email, password, error } = this.state
        return (
            <Card>
                <CardSection>
                    <InputField
                     placeholder="user@gmail.com"
                     label="Email"
                     value={ email }
                     onChangeText = {email => this.setState({email})}
                      />
                </CardSection>

                <CardSection>
                <InputField
                     secureTextEntry
                     placeholder="password"
                     label="Password"
                     value={ password }
                     onChangeText = {text => this.setState({password: text})}
                      />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
})

//make this component available to the app
export default LoginForm;
