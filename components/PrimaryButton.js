import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function PrimaryButton(props) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444585ff',
        borderRadius: 10,
        width: 150,
        margin: 5
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        padding: 25
    }
});