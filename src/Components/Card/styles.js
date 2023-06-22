import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/colors";

const styles = StyleSheet.create({
    cardContainer: {
        width: '80%',
        height: '70%',
        backgroundColor: Colors.backgroundcolor,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        
        elevation: 20, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 10 }, // Shadow offset
        shadowOpacity: 0.99, // Shadow opacity
        shadowRadius: 10, // Shadow blur radius
    },
    textStyle: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
})

export {styles}