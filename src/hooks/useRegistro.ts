import { useState } from "react";

export function useRegistro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  
  return {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    confirmSenha,
    setConfirmSenha,
  }
}
