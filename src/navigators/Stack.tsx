import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screens/Inicio";
import ConsultaAluno from "../screens/ConsultaAluno";

const { Navigator, Screen } = createStackNavigator();

export function Stack() {
  return <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen
      name='inicio'
      component={Inicio}
    />
    <Screen
      name='consulta-aluno'
      component={ConsultaAluno}
    />
  </Navigator>
}
