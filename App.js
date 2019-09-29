//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from "firebase" 
import { Header, Button, CardSection, Spinner} from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

// create a component
class App extends Component{
  state = { loggedIn: null }

  componentDidMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyASO70MvxSaAGKvWZcWs1C34338DL1pG9A",
        authDomain: "auth-ee3c7.firebaseapp.com",
        databaseURL: "https://auth-ee3c7.firebaseio.com",
        projectId: "auth-ee3c7",
        storageBucket: "",
        messagingSenderId: "779800859360",
        appId: "1:779800859360:web:890bc8c134a9877b89b685"
      }
    );
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({ loggedIn: true})
        } else {
          this.setState({ loggedIn: false})
        }
      })
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
        </CardSection>
      )
      case false:
        return <LoginForm/>
      default:
        return(
          <View style={{ justifyContent: "center"}}>
            <Spinner size="large"/>
          </View>
        )
    }
   
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }
})
//make this component available to the app
export default App;

