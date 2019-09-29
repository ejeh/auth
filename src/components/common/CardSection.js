//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       borderBottomWidth: 1,
       padding: 5,
       backgroundColor:"#fff",
       justifyContent: "flex-start",
       flexDirection: "row",
       borderColor: "#ddd",
       position:"relative"
    },
});

//make this component available to the app
export {CardSection};
