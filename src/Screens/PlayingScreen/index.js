import React from 'react';
import {View, Image, Text} from 'react-native';

const PlayingScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Salut</Text>
            <Image
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}

export default PlayingScreen;