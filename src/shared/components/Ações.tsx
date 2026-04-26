import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import { ModalCriarTurmas } from "./ModalCriaçãoTurma";
import { ModalExcluirTurmas } from "./ModalExcluirTurma";
import { ModalEditarTurmas } from "./ModalEditarTurma"

type Opcao = {
  id: number;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

export const BtnAction = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [criarVisible, setCriarVisible] = useState(false)
  const [excluirVisible, setExcluirVisible] = useState(false)
  const [editarVisible, setEditarVisible] = useState(false)

  const opcoes: Opcao[] = [
    { id: 1, label: "Criar Nova Turma", icon: "people-outline" },
    { id: 2, label: "Excluir Turma", icon: "trash-outline" },
    { id: 3, label: "Editar", icon: "create-outline" },
  ];

  const handleOpcao = (opcao: Opcao) => {
    setMenuVisible(false);
    if (opcao.id === 1) {
      setCriarVisible(true); // ✅ 2. Abre o modal ao clicar em "Criar Nova Turma"
    } else if(opcao.id === 2) {
        setExcluirVisible(true)
    } else if(opcao.id === 3) {
        setEditarVisible(true)
    }
  };

  return (
    <>
      {/* ✅ 3. Adicione o modal aqui */}
      <ModalCriarTurmas
        visible={criarVisible}
        onClose={() => setCriarVisible(false)}
    />
    <ModalExcluirTurmas
        visible={excluirVisible}
        onClose={() => setExcluirVisible(false)}
    />

    <ModalEditarTurmas
        visible={editarVisible}
        onClose={() => setEditarVisible(false)}/>

      <Modal visible={menuVisible} transparent animationType="fade">
        <Pressable style={style.overlay} onPress={() => setMenuVisible(false)}>
          <Pressable onPress={(e) => e.stopPropagation()} style={style.menu}>
            {opcoes.map((opcao) => (
              <TouchableOpacity
                key={opcao.id}
                style={style.menuItem}
                onPress={() => handleOpcao(opcao)}
              >
                <Ionicons name={opcao.icon} size={20} color="#fff" />
                <Text style={style.menuText}>{opcao.label}</Text>
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>

      <TouchableOpacity
        style={style.BtnAdd}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Ionicons
          name={menuVisible ? "close" : "add"}
          size={20}
          color="#fff"
          style={{ marginTop: 15, top: -6, left: 15 }}
        />
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  BtnAdd: {
    backgroundColor: "#185fa5",
    borderRadius: 25,
    top: 675,
    width: 50,
    height: 40,
    left: 335,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 90,
    paddingRight: 20,
  },
  menu: {
    backgroundColor: "#185fa5",
    borderRadius: 12,
    width: 200,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuText: {
    fontSize: 15,
    color: "#fff",
  },
});