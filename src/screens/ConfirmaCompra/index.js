import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Conteiner, Logo, Title, LoginButton, LoginText } from "./styles";

export default function Login() {
  
  const [user, setUser] = useState({
    
  });
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Conteiner>
      <Gradient />
      <Logo source={logo}/>
      <Title>Compra efetuada com sucesso!</Title>
      
      <LoginButton onPress={screenLogin}>
        <LoginText>Login</LoginText>
      </LoginButton>
    
      <StatusBar style="auto" />
    </Conteiner>
  );
}