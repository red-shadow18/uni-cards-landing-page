import React from "react";
import styled from "styled-components"
import Section1 from "./pageSections/Section1";


const LandingPage=()=>{

    return <Container> 
        <Section1/>
    </Container>
}

export default LandingPage

const Container= styled.div`

    display: flex;
    flex-direction: column;
`