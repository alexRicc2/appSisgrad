import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { iconesClaro, iconesEscuro } from "../../estilos";
import styled from "styled-components/native";

import { ThemeContext } from "../../../App";
const TextStyled = styled.Text`
  color: ${({ theme }) => theme.text};
  padding: 2px 0;
`;

export default function Info() {
  const temaContext = useContext(ThemeContext);
  return (
    <>
      <View style={{ alignItems: "center" }}>
      <Image
          style={style.icone}
          source={{
            uri: `https://github.com/alexRicc2.png`,
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ marginBottom: "23%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="person"
              size={18}
              color={temaContext ? iconesClaro : iconesEscuro}
              style={{ marginRight: 10 }}
            />
            <TextStyled>Alex Ricardo Rodrigues Sant'Anna</TextStyled>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo
              name="info-with-circle"
              size={18}
              color={temaContext ? iconesClaro : iconesEscuro}
              style={{ marginRight: 10 }}
            />
            <TextStyled>RA: 10000210</TextStyled>
          </View>
          <TextStyled>Graduando de Ciências da Computação</TextStyled>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  icone: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginTop: 10,
    marginBottom: "15%",
  },
  texto: {
    paddingVertical: 2,
  },
});
