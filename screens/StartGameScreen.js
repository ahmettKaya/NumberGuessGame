import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
    return (
        <View style={[styles.mainContainer, styles.shadowEffect]}>
            <TextInput placeholder='Hello'/>
            <View style={styles.buttonContainer}>
                <PrimaryButton text={'Reset'}/>
                <PrimaryButton text={'Confirm'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 200,
        marginHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#7a7bb8'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
	shadowEffect: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10
	}
});