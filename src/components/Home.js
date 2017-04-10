import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Header from './Header';

class Home extends Component {
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
                <TouchableHighlight onPress={() => this.navigate('aboutPage')}>
                    <Text>Go to About Page</Text>
                </TouchableHighlight>

{/*
                <View style={styles.JokeView}>
                    <View style={styles.buttonView}>
                        <TouchableHighlight style={styles.jokeButton} underlayColor='firebrick'>
                            <Text style={styles.buttonText}>Randomize Joke</Text>
                        </TouchableHighlight>  
                        <TouchableHighlight style={styles.routingButton} underlayColor='lime'>
                            <Text style={styles.buttonText}>See all jokes.</Text>
                        </TouchableHighlight> 
                    </View>
                    <Text style={styles.jokeViewText}>Joke Lead</Text>      
                    <Text style={styles.jokeViewText}>Joke Punchline</Text>      
                </View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainPageStyle: {
    },
    JokeView: {
        backgroundColor: '#121212',
        padding: 20,
        borderBottomWidth: 3,
        borderColor: 'yellow',
    },
    buttonView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around'
    },
    jokeViewText: {
        alignSelf: 'center',
        color: 'yellow',
        fontSize: 15,
        fontWeight: 'bold',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
    },
    jokeButton: {
        height: 38,
        width: 140,
        backgroundColor: '#C10000',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
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

export default Home;
