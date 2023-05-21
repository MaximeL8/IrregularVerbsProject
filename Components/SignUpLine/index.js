import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const SignUpLine = ({onPress}) => {
  return (
    <View style={styles.SignUpView}>
        <Text style={{color: '#D5D4D5'}}>Don't have an account?</Text>
        <TouchableOpacity onPress={onPress}>
        <Text style={{color: '#FF5C2C', fontWeight: 'bold'}}> Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUpLine
