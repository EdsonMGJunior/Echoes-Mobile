import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Text, Modal, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

type Opcao = {
  id: number;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

type BtnEditarProps = {
  pickImage: () => void;
  takePhoto: () => void;
  onEditarInformacoes: () => void;
};

const opcoes: Opcao[] = [
  { id: 1, label: "Selecionar Galeria", icon: "image-outline" },
  { id: 2, label: "Tirar Foto", icon: "camera-outline" },
  { id: 3, label: "Editar Informações", icon: "create-outline" },
];

export const BtnEditar = ({ pickImage, takePhoto, onEditarInformacoes }: BtnEditarProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpcao = (opcao: Opcao) => {
    setMenuVisible(false);
    if (opcao.id === 1) {
      pickImage();
    } else if (opcao.id === 2) {
      takePhoto();
    } else if (opcao.id === 3) {
      onEditarInformacoes();
    }
  };

  return (
    <>
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
        style={style.btnEditar}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Ionicons
          name={menuVisible ? "close" : "pencil"}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  btnEditar: {
    backgroundColor: '#185fa5',
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    right: 5,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 90,
    paddingRight: 20,
  },
  menu: {
    backgroundColor: '#185fa5',
    borderRadius: 12,
    width: 200,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuText: {
    fontSize: 15,
    color: '#fff',
  },
});