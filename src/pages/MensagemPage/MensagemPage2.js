import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { CINZA_CLARO, COR_PRINCIPAL, conteudoEscuro} from '../../estilos';
import styled from 'styled-components';
import { ThemeContext } from '../../../App';
import { useContext } from 'react/cjs/react.development';
const mensagemContent = {
  titulo: 'Concurso de contos e crônicas - RESULTADO',
  remetente: 'Reitoria',
  data: '17/09/2021 às 19:15',
  texto: `---------- Forwarded message ---------
  De: Unesp Imprensa imprensaunesp.br
  Date: sex., 17 de set. de 2021 às 16:36
  Subject: Concurso de contos e crônicas - RESULTADO
  To:
  
  
  Prezada comunidade da Unesp,
  Conforme previsto em edital, a Universidade divulgou nesta sexta-feira (17) o resultado do concurso literário de contos e crônicas "Para não esquecer: literatura da pandemia". Ao todo, 32 textos foram selecionados pelos jurados e serão publicados pela Editora Unesp.
  Entre as produções selecionadas, há representantes de 12 câmpus universitários da Unesp e autores com origens e formações acadêmicas diversas, englobando todas as grandes áreas do conhecimento.
  Confira o resultado, com os vencedores em cada categoria e os 32 textos selecionados, que ficarão disponíveis para as 34 bibliotecas da Universidade: https://www2.unesp.br/portal#!/noticia/36568/conto-de-docente-e-cronica-de-aluna-vencem-concurso-literario.
  Respeitosamente,
  --
  
  
  Assessoria de Comunicação e Imprensa - Unesp
  
  Fone: (11) 5627-0326 / 327
  https://www.unesp.br/
  `
}


const Container = styled.ScrollView`
flex: 1;
padding: 16px;
padding-top: 28px;
background-color: ${({theme})=> theme.body};
`

const TextStyled = styled.Text`
color: ${({theme})=> theme.text};
`
const TextStyledTitulo = styled.Text`
color: ${({theme})=> theme.text};
font-weight: bold;
`
export default function MensagemPage1(){
  const temaContext = useContext(ThemeContext);
  return(
    <Container>
    <View style={[styles.mensagemCard, {borderColor: temaContext? CINZA_CLARO: COR_PRINCIPAL}]}>
      <View style={[styles.mensagemHeader, {backgroundColor: temaContext? CINZA_CLARO: COR_PRINCIPAL}]}>
        <TextStyledTitulo>{mensagemContent.titulo}</TextStyledTitulo>
      </View>
      <View style={[styles.mensagemCorpo, {backgroundColor: temaContext? '#fff': conteudoEscuro}]}>
        <TextStyled>De: {mensagemContent.remetente}</TextStyled>
        <TextStyled>Recebida em: {mensagemContent.data}</TextStyled>
        <TextStyled>{mensagemContent.texto}</TextStyled>
      </View>
    </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 28, backgroundColor: '#fff' },
  mensagemCard:{
    borderWidth: 1,
    borderColor: CINZA_CLARO,
    marginBottom: 50,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20

  },
  mensagemHeader: {
    backgroundColor: CINZA_CLARO,
    padding: 8,
    
  },
  mensagemTitulo: {
    fontWeight: 'bold'
  },
  mensagemCorpo:{
    padding: 8,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  }
})