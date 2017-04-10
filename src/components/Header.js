import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.headerContent}>
                <Text style={styles.headerText2}>Spencer's React-Native</Text>
                <Image style={styles.logoStyle} source={require('../../img/starswithlogo.png')} />
                <Text style={styles.headerText}>Mobile App!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContent: {
        backgroundColor: '#121212',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, 
        borderBottomWidth: 3,
        borderColor: 'yellow'
    },
    logoStyle: {
        width: 240,
        height: 90
    },
    headerText: {
        alignItems: 'center',
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5
    },
    headerText2: {
        alignItems: 'center',
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5    
    }
});

export default Header;
