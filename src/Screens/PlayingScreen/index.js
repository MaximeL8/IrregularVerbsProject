import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const PlayingScreen = () => {
    return(
        <View>
            <Text>Salut</Text>
            <Image
                source={{
                    uri: 'https://imgr.cineserie.com/2020/12/cars-une-serie-en-developpement-derivee-des-films-cultes.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
                }}
            />
        </View>
    )
}

export default PlayingScreen;