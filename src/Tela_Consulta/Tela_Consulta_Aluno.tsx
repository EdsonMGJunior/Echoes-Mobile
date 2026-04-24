import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput, SafeAreaViewBase} from 'react-native';
import { Barra_Pesquisa } from '../shared/components/Barra_Pesquisa';
import { BtnTurmas } from '../shared/components/Btn_Turmas';


export default function App() {
  return (
    <View>
      <Barra_Pesquisa></Barra_Pesquisa>
      <BtnTurmas></BtnTurmas>
    </View>
  );
}