import { StyleSheet, Image} from 'react-native';
import { BtnRegistrar } from '../components/Botao_Registrar';
import { useRegistro } from '../hooks/useRegistro';
import { Input } from '../components/Input';
import BaseView from '../components/BaseView';
import Logo from '../components/Logo';


export default function Inicio() {

  const registro = useRegistro();

  return (
    <BaseView style={{ justifyContent: 'center', alignItems: 'center' }}>
      {/*Imagem Local*/}
      <Logo
      />

      <Input
      value={registro.nome}
      onChangeText={registro.setNome}
      placeholder='Nome do aluno'
      placeholderTextColor='#ccc'
      />
      <Input
      value={registro.email}
      onChangeText={registro.setEmail}
      placeholder='Email'
      placeholderTextColor='#ccc'
      keyboardType='email-address'
      />
      <Input
      value={registro.senha}
      onChangeText={registro.setSenha}
      placeholder='Senha do aluno'
      placeholderTextColor='#ccc'
      secureTextEntry
      />
      <Input
      value={registro.confirmSenha}
      onChangeText={registro.setConfirmSenha}
      placeholder='Confirme a senha'
      placeholderTextColor='#ccc'
      secureTextEntry
      />

      <BtnRegistrar/>
    </BaseView>
      
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
