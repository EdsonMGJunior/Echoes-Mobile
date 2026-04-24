import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const BtnTurmas = () => {
    return (
        <TouchableOpacity style={styles.Button_Turmas}>
            <Text style={{textAlign: 'center'}}>
                Testando
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button_Turmas: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 130,
        height: 100,
        left: 5,
        top: 100
    }
})