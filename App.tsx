import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { BtnEditar } from './src/shared/components/BotãoEditar';
import { Profile, pickImage, takePhoto } from './src/shared/components/Foto_Perfil';

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={Tela.container}>
      <Profile image={image} setImage={setImage}/>
      <BtnEditar
        pickImage={() => pickImage(setImage)}
        takePhoto={() => takePhoto(setImage)}
        onEditarInformacoes={() => {/* futuramente navegação ou modal */}}
      />
    </View>
  );
}

const Tela = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  }
});