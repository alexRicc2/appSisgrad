import React from "react";
import { StyleSheet, FlatList } from "react-native";
import TabelaDados from "../../components/TabelaDados";
import { TABELA_DISCIPLINAS_ARRAY } from "../../Dados/disciplinas";
import NavBar from "../../components/Navbar";
import styled from "styled-components/native";

const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.body};
`;

export default function DadosCurso({ navigation }) {
  return (
    <>
      <NavBar titulo="Dados do Curso" navigation={navigation} />
      <Body>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={TABELA_DISCIPLINAS_ARRAY}
          renderItem={({ item }) => <TabelaDados {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      </Body>
    </>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 16,
  },
  container: {
    flex: 1,
  },
});
