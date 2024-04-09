import React from "react";
import styled from "styled-components"
import Section1 from "./pageSections/Section1";
import Section2 from "./pageSections/Section2";


const LandingPage=()=>{

    return <Container> 
        <Section1/>
        <Section2/>
    </Container>
}

export default LandingPage

const Container= styled.div`

    display: flex;
    flex-direction: column;
`