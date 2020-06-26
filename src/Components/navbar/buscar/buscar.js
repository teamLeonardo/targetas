import React from "react";
import styled from "styled-components";

const InputText = ()=>{
    const InputText = styled.input`
        background: #ffffff;
        width: 80%;
        height: 3rem;
        border-radius: 30%;
    `
    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return <Container>
        <InputText />
    </Container>
}
export default () => {
    
    const Container = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    `
    return <Container>
        <InputText />
    </Container>
}