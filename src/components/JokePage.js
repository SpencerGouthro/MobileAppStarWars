import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import Header from './Header';
import Joke from './Joke';

class JokePage extends Component {

    constructor() {
        super();
        this.state = { jokes: [] };
        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:1234/jokes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json().then(json => {
                this.setState({ jokes: json.message });
            });
        });
    }

    generateJokes() {
        return this.state.jokes.map(theJoke => 
            <Joke key={theJoke._id} jokelead={theJoke.jokelead} punchline={theJoke.punchline} />                   
        );
    }

    navigate(name) {
        this.props.navigator.push({
            name
        });
    }

    render() {
        return (
            <View>
                <Header />
                <View style={styles.jokePageView}>
                    <View style={styles.headerButtonsView}>  
                        <TouchableHighlight style={styles.addNewJokeButton} onPress={() => this.navigate('inputJokePage')}>   
                            <Text style={styles.buttonText}>Add new joke.</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.routingButton} onPress={() => this.navigate('homePage')}>   
                            <Text style={styles.buttonText}>Return to Homepage</Text>
                        </TouchableHighlight>
                    </View> 
                    <View style={styles.listOfAllJokesView}>
                        <View style={styles.viewOfIndividualJokeAndButton}>
                            <ScrollView style={styles.viewOfGenerateJokesFunction}>
                                {this.generateJokes()}
                            </ScrollView>            
                        </View>
                        
                    </View>  
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jokePageView: {
        backgroundColor: '#121212',
    }, 
    viewOfIndividualJokeAndButton: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'yellow',
        justifyContent: 'space-between',
    },
    viewOfGenerateJokesFunction: {
        flexDirection: 'column',
    },
    deleteJokeBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerButtonsView: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        textShadowColor: 'black',
        textShadowOffset: ({ width: 1, height: 1 }),
    },
    addNewJokeButton: {
        height: 38,
        width: 170,
        backgroundColor: '#199502',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
    },
    routingButton: {
        height: 38,
        width: 170,
        backgroundColor: '#3d54ca',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
    },
    deleteJokeButton: {
        alignItems: 'center',
        height: 25,
        width: 25,
        backgroundColor: '#9f0300',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',  
    }
});

export default JokePage;
