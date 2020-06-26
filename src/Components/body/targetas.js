import React from "react";
import styled from "styled-components";
import {H1} from './estilos/targetas'
export default () => {
    const ContenerTargetas = styled.div`
        width : 300px;
        height: 300px; 
        margin:  0 1rem 1rem  0;
        position:relative;
        
    `
    const Targetas = styled.div`
        position: absolute;
        width: 85%;
        height: 95%; 
        box-shadow: 0px 0px 22px -4px rgba(0,0,0,0.2);
        overflow-y: auto;
        padding: 0.2%;
        display: grid;
        grid-template-rows: 10% 1fr;
    `
    const style = {
        n1 : {
            left : "16px",
            bottom: "16px",
            zIndex: "3",
            background: "#cf476b"
        },
        n2 : {
            left : "8px",
            bottom: "8px",
            zIndex: "2",
            background: "#d9d43f"
        },
        n3 : {
            left : "0px",
            bottom: "0px",
            zIndex: "1",
            background: "#50bf88"
        }
    }
    return <ContenerTargetas>
        <Targetas style={style.n1}>
            <H1>NEW work</H1>
        </Targetas>
        <Targetas style={style.n2}></Targetas>
        <Targetas style={style.n3}></Targetas>
    </ContenerTargetas>
}