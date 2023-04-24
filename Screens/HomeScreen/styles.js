import { StyleSheet } from "react-native";

const backgroundcolor = "darkblue"
const secondarycolor = "#FF5C2C"

const styles = StyleSheet.create({
    Container: {
        backgroundColor: backgroundcolor,
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
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleText: {
        color: secondarycolor,
        fontSize: 45,
        textAlign: 'center'
    },
    ButtonLogIn: {
        backgroundColor: secondarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: secondarycolor,
        height: 50,
        
    },
    LogInContainer: {
        display: "flex",
        flexDirection: "column",
        height: '35%',
        width: '75%',
    },
    LogInInputContainer: {
        paddingTop: 30,
        display: "flex",
        gap: 10,
    },
    LogInInput: {
        height: 60,
        backgroundColor: "lightgrey",
        borderRadius: 20,
        paddingLeft: 20,
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
    SignUpView: {
        paddingTop: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export { styles }