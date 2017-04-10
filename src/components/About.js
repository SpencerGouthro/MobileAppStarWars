import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class About extends Component {
    render() {
        return (
            <View style={styles.mainPageStyle}>
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={() => this.props.navigator.pop()}>
                        <Text>Go back to homepage.</Text>
                    </TouchableHighlight>
                </View>      
            </View>
        );
    }
}

const styles = StyleSheet.create({

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
    },
    routingButton: {
        height: 38,
        width: 140,
        backgroundColor: '#4B82D4',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
    }
});

export default About;
