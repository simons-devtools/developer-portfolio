import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Email, Social, Nav } from './default';
import { StyledMainContent, StyledBodyContent, GlobalStyle, theme } from '../styles';
import { Head } from '../components';

const Layout = ({ children, location }) => {
    return (
        <>
            <Head title="Responsive Portfolio" />

            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <StyledBodyContent>
                        <Nav />
                        <Social />
                        <Email />

                        <StyledMainContent id="content">
                            {children}
                        </StyledMainContent>
                    </StyledBodyContent>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Layout;