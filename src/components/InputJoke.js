import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Header from './Header';


class InputJoke extends Component {
    constructor() {
        super();
        this.state = { text: '' };
        this.navigate = this.navigate.bind(this);
    }

    navigate(name) {
        this.props.navigator.push({
            name
        });
    }

    PostAJoke() {
        fetch('http://localhost:1234/jokes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jokelead: this.state.jokelead,
                punchline: this.state.punchline
            })
        }).then(response => {
                return response.json().then(json => {
                    alert('Your joke has been added.'); 
                    this.navigate('jokePage');
                });
            });
    }

    render() {
        return (
            <View>
                <Header />
                <View style={styles.jokeInputViewContainer}>
                    <View style={styles.headerButtonView}>  
                        <TouchableHighlight 
                            style={styles.routingButton} 
                            onPress={() => { this.PostAJoke(); }
                            }
                        >   
                            <Text style={styles.buttonText}>Add new joke.</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.cancelButton} onPress={() => this.navigate('homePage')}>   
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableHighlight>                    
                    </View> 
                    <View style={styles.ViewAroundTextInputs}>
                        <Text style={styles.InputJokeTextInstructions}>A joke contains a lead and a punchline.</Text>
                        <Text style={styles.InputJokeTextInstructions}>Insert your joke's lead here.</Text>
                        <TextInput 
                            style={styles.JokeleadInputField}
                            onChangeText={(jokelead) => this.setState({ jokelead })}
                            value={this.state.jokelead} 
                        />
                        <Text style={styles.InputJokeTextInstructions}>Insert your joke's punchline here. </Text>
                        <TextInput 
                            style={styles.PunchlineInputField} 
                            onChangeText={(punchline) => this.setState({ punchline })}
                            value={this.state.punchline}
                        />
                    </View>
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
        width: 170,
        backgroundColor: '#199502',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
    },
    cancelButton: {
        height: 38,
        width: 170,
        backgroundColor: '#C10000',
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
