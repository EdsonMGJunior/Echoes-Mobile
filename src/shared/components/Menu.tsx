import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { styles } from './Barra_Pesquisa';

export const Titulo = () => {

    return (
        <Text style={Texto.Texto}>Turmas</Text>
    )
}

export const Menu = () => {

    return (
        
        <TouchableOpacity style={Botao.Menu}>
            <Text style={Conteudo.Conteudo}>
                Menu
            </Text>
        </TouchableOpacity>
    )
}

const Texto = StyleSheet.create({

    Texto : {
        fontSize: 30,
        fontWeight: "bold",
        color: "#185fa5",
        top: 200,
        left: 10
    }
})

const Botao = StyleSheet.create({

    Menu: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
        left: 300
    }
})

const Conteudo = StyleSheet.create({

    Conteudo: {

        color: '#fff'

    }
})