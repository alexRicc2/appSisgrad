import React, {useContext, useState} from 'react';
import { Switch, StyleSheet} from "react-native";
import NavBar from '../../components/Navbar';
import styled from 'styled-components/native';
import { COR_PRINCIPAL ,COR_PRINCIPAL_ESCURA } from '../../estilos';
import ToggleTemaContext from '../../Context/temaToggle';
const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.body};
`
const TextStyled = styled.Text`
  color: ${({ theme }) => theme.text};
`;

export default function 
Configuracoes({navigation}){
  
  const TemaToggle = useContext(ToggleTemaContext)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); 
    TemaToggle();
  };
  return(
    <>
    <NavBar titulo='Configurações' navigation={navigation}/>
    <Body>
      <TextStyled>Modo noturno</TextStyled>
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? COR_PRINCIPAL : COR_PRINCIPAL_ESCURA}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </Body>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});