import { Barra_Pesquisa } from '../components/Barra_Pesquisa';
import { Menu, Titulo } from '../components/Menu'
import { BtnAction } from '../components/Ações';
import BaseView from '../components/BaseView';


export default function ConsultaAluno() {
  return (
    <BaseView style={{ padding: 20 }}>
      <Titulo></Titulo>
      <Menu></Menu>
      <Barra_Pesquisa></Barra_Pesquisa>
      <BtnAction></BtnAction>
    </BaseView>
  );
}
