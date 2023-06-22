import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Card from '../../Components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../assets/colors';

const PlayingScreen = () => {
    


    return(
        <LinearGradient
            colors={[Colors.gradient.bottomLeft, Colors.gradient.topRight]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Card englishVerb="To buy" iconVerb="shopping-cart">
                    
                </Card>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default PlayingScreen;