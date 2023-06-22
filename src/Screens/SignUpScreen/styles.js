import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/colors";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'transparent',
        backgroundGradient: {
            colors: [Colors.gradient.bottomLeft, Colors.gradient.topRight],
            start: { x: 0, y: 1 },
            end: { x: 1, y: 0 },
            locations: [0, 1],
        },
        height: '100%',
        width: '100%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    TitleContainer :{
        display: 'flex',
        height: '30%',
        width: '80%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleText: {
        color: Colors.secondarycolor,
        fontSize: 45,
        textAlign: 'center'
    },
    
    LogInContainer: {
        display: "flex",
        flexDirection: "column",
        height: '100%',
        width: '75%',
        justifyContent: "flex-start",
        marginTop: "25%",
    },
    LogInInputContainer: {
        paddingTop: 30,
        display: "flex",
        gap: 10,
    },
    
    TitleLogIn: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    LogInButton: {
        paddingTop: 20
    },
    
})

export { styles }