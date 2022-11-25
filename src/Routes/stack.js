import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {RecuperarSenha} from "../screens/RecuperarSenha";
import {Login} from "../screens/Login";
import {Produtos} from "../screens/Produtos";
import {CadastroProduto} from "../screens/CadastroProduto";
import {Home} from "../screens/Home";
import {Favoritos} from "../screens/Favoritos";
import {Carrinho} from "../screens/Carrinho";
import {CadastroUsuario} from "../screens/CadastroUsuario";
import {RedefinirSenha} from "../screens/RedefinirSenha";
import {SenhaAlterada} from "../screens/SenhaAlterada";
import {ConfirmaCadastro} from "../screens/ConfirmaCadastro";
import {CadastroCategoria} from "../screens/CadastroCategoria";
import {AlterarCategoria} from "../screens/AlterarCategoria";
import {AlterarProduto} from "../screens/AlterarProduto";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login"
            >
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="RecuperarSenha"
                component={RecuperarSenha}
            />
            <Screen
                name="Produtos"
                component={Produtos}
            />
            <Screen
                name="CadastroProduto"
                component={CadastroProduto}
            />
            <Screen
                name="CadastroUsuario"
                component={CadastroUsuario}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Favoritos"
                component={Favoritos}
            />
            <Screen
                name="Carrinho"
                component={Carrinho}
            />
            <Screen
                name="RedefinirSenha"
                component={RedefinirSenha}
            />
              <Screen
                name="SenhaAlterada"
                component={SenhaAlterada}
            />
           
             <Screen
                name="ConfirmaCadastro"
                component={ConfirmaCadastro}
            />
              <Screen
                name="CadastroCategoria"
                component={CadastroCategoria}
            />
              <Screen
                name="AlterarCategoria"
                component={AlterarCategoria}
            />
             <Screen
                name="AlterarProduto"
                component={AlterarProduto}
            />

        </Navigator>
    )

}