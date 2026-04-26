import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Barra_Pesquisa = () => {

    return (
        <View style={styles_SearchBar.container}>

            <Ionicons name="search-outline" size={20} color="#fff" style={{marginTop: 15, left: 15}}/>
            <TextInput
            style={styles.input}
            placeholder='Pesquisar Turma'
            placeholderTextColor='#fff'/>
        </View>
    )
}

export const styles_SearchBar = StyleSheet.create({
    container: {
        flexDirection: 'row',
        textAlign: 'left',
        backgroundColor: '#185fa5',
        borderRadius: 50,
        height: 50,
        width: 400,
        gap: 6,
        left: -10,  // substitui o left: 50
        top: -60
    }
})

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        includeFontPadding: false,      // ← remove padding extra da fonte no Android
        left: -10
    }
})