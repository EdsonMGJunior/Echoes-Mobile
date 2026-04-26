import { Image, ImageProps, StyleSheet } from "react-native";

export interface LogoProps extends ImageProps {};

export default function Logo(props: LogoProps) {
  return <Image
    source={require('../../assets/logo.png')}
    style={[
      styles.Logotipo,
      props.style
    ]}
    resizeMode='contain'
  />
}

const styles = StyleSheet.create({
  Logotipo: {
    width: '30%', 
    maxHeight: 200,
  },
});
