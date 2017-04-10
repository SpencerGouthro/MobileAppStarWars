import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JokeSection from './JokeSection';

class Joke extends Component {
    render() {
        return (
            <View>
                <JokeSection>
                    <View style={styles.joke}>
                        <Text style={styles.jokeText}>{this.props.joke.jokelead}</Text>
                        <Text style={styles.jokeText}>{this.props.joke.punchline}</Text>
                    </View>
                </JokeSection>          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jokeText: {
        fontSize: 16,
        color: '#FFFF00' 
    },
    joke: {
        padding: 10,
        backgroundColor: '#121212'
    }
});

export default Joke;
