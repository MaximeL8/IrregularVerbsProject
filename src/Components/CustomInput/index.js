import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.LogInInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
    />
  )
}

export default CustomInput