import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function useRegistro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  function registrar() {
    navigation.navigate('consulta-aluno');
  }
  
  return {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    confirmSenha,
    setConfirmSenha,
    registrar,
  }
}
