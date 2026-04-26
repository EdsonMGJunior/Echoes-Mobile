import { SafeAreaView } from 'react-native-safe-area-context';
import ConsultaAluno from './src/screens/ConsultaAluno';
import Inicio from './src/screens/Inicio';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ConsultaAluno/>
    </SafeAreaView>
  );
}
