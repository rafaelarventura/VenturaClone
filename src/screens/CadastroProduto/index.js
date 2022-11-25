import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradient } from "../../components/Gradient";
import { Conteiner, InputLogin, LoginButton, LoginText } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import colors from "../../themes/colors.js";

export const CadastroProduto = () => {
  
  const [user, setUser] = useState({
    nome: '',
    preco: '',
    quantidade: '',
    Imagem: '',    
  });
  // const navigation = useNavigation();
  
  // function screenCadastroCategoria() {
  //   navigation.navigate("CadastroProduto");
  // }

  return (
    <Conteiner>
      <Gradient />
      <Header title="Cadastro de Produto" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.preco}
        onChangeText={setUser}
        placeholder={'Preço'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.quantidade}
        onChangeText={setUser}
        placeholder={'Quantidade em estoque'}
        placeholderTextColor={'gray'}
      />
       <InputLogin
        value={user.Imagem}
        onChangeText={setUser}
        placeholder={'Imagem'}
        placeholderTextColor={'gray'}
      />
           
      <LoginButton>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
     
      <StatusBar style="auto" />
      <Footer />
    </Conteiner>
  );
}