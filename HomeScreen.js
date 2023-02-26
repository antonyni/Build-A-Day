import { View, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
const styles = StyleSheet.create({
    loginButtonSection: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
function disp({navigation}){
    <View style={styles.loginButtonSection}>
                <Button
                    title="title"
                    onPress={() =>
                        navigation.navigate('Profile', { name: 'Jane' })
                    }
                />
            </View>
            
    
}
export default function HomeScreen({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={()=>disp({navigation})}>
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