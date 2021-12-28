import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import { UsuarioContext } from '../../components/common/UsuarioContext';
import { useTemaContext } from '../../components/common/TemaContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import NavBar from '../../components/Navbar';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  height: 100%;
  align-content: center;
  justify-content: center;
`
const ContainerLogin = styled.View`
  width: 90%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin-top: -40%;
  align-self: center;
  background-color: #f3f3f3;
`
const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`
const Input = styled.TextInput`
  width: 90%;
  background-color: lightblue;
  padding: 5px;
`

const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #333;
`
const Opcao = styled.Text`
  color: rgb(33,150,243);
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
`
const ButtonContainer = styled.View`
  margin-bottom: 20px;
`


export function Login({ navigation }) {

  const { setUser } = useContext(UsuarioContext)
  const { } = useTemaContext()

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'red' }} />
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <NavBar titulo="UNESP"/>
        <Container>
        <ContainerLogin>
          <Title>Faça o login para entrar</Title>
          <InputContainer>
            <FontAwesome5 name="user" size={24} color="black" />
            <Input
              placeholder='Login'
            />
          </InputContainer>
          <InputContainer>
            <Feather name="lock" size={24} color="black" />
            <Input
              secureTextEntry={true}
              placeholder='Senha'
            />
          </InputContainer>
          <ButtonContainer>
          <Button
            title='Logar'
            onPress={() => setUser(true)}
          />
          </ButtonContainer>
          <TouchableOpacity>
            <Opcao>Primeiro Acesso?</Opcao>
          </TouchableOpacity>
          <TouchableOpacity>
            <Opcao>Esqueceu sua identificação?</Opcao>
          </TouchableOpacity>
          <TouchableOpacity>
            <Opcao>Esqueceu sua senha?</Opcao>
          </TouchableOpacity>
        </ContainerLogin>
        </Container>
      </SafeAreaView>
    </>
  )
}