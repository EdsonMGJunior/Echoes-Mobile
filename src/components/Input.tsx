import { Feather } from "@expo/vector-icons";
import { FeatherIconName } from "@react-native-vector-icons/feather";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export interface InputProps extends TextInputProps {
  icon?: FeatherIconName;
}

export function Input(props: InputProps) {
  return (
    <View style={styles.inputView}>
      {props.icon && <Feather
        name={props.icon}
        size={20}
        color='#185fa5'
      />}
      <TextInput
        {...props}
        style={[
          styles.input,
          props.style
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'rgba(0,0,0,.05)',
    borderColor: '#185fa5',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 25,
    width: '75%',
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginVertical: 5,
    gap: 5,

    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
  }
});
