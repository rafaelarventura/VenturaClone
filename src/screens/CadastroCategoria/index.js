import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradient } from "../../components/Gradient";
import { Conteiner, InputLogin, LoginButton, LoginText } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import colors from "../../themes/colors.js";

export const CadastroCategoria = () => {
  
  const [user, setUser] = useState({
    nome: '',
    Imagem: '',    
  });
  const navigation = useNavigation();
  
  function screenCadastroCategoria() {
    navigation.navigate("CadastroCategoria");
  }

  return (
    <Conteiner>
      <Gradient />
      <Header title="Cadastro de Categoria" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
       <InputLogin
        value={user.Imagem}
        onChangeText={setUser}
        placeholder={'Imagem'}
        placeholderTextColor={'gray'}
      />
           
      <LoginButton onPress={screenCadastroCategoria}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
     
      <StatusBar style="auto" />
      <Footer />
    </Conteiner>
  );
}