import React from "react";
import styled from "styled-components";
import Targetas from "./targetas";
export default () => {

    const Container = styled.div`
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
    `;
    return <Container>
        
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
        <Targetas />
    </Container>
}