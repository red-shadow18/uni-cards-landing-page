import React from "react";
import styled from "styled-components"

const ImageWithText=({id,leftImage,imgSrc,primaryBoldText,primaryPlainText,secondaryText})=>{
    return(<Container>
        {
            leftImage?<div className="contentDiv"><section className="section1"><img src={imgSrc}/></section><section className="section2">
                <p className="primary">
                    {primaryBoldText}
                    <span className="textLight">{primaryPlainText}</span>
                </p>
                {secondaryText.length ? <p className="secondary">{secondaryText}</p>:''}
                </section></div>:
            <div className="contentDiv"><section className="section2">
                <p className="primary">
                    {primaryBoldText}
                    <span className="textLight">{primaryPlainText}</span>
                </p>
                {secondaryText.length ? <p className="secondary">{secondaryText}</p>:""}
                </section><section className="section1"><img src={imgSrc}/></section></div>
        }
    </Container>)
}

export default ImageWithText

const Container = styled.div`
padding: 70px 2rem 2rem 60px;

    p {
        word-wrap: break-word;
    }

    .contentDiv {
       display :flex ;

    }

    .primary {
        font-weight:700;
        font-size: 40px;
    }

    .secondary {
        font-size: 1.125rem;
        line-height: 1.75rem;
        color:#9EA7AE;
    }

    .textLight {
        font-size: 40px;
        font-weight: 400;
        color:#9EA7AE;
    }

    .section1 {
        display: flex;
    width: 50%;
    justify-content: center;
    }

    .section2{
        width: 50%;
        display: flex;
    flex-direction: column;
    justify-content: center;
    }

img {
    width: 448px;
}
    
`
