import React, { useState } from 'react';
import styled from "styled-components";
import Logo from '../assets/img/Group.svg';
import {Redirect} from "react-router-dom";
const Input = ({ id, mess, error, type }) => {
  const ContInput = styled.div`
    margin-top:1rem;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:start;
  `
  const Input = styled.input`
    background: #EEEEEE;
    width: 100%;
    max-width: 100%;
    border: 0;
    outline: none;
    font-size: 18px;
    padding: 1rem;
    box-sizing: border-box;
    color: #4B4B4B;
  `
  const Label = styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.16em;
    color: #4B4B4B;
    margin-bottom: 0.4em;
  `
  return <ContInput>
    <Label form={id} >{mess}</Label>
    <Input type={type} id={id} name={id} />
    {error ? <>{error}</> : null}
  </ContInput>
}
const Button = (props) => {
  const ContainerButon = styled.div`
    max-width: 100%;
    width:100%;
    display:flex;
    justify-content:center;
  `
  const ButtonA = styled.button`
    margin-top: 3rem;
    max-width: 77%;
    width: 77%;
    padding: 1rem ;
    text-align: center;
    background: #C4C4C4;
    border: none;
    color: #ffffff;
    font-size: 12pt;
    border-radius: 27px;
    letter-spacing : 8px;
  `
  return <ContainerButon>
    <ButtonA {...props}>
      Ingresar
    </ButtonA>
  </ContainerButon>
}
const Card = () => {
  const [validado, setValidado] = useState(false);

  const Container = styled.div`
    max-width: 500px;
    max-height: 600px;
    min-width: 320px;
    min-height: 450px;
    border: 1px solid #00000020;
    width: 401px;
    height: 484px;  
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 37px 43px 62px;
    background: #FFFFFF;
    border: 1px solid rgba(69, 69, 69, 0.4);
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    @media (max-width : 450px){
      width:100%;
      height:100%;
    }
  `
  const handleClick = ()=>{
    setValidado(true)
  }
  return (validado === true ? <Redirect to="/main"/> : <Container>
    <img src={Logo} alt="logo" />
    <Input id="txtUsuario" type="text" mess="Usuario" />
    <Input id="txtPass" type="password" mess="Contraseña" />
    <Button onClick={handleClick} />
  </Container>)

}


function Login() {

  const Fondo = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex;
    justify-content: center;
    align-items: center;
  `
  return <Fondo>
    <Card />
  </Fondo>
}

export default Login;

