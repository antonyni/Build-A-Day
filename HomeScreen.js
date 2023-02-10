import { View, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
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
        <TouchableWithoutFeedback  onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
        }>
            <View style={styles.loginButtonSection}>
                <Button
                    title="Go to Jabe'sn profile"
                    onPress={() =>
                        navigation.navigate('Profile', { name: 'Jane' })
                    }
                />
            </View>
        </TouchableWithoutFeedback>
    );
}