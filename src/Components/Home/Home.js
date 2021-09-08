import React from 'react';
import './Home.modules.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Work from '../Work/Work';
import Other from '../Other/Other';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <main>
            <Navigation />
            <section>
                <Header />
                <About />
                <Experience />
                <Work />
                <Other />
                <Contact />
            </section>
            <Footer />
        </main>
    );
};

export default Home;