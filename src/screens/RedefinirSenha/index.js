import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Conteiner, Logo, Title, InputPassword1, InputPassword, AlterarButton, AlterarText } from "./styles";
import {SenhaAlterada} from "../SenhaAlterada";

export const RedefinirSenha = () => {
  
  const [user, setUser] = useState({
     password: '',
  });
  const navigation = useNavigation();
  
  function screenSenhaAlterada() {
    navigation.navigate("SenhaAlterada");
  }

  return (
    <Conteiner>
      <Gradient />
      <Logo source={logo}/>
      <Title>Criar Senha</Title>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua nova senha'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Repita sua nova sua Senha'}
        placeholderTextColor={'gray'}
      />
     
      <AlterarButton onPress={screenSenhaAlterada}>
        <AlterarText>ALTERAR</AlterarText>
      </AlterarButton>
      
      <StatusBar style="auto" />
    </Conteiner>
  );
}