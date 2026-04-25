import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Alert } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const ModalEditarTurmas = ({ visible, onClose }: Props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCancelar = () => {
    setNome("");
    setDescricao("");
    onClose();
  };

  const handleCriar = () => {
    if (!nome || !descricao) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }
    console.log("Nova Turma: ", { nome, descricao});
    handleCancelar();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={style.overlay} onPress={handleCancelar}>
        <Pressable onPress={(e) => e.stopPropagation()} style={style.container}>
          <Text style={style.titulo}>Editar Turma</Text>
          <Text style={style.label}>Nome</Text>
          <TextInput
            style={style.input}
            placeholder="Ex: Turma A"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={style.label}>Descrição</Text>
          <TextInput
            style={[style.input, style.inputMultiline]}
            placeholder="Ex: Turma do 3º ano"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={3}
          />
          <View style={style.botoesContainer}>
            <TouchableOpacity style={style.botaoCancelar} onPress={handleCancelar}>
              <Text style={style.botaoCancelarTexto}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.botaoEditar} onPress={handleCriar}>
              <Text style={style.botaoEditarTexto}>Editar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const style = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 24,
    width: 300,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#185fa5",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#185fa5",
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#185fa5",
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: "#185fa5",
  },
  inputMultiline: {
    height: 80,
    textAlignVertical: "top",
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 24,
  },
  botaoCancelar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#185fa5",
  },
  botaoCancelarTexto: {
    color: "#185fa5",
    fontSize: 15,
  },
  botaoEditar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#185fa5",
  },
  botaoEditarTexto: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});