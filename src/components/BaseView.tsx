import { KeyboardAvoidingView, StyleSheet, ViewProps } from "react-native";

export interface BaseViewProps extends ViewProps {
  children?: any;
}

export default function BaseView(props: BaseViewProps) {
  return <KeyboardAvoidingView
  {...props}
  style={[
    styles.container,
    props.style,
  ]}
  behavior='padding'
  >
  {props.children}
  </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
