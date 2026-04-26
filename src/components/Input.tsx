import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export interface InputProps extends TextInputProps {}

export function Input(props: InputProps) {
  return (
    <View style={styles.inputView}>
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
    backgroundColor: '#185fa5',
    borderRadius: 25,
    width: '75%',
    paddingHorizontal: 30,
    paddingVertical: 2,
    marginVertical: 5
  },
  input: {
    color: '#fff'
  }
});
