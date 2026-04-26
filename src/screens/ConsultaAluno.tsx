import { View } from 'react-native';
import { Barra_Pesquisa } from '../components/Barra_Pesquisa';
import { Menu, Titulo } from '../components/Menu'
import { BtnAction } from '../components/Ações';
import BaseView from '../components/BaseView';


export default function ConsultaAluno() {
  return (
    <BaseView>
      <Titulo></Titulo>
      <Menu></Menu>
      <Barra_Pesquisa></Barra_Pesquisa>
      <BtnAction></BtnAction>
    </BaseView>
  );
}
