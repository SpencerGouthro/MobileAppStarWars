import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Joke = (props) => {
    return (
        <View style={styles.containerOfJokeAndDeleteJokeButton}>
            <View style={styles.ViewOfJokeText}>
                <Text style={styles.jokeTextJokelead}>{props.jokelead}</Text>
                <Text style={styles.jokeTextPunchline}>{props.punchline}</Text>
            </View>
            {/*<View style={styles.ViewOfDeleteJokeBtn}>
                <TouchableHighlight style={styles.deleteJokeButton}>   
                    <Text style={styles.buttonText}>X</Text>
                </TouchableHighlight> 
            </View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    containerOfJokeAndDeleteJokeButton: {
        borderTopWidth: 1,
        borderColor: 'yellow',
        flexDirection: 'row'
    },
    ViewOfJokeText: {
        flex: 8
    },
    ViewOfDeleteJokeBtn: {
        flex: 1,
        justifyContent: 'center'
    },

   jokeTextJokelead: {
        color: 'yellow',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 10
    },
    jokeTextPunchline: {
        color: 'yellow',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    deleteJokeButton: {
        alignItems: 'center',
        height: 25,
        width: 25,
        backgroundColor: '#b30205',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
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

export default Joke;



/*

Code I had before in JokePage.js to generate all the jokes.
<Joke>
    <View style={styles.joke}>
        <Text style={styles.jokeText}>{this.props.joke.jokelead}</Text>
        <Text style={styles.jokeText}>{this.props.joke.punchline}</Text>
    </View>
</Joke> 

*/
