import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Header from './Header';

class About extends Component {
    constructor() {
        super();

        this.navigate = this.navigate.bind(this);
    }

    navigate(name) {
        this.props.navigator.push({
            name
        });
    }


    render() {
        return (
            <View style={styles.mainPageStyle}>
                <Header />
                <View style={styles.JokeView}>
                    <View style={styles.buttonView}>  
                        <TouchableHighlight style={styles.routingButton} onPress={() => this.navigate('homePage')}>
                            <Text style={styles.buttonText}>Go to Home Page</Text>
                        </TouchableHighlight>
                    </View>     
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
