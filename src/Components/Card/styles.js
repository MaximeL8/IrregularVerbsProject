import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/colors";

const styles = StyleSheet.create({
    frontCard: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundcolor,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        
        elevation: 20, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 10 }, // Shadow offset
        shadowOpacity: 0.99, // Shadow opacity
        shadowRadius: 10, // Shadow blur radius
    },
    backCard: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundcolor,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        
        elevation: 20, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 10 }, // Shadow offset
        shadowOpacity: 0.99, // Shadow opacity
        shadowRadius: 10, // Shadow blur radius
    },
    textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',    
    },
    textList: {
        color: '#fff',
        opacity: 0.50,
        fontSize: 20,
    },
    verbBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export {styles}