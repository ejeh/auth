//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const Card = (props) => {
    const { container } = styles
    return (
        <View style= {container}>
        {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       borderWidth: 1,
       borderRadius: 2,
       borderColor: "#ddd",
       shadowColor: "#000",
       shadowOffset: { width: 0, height: 2},
       shadowRadius: 2,
       elevation: 1,
       marginLeft: 5,
       marginRight: 5,
       marginTop: 10

    }
})

//make this component available to the app
export { Card };
