import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, InputLogin, InputPassword, Recover, LoginButton, LoginText } from "./styles";

export const Login = () => {
  
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  const navigation = useNavigation();
  
  function screenRecuperarSenha() {
    navigation.navigate("RecuperarSenha");
  }
  function screenHome() {
    navigation.navigate("Home");
  }
  function screenCadastroUsuario() {
    navigation.navigate("CadastroUsuario");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu Login'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua Senha'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity onPress={screenRecuperarSenha}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <LoginButton onPress={screenHome}>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
      <TouchableOpacity onPress={screenCadastroUsuario}>
        <Recover >Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}




