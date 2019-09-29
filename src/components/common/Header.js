//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Header = (props) => {
    const { textStyle, container } = styles
    return (
        <View style={container}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f8f8f8",
        justifyContent: "center",
        alignItems:"center",
        height: 60, 
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"


    },
    textStyle:{
        fontSize: 20
      }
});

//make this component available to the app
export { Header };
