import React from 'react';
import { View } from 'react-native';

const JokeSection = (props) => {
    return (
        <View>
            {props.children}
        </View>
    );
};

export default JokeSection;
