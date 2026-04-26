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
      icon='user'
      />
      <Input
      value={registro.email}
      onChangeText={registro.setEmail}
      placeholder='Email'
      keyboardType='email-address'
      icon='at-sign'
      />
      <Input
      value={registro.senha}
      onChangeText={registro.setSenha}
      placeholder='Senha do aluno'
      secureTextEntry
      icon='lock'
      />
      <Input
      value={registro.confirmSenha}
      onChangeText={registro.setConfirmSenha}
      placeholder='Confirme a senha'
      secureTextEntry
      icon='lock'
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
