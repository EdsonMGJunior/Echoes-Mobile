import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

export const Input_Nome = () => {

    return (
        <TextInput style={styles_Nome.input_nome}
        placeholder="Nome do Aluno"
        placeholderTextColor='#ffffff'>
        </TextInput>
    );
}


export const Input_Email = () => {

    return (

        <TextInput style={styles_Email.input_email}
        placeholder='Email'
        placeholderTextColor='#ffffff'>
        </TextInput>
    )
}

export const Input_Senha = () => {

    return (

        <TextInput style={styles_Senha.input_senha}
        secureTextEntry={true}
        placeholder='Senha'
        placeholderTextColor='#ffffff'>  
        </TextInput>

    )
}

export const Input_Confirm = () => {

    return (

        <TextInput style={styles_Confirm.input_confirm}
        secureTextEntry={true}
        placeholder='Confirmar Senha'
        placeholderTextColor='#ffffff'>  
        </TextInput>
    )
}

const styles_Nome = StyleSheet.create({
    input_nome: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 261,
        height: 51,
        justifyContent: 'center',
        alignContent: 'center',
        top: -150
    }
})

const styles_Email = StyleSheet.create({

    input_email: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 261,
        height: 51,
        justifyContent: 'center',
        alignContent: 'center',
        top: -100
    }
})

const styles_Senha = StyleSheet.create({
    input_senha: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 261,
        height: 51,
        justifyContent: 'center',
        alignContent: 'center',
        top: -50
    }
})

const styles_Confirm = StyleSheet.create({

    input_confirm: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 261,
        height: 51,
        justifyContent: 'center',
        alignContent: 'center',
        top: 0
    }
})



