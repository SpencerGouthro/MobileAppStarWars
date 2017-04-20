import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Header from './Header';
import Joke from './Joke';

class Home extends Component {
 
    constructor() {
        super();
        this.state = { jokes: [],
            currentJoke: {
                jokelead: '',
                punchline: ''
            }
     };
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
                let rand = json.message[Math.floor(Math.random() * json.message.length)];
                this.setState({ 
                    jokes: json.message,
                    currentJoke: rand
                });
            });
        });
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
                <View style={styles.homePageView}>
                    <View style={styles.headerButtonsView}>
                        <TouchableHighlight style={styles.randomJokeButton} onPress={() => this.navigate('homePage')}>
                            <Text style={styles.buttonText}>Randomize Joke</Text>
                        </TouchableHighlight>  
                        <TouchableHighlight style={styles.routingButton} onPress={() => this.navigate('jokePage')}>
                            <Text style={styles.buttonText}>See all jokes.</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.jokeView}>
                        <Joke jokelead={this.state.currentJoke.jokelead} punchline={this.state.currentJoke.punchline} />                    
                    </View>    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homePageView: {
        backgroundColor: '#121212',
    },
    jokeView: {
        padding: 15,
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
    randomJokeButton: {
        height: 38,
        width: 170,
        backgroundColor: '#C10000',
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
    }
});

export default Home;
