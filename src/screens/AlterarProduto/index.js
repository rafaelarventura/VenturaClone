import colors from "../../themes/colors.js";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradient } from "../../components/Gradient";
import { Conteiner, InputLogin, LoginButton, LoginText } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export const Alterarproduto = () => {
  
  const [user, setUser] = useState({
    nome: 'Tec1',
    valor: '25,00',
    quantidade: '10',
    imagem: 'imagem1.pnj',    
  });
  // const navigation = useNavigation();
  
  // function screenAlterarProduto() {
  //   navigation.navigate("AlterarProduto");
  // }

  return (
    <Conteiner>
      <Gradient />
      <Header title="Alterar Produto" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
       <InputLogin
        value={user.valor}
        onChangeText={setUser}
        placeholder={'Valor'}
        placeholderTextColor={'gray'}
      />
       <InputLogin
        value={user.quantidade}
        onChangeText={setUser}
        placeholder={'Quantidade'}
        placeholderTextColor={'gray'}
      />
       <InputLogin
        value={user.imagem}
        onChangeText={setUser}
        placeholder={'Imagem'}
        placeholderTextColor={'gray'}
      />
           
      <LoginButton>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
     
      <StatusBar style="auto" />
      <Footer />
    </Conteiner>
  );
}