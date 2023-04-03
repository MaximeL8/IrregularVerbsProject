import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#FAF5E9',
        height: '100%',
        width: '100%',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    TitleContainer :{
        display: 'flex',
        height: '30%',
        width: '80%',
        backgroundColor: '#FAF5E9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    TitleText: {
        color: 'black',
        fontSize: 45,
        textAlign: 'center'
    },
    TitleButton: {
        color: 'white',
        fontSize: 20
    },
    ButtonContainer: {
        backgroundColor: "#00DD00",
        height: "10%",
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "green",
       
    }
})

export { styles }