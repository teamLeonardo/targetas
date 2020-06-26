import React from 'react';
import styled from "styled-components";
import NavBar from "../Components/navbar/index";
import CuerpoContainer from "../Components/body/index";

function Main() {
  const App = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 1fr;
  `
  return (
      <App>
        <NavBar />
        <CuerpoContainer />
      </App>
  );
}

export default Main;
