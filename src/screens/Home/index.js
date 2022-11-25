import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import {  Logo, Recover} from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import colors from "../../themes/colors.js";


export const Home = () => {

  const navigation = useNavigation();

  function openScreen() {
      navigation.navigate("CadastroCategoria")
  }

  function openScreen2() {
      navigation.navigate("EdicaoProduto")
  }

 

  return (
    <View>
      <Gradient />
      <Header title="Marketplace" />
      <PlusButton onPress={openScreen}>
            <AntDesign name="plus" size={24} color={colors.secondary} />
      </PlusButton>
      <Logo source={logo} />
      <textInicial>Sobre nós.. </textInicial>
      <Text>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
        Lorem ipsum dolor sit amet, consectetur Lore
        Lorem ipsum dolor sit amet, consectetur Lore m  took
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
        Lorem ipsum dolor sit amet, consectetur Lore
        Lorem ipsum dolor sit amet, consectetur Lore m  took
      </Text>
      <TouchableOpacity onPress={screenCadastroCategoria}>
        <Recover>Categoria +</Recover>
      </TouchableOpacity>

      <IconContainer>
        <MaterialIcons name="delete-outline" size={20} color="red" />
        <TouchableOpacity onPress={openScreen2}>
          <AntDesign name="edit" size={20} color={colors.secondary} />
        </TouchableOpacity>
      </IconContainer>

      <image/>



      <textInicial>Criadores</textInicial>


      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}