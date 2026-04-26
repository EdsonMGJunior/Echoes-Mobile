import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput, SafeAreaViewBase} from 'react-native';
import { Barra_Pesquisa } from '../shared/components/Barra_Pesquisa';
import { Menu, Titulo } from '../shared/components/Menu'
import { BtnAction } from '../shared/components/Ações';


export default function App() {
  return (
    <View>
      <Titulo></Titulo>
      <Menu></Menu>
      <Barra_Pesquisa></Barra_Pesquisa>
      <BtnAction></BtnAction>
    </View>
  );
}