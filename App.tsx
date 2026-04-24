import { StyleSheet, View, Image, TextInput, SafeAreaViewBase} from 'react-native';
import { Barra_Pesquisa } from './src/shared/components/Barra_Pesquisa';
import { BtnTurmas } from './src/shared/components/Btn_Turmas';
import { Menu, Titulo } from './src/shared/components/Menu'
import { BtnAction } from './src/shared/components/Ações';

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


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logotipo: {width: 150, 
    height: 150,
    left: 0,
    top: -200},
});*/