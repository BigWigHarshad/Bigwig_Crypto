import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Benefit_card from "./Benefit_card";
// import './Benefits/benefit.css';

function Benefits(){
    return(
        <Container>
            <div className="d-flex justify-content-around flex-wrap">
            <Benefit_card 
            Heading="Enhanced Security and Transparency" 
            Description="Businesses can enhance security and transparency with blockchain’s decentralized, immutable, and tamper-proof nature, reducing fraud and unauthorized access." 
            image_url="./icons/icons8-cyber-security-100.png"/>

            <Benefit_card 
            Heading="Innovation and Competitive Advantage" 
            Description="Adopting DeFi, NFTs, and Web3 helps businesses innovate, explore new revenue streams, create unique experiences, and access emerging markets." 
            image_url="./icons/icons8-cyber-security-100.png"/>

            <Benefit_card 
            Heading="Cost Efficiency and Operational Optimization" 
            Description="Blockchain solutions cut costs by automating processes, reducing intermediaries, and fees, while smart contracts and payment gateways streamline operations." 
            image_url="./icons/icons8-cyber-security-100.png"/>
            </div>
        </Container>
    );
}

export default Benefits;