import React from 'react';
import styled from 'styled-components/native';

const ViewDiscipline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({theme}) => theme.inside};
`
const TextStyled = styled.Text`
  width: 30%;
  color: ${({theme})=> theme.text};
`
const TextStyledCenter = styled.Text`
  width: 30%;
  text-align: center;
  color: ${({theme})=> theme.text};
`

export default function DisciplinaDados({disciplina, ch, equivalencia}) {
  return (
    <ViewDiscipline>
      <TextStyled >{disciplina}</TextStyled>
      <TextStyledCenter>{ch}</TextStyledCenter>
      <TextStyled >{equivalencia}</TextStyled>
    </ViewDiscipline>
  )
}