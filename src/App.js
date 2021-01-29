import React from 'react';
import NavBar from 'components/Navbar/Navbar';
import Slideshow from 'components/Slider/Slider';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalStyles } from 'globalStyles';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';
import About from 'components/About/About';
import Projects from 'components/Projects/Projects';
import Gallery from 'components/Gallery/Gallery';
import Contact from 'components/Contact/Contact';
import AboutPage from 'pages/AboutPage/AboutPage';
import { Footer } from 'components/Contact/ContactStyled';
import ProjectPage from 'pages/ProjectsPage/ProjectsPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import NotFound from 'pages/NotFound';

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Slideshow />
                    <About />
                    <Projects />
                    <Gallery />
                    <Contact />
                </Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/about/:name" component={AboutPage} />
                <Route exact path="/projects" component={Projects}></Route>
                <Route path="/projects/:name" component={ProjectPage} />
                <Route path="/gallery" component={GalleryPage}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
        <Footer>©2021 Privacy policy</Footer>
    </ThemeProvider>
);

export default App;
