import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Conteiner, InputCPF, RecuperarButton, RecuperarText, Logo, Title } from "./styles";

export const RecuperarSenha = () => {

  const [user, setUser] = useState({
    CPF: '',
  });
  const navigation = useNavigation();
  
  function screenRedefinirSenha() {
    navigation.navigate("RedefinirSenha");
  }
  return (
    <Conteiner >
      <Gradient />
      <Logo source={logo}/>
      <Title>Recuperar Senha</Title>
      <InputCPF
        value={user.CPF}
        onChangeText={setUser}
        placeholder={'Digite seu CPF'}
        placeholderTextColor={'gray'}
      />
      <RecuperarButton onPress={screenRedefinirSenha}>
        <RecuperarText>RECUPERAR</RecuperarText>
      </RecuperarButton>
      <StatusBar style="auto" />
    </Conteiner>
  );
}

