import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Header from './Header';


class InputJoke extends Component {
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
            <View style={styles.jokeInputViewContainer}>
                <Header />
                    <View style={styles.headerButtonView}>  
                        <TouchableHighlight style={styles.routingButton} onPress={() => this.navigate('jokePage')}>   
                            <Text style={styles.buttonText}>Confirm to add new joke.</Text>
                        </TouchableHighlight>
                    </View> 
                    <View style={styles.ViewAroundTextInputs}>
                        <Text style={styles.InputJokeTextInstructions}>A joke contains a lead and a punchline.</Text>
                        <Text style={styles.InputJokeTextInstructions}>Insert your joke's lead here.</Text>
                        <TextInput style={styles.JokeleadInputField} />
                        <Text style={styles.InputJokeTextInstructions}>Insert your joke's punchline here.</Text>
                        <TextInput style={styles.PunchlineInputField} />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jokeInputViewContainer: {
        backgroundColor: '#121212',
    }, 

    ViewAroundTextInputs: {
        padding: 10,
    },
    JokeleadInputField: {
        backgroundColor: 'white',
        height: 40,
    },    
    PunchlineInputField: {
        backgroundColor: 'white',
        height: 40,
    },
    InputJokeTextInstructions: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 5
    },

    headerButtonView: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    routingButton: {
        height: 38,
        width: 200,
        backgroundColor: '#199502',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        textShadowColor: 'black',
        textShadowOffset: ({ width: 1, height: 1 }),        
    },
});

export default InputJoke;
