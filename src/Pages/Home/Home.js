import React from 'react';
import { Container, FirstSection, SecondSection, ThirdSection } from './styles';

const Home = () => {
    return(
        <Container>
            <FirstSection >
                <div className="bock-red"></div>
                <div className="bock-gray"></div>
            </FirstSection>
            <SecondSection />
            <ThirdSection>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
            </ThirdSection>
        </Container>
    )
}

export default Home;