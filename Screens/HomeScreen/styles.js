import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'darkblue',
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
        color: '#FF5C2C',
        fontSize: 45,
        textAlign: 'center'
    },
    ButtonLogIn: {
        backgroundColor: "#FF5C2C",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#FF5C2C",
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