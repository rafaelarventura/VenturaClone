import colors from "../../themes/colors.js";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradient } from "../../components/Gradient";
import { Conteiner, InputLogin, LoginButton, LoginText } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export const AlterarCategoria = () => {
  
  const [user, setUser] = useState({
    nome: 'Tec1',
    Imagem: 'imagem5.pnj',    
  });
  const navigation = useNavigation();
  
  function screenAlterarCategoria() {
    navigation.navigate("AlterarCategoria");
  }

  return (
    <Conteiner>
      <Gradient />
      <Header title="Alterar Categoria" />
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
           
      <LoginButton onPress={screenAlterarCategoria}>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
     
      <StatusBar style="auto" />
      <Footer />
    </Conteiner>
  );
}