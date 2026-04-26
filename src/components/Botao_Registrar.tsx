import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export const BtnRegistrar = () => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>
            Registrar
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 261,
        height: 51,
        justifyContent: 'center',
        alignItems:'center',
        top: 175

    },

    texto: {
        color: "#ffffff",
        justifyContent: 'center',
        alignContent: 'center' 
    }
})