import React from "react";
import styled from 'styled-components';
import Header from '../components/HeaderLanding';
import Footer from '../components/Footer';
import HeroSection from "../components/HeroSection";
import ContactInfo from '../components/ContactInfo';



const Main = styled.main `
    margin: 0;
`;

const Landing = () => {
    return(
        <>
            <Header />
            <HeroSection />
            <Main>
                <ContactInfo />
            </Main>
            <Footer />
        </>    
    )
}

export default Landing;