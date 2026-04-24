import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export const BtnAction = () => {

    return (
        <TouchableOpacity style={style.BtnAdd}>
            <Ionicons name="add" size={20} color="#fff" style={{marginTop: 15, top: -6, left: 15}}/>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    BtnAdd: {
        backgroundColor: '#185fa5',
        borderRadius: 25,
        top: 675,
        width: 50,
        height: 40,
        left: 350
    }
})