//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        alignSelf:"center",
        color:"#007aff",
        fontSize: 16,
        fontWeight:"600",
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: "stretch",
        borderColor: "#fff",
        borderWidth: 1,
        borderColor: "#007aff",
        marginRight: 5,
        marginLeft: 5
    }
});

//make this component available to the app
export { Button };
