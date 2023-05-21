import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const CustomButton = ({textValue, onPress}) => {
  return (
    <TouchableOpacity
        style={styles.ButtonLogIn}
        onPress={onPress}
    >
        <Text style={{color: 'white', fontWeight: 'bold'}}>{textValue}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton