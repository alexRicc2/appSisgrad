import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DisciplinaDados from "../DisciplinaDados";
import { COR_PRINCIPAL } from "../../estilos";
import styled from "styled-components/native";

const TabelaHeader = styled.View`
  background-color: ${({ theme }) => theme.principal};
  padding: 10px 0;
`;
const TotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: ${({ theme }) => theme.principal};
`;

export default function TabelaDados({ title, totalch, arrayDisciplina }) {
  return (
    <View style={style.tabela}>
      <TabelaHeader>
        <View>
          <Text style={{ alignSelf: "center", color: "#fff" }}>{title}</Text>
          <View style={style.tableHeader}>
            <Text style={style.textoHeader}>Disciplina</Text>
            <Text style={[style.textoHeader, { textAlign: "center" }]}>CH</Text>
            <Text style={style.textoHeader}>Equivalencia</Text>
          </View>
        </View>
      </TabelaHeader>
      <FlatList
        data={arrayDisciplina}
        renderItem={({ item }) => <DisciplinaDados {...item} />}
        keyExtractor={({ id }) => String(id)}
      />

      <TotalContainer>
        <Text style={style.totalText}>Total de Carga Horária: {totalch}</Text>
      </TotalContainer>
    </View>
  );
}

const style = StyleSheet.create({
  tabela: {
    marginVertical: 16,
  },
  containerHeader: {
    backgroundColor: COR_PRINCIPAL,
    paddingVertical: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textoHeader: {
    color: "#fff",
    width: "30%",
  },
  containerTotal: {
    backgroundColor: COR_PRINCIPAL,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  totalText: {
    color: "white",
  },
});
