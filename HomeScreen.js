import { View, Button,StyleSheet} from 'react-native';
export default function HomeScreen({ navigation }) {
    const styles = StyleSheet.create({
        loginButtonSection: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
         }
        })
    return (
        <View style = {styles.loginButtonSection}>
            <Button style={styles.loginButtonSection}
                title="Go to Jabe'sn profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </View>
    );
}