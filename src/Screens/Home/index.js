import { View, Text, Alert, ToastAndroid } from 'react-native';
import CustomButton from '../../Components/CustomButton';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();
    const username = route?.params?.username;

    const signOut = async () => {
        try {
            await Auth.signOut();
            ToastAndroid.show('Sign out successfully', 2000);
        } catch (e) {
            Alert.alert('Cannot sign out : ', e.message);
        }
    }

    const playingPressed = () => {
        navigation.navigate('Playing');
    }
    
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Your username : {username}</Text>
            <CustomButton textValue='Sign out' onPress={signOut} />
            <CustomButton textValue='Playing Screen' onPress={playingPressed} />

        </View>
    )
}