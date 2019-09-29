//import liraries
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size || "large"}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
});

//make this component available to the app
export {Spinner};
