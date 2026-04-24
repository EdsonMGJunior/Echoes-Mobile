import { StyleSheet, View, Image, TextInput, SafeAreaViewBase} from 'react-native';
import { BtnRegistrar } from '../shared/components/Botao_Registrar';
import { Input_Nome, Input_Email, Input_Senha, Input_Confirm } from '../shared/components/Formulario';


export default function App() {
  return (
    <View style={styles.container}>
      {/*Imagem Local*/}
      <Image
        source={require('./assets/Logotipo Echo (Atualizado).png')}
        style={styles.Logotipo}/>

        <Input_Nome></Input_Nome>
        <Input_Email></Input_Email>
        <Input_Senha></Input_Senha>
        <Input_Confirm></Input_Confirm>

        <BtnRegistrar/>
      
    </View>
  );
}


const styles = StyleSheet.create({
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
});