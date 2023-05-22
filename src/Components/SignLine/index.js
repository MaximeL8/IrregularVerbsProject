import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const SignLine = ({text, slogan, onPress}) => {
  return (
    <View style={styles.SignUpView}>
        <Text style={{color: '#D5D4D5'}}>{slogan}</Text>
        <TouchableOpacity onPress={onPress}>
        <Text style={{color: '#FF5C2C', fontWeight: 'bold'}}> {text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignLine
