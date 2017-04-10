import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Joke from './JokePage';

class JokesList extends Component {

    state = { jokes: [] }

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
            <Joke key={theJoke._id} joke={theJoke} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.generateJokes()}
            </ScrollView>
        );
    }
}

export default JokesList;
