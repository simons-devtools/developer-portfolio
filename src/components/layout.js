import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Email, Social, Nav } from './default';
import { StyledMainContent, StyledBodyContent, GlobalStyle, theme } from '../styles';
import { Head, Footer } from '../components';
import { IconLoader } from './icons';

const Layout = ({ children, location }) => {
    console.log(location);

    // Set the window loader:
    const [isActive, setIsActive] = React.useState(true);
    setTimeout(() => {
        setIsActive(false);
    }, 5000);

    return (
        <Fragment>
            <Head title="Responsive Portfolio" />

            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {
                        isActive ? (<IconLoader />) :
                            (
                                <StyledBodyContent>
                                    <Nav />
                                    <Social />
                                    <Email />

                                    <StyledMainContent id="content">
                                        {children}
                                    </StyledMainContent>

                                    <Footer />
                                </StyledBodyContent>
                            )
                    }
                </ThemeProvider>
            </div>
        </Fragment>
    );
};

export default Layout;