import React from "react";
import styled from "styled-components";
import Buscar from "./buscar/buscar"
import Logo from "../../assets/img/Group.svg"
import ContainerSession from "./container/contenedor";

const ImgContainer = () => {
    const Cont = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    return <Cont>
        <img src={Logo} alt="logo" />
    </Cont> 
}

export default () => {

    const Container = styled.div`
        background: #424242;
        position: relative;
        width:100%;
        height: 100%;
        box-shadow: 10px 0px 57px -10px rgba(0,0,0,0.63);
        /* padding: 1.2rem; */
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: 18% 30% 1fr;
    `
    return <Container>
        <ImgContainer />
        <Buscar />
        <ContainerSession />
    </Container>
}