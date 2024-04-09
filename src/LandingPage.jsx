import React,{useState} from "react";
import styled from "styled-components"
import bgVideo from "./nxt_wave_bg.mp4"
import uniSvg from "./svgs/svgexport-1.svg"
import topRightImg from "./images/top-image.png"
import starImage from "./svgs/svgexport-3.svg"


const LandingPage=()=>{
    const [phoneNumber, setPhoneNumber]=useState('')

    const handlePhoneNumberChange=(e)=>{
        const {value}=e.target
        setPhoneNumber(value)
    }

    const erasePhoneNumber=()=>{
        setPhoneNumber('')
    }
    return <Container>
        <div className="section1">
            <video className="section1BgVideo" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="content">
                <div className="topContent">
                    <img src={uniSvg}/>
                    <div className="linkOuterContainer">
                    <div className="linkInnerContainer">
                        <a href="https://paychek.uni.club/" target="_blank">Uni Paycheck</a>
                    </div>
                    </div>
                </div>
                <div className="bottomContent">
                    <div className="sec1">
                        <h1>
                            <span>
                                <strong>NX Wave.</strong>
                                The next-gen credit card for those who love rewards.
                            </span>
                        </h1>
                        <div className="rewardsInfo">
                            <p>1% Cashback 
                                <img src={starImage}/>
                                5x Rewards
                                <img src={starImage}/>
                                Zero Forex Markup
                            </p>
                        </div>
                        <div className="mobileNumberSection">
                            <div className="mobileNumberAndButton">
                                <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Enter Phone Number"/>
                                {phoneNumber.length && <button onClick={erasePhoneNumber} className="clearButton">X</button>}
                                <button>Apply Now</button>
                            </div>
                            <div className="terms">
                                <input id="checkbox" type="checkbox" checked={true}/>
                                <label htmlFor="checkbox">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                            </div>
                        </div>
                    </div>
                    <div className="sec2">
                        <img src={topRightImg}/>
                    </div>
                </div>
                

            </div> 
        </div>   
    </Container>
}

export default LandingPage

const Container= styled.div`

    .section1 {
        width:100%;
        height:100vh;

        video {
            height:100%;
            width:100%;
            object-fit:cover;
        }

        .content {
            position:absolute;
            top:0;
            padding:0 45px;
            width:100%;
            box-sizing:border-box;

            .topContent {
                display:flex;
                justify-content: space-between;

                .linkOuterContainer {
                    display:flex;
                    align-items: center;
                    

                    .linkInnerContainer{
                    padding:11px 30px;
                    background-color:rgba(0,0,0,0.6);
                    color:white;
                    font-weight:500;
                    box-sizing:border-box;
                    border-radius:10px;
                    }

                    .linkInnerContainer:hover{
                        color:#7be0ca;
                        background-color:rgb(0,0,0)
                        }

                    a{
                        color:inherit;
                        text-decoration:none;
                    }
                }
            }

            .bottomContent {
                display: flex;
                gap:20px;
                .sec1 {
                    display: flex;
                    flex-direction: column;
                    
                    h1 {
                        line-height: 54px;
                        font-weight:400;
                        font-size:3.4rem;
                        margin-bottom:1.5rem;
                        margin-top:0;

                        span {
                            word-wrap:break-word;
                        }
                    }

                    .rewardsInfo {
                        p {
                            line-height:1.5rem;
                            font-size:1rem;
                            font-weight: 500;

                            img {
                                line-height: 1.5rem;
                                margin: 0 8px -1px 8px;
                            }
                        }
                    }

                    .mobileNumberSection{
                        display: flex;
                        flex-direction:column;

                        .mobileNumberAndButton {
                            max-width:20rem;
                            display:flex;
                            border-radius: .75rem;
                            padding:0.25rem .25rem .25rem .5rem;
                            background-color: black;
                            justify-content: space-between;

                            input {
                                background-color:transparent;
                                width:11rem;
                                border:none;
                                outline: 2px solid transparent;
                                outline-offset: 2px;
                                padding: .25rem;
                                word-wrap: break-word;
                                color:white;
                                font-size: 100%;

                            }

                            input::placeholder {
                                font-weight: 500;
                            }

                            button {
                                line-height: 1.75rem;
                                font-size:.875rem;
                                padding: 0.5rem 1rem;
                                background-color: #fdef78;
                                border-radius: .75rem;
                                margin-left: 0%.5rem;
                                border-color: transparent;
                                outline: none;
                                cursor: pointer;
                            }

                            .clearButton {
                                background: none !important;
                                color:white;
                                padding:0.5rem;
                                cursor: pointer;
                            }
                        }

                        .terms {
                            display: flex;
                            max-width: 20rem;
                            padding: 1rem 0.5rem;
                            input:checked {
                                accent-color:white !important;
                                background-color: white !important;
                            }
                            label {
                                line-height:.75rem;
                                font-size:10px;
                                word-wrap: break-word;
                            }
                        }
                    }

                }
                .sec2 {
                    img {
                        height:420px;
                        width:420px;
                    }
                }
            }
        }
    }
`