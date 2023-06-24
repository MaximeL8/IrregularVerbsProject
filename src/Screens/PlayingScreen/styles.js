import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/colors";

const styles = StyleSheet.create({
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: 15,

    },
    safeViewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 50,
    },
    topButtons: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '80%',
    },

    modalContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 16, 
      },
      closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      listItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        maxWidth: '100%',
      },    
      listContainer: {
        flex: 1,
        maxHeight: '50%',
      },
      textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        opacity: 0.8,
        fontSize: 15,
      },
});

export {styles}