import React from "react";
import styled from "styled-components"
import downArrow from "../images/down_arrow.svg"
import { caardBenefits } from "../constants";
import ImageWithText from "../components/ImageWithText";

const Section2=()=>{
    return <Container>
        <div className="infoAndArrow">
            <div className="info">
            <p>Earn 1% assured cashback <span>on your spends. Get </span>5x</p>
            <p>more value than cashback <span>at the Uni Store. Enjoy</span></p>
            <p><span>round the clock</span> Whatsapp support.<span> And it's</span></p>
            <p>lifetime free;<span> no joining fee, no annual charges.</span></p>
            </div>
            <div className="downArrow">
                <img src={downArrow}/>
            </div>
        </div>
        <div className="cardBenefits">
            {
                caardBenefits.map(benefit=><ImageWithText
                key={benefit.id}
                id={benefit.id}
                leftImage={benefit.leftImage}
                imgSrc={benefit.imgSrc}
                primaryBoldText={benefit.primartBoldText}
                primaryPlainText={benefit.primaryPlainText}
                secondaryText={benefit.secondaryText}
                />)
            }
        </div>
        <div className="additionalInfo">
          <p>  Lifetime <span>free.</span> No joining fee.</p>
          <p>No annual charges.</p>
        </div>
    </Container>
}

export default Section2

const Container=styled.div`
    padding: 150px 0;

    .infoAndArrow {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;

        .info {
            padding-bottom: 4rem;
            text-align: center;

            p{
            margin: 0;
            font-size: 40px;
            font-weight: 500;
            animation: slide-up 2s;

            span {
                font-weight: 400 !important;
                color: #9ea7ae;
            }

            @keyframes slide-up {
                from {
                    opacity: 0.2;
                    line-height: 34px;
                }to {
                    opacity: 1;
                    line-height:30px;
                }
            }
        }
        }

        .downArrow {
            height: 150px;
            width: 150px;
            background:linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }


    }
    .additionalInfo {
            margin-top: 10rem;
            font-size: 40px;
            line-height: 1.2;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight:500;

            p {
                margin: 0;

                span {
                    color: #5ad6c4;
                }
            }
        }
`