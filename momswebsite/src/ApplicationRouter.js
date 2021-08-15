import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import AboutPage from './PageComponents/About/aboutIndex'
import ContactPage from './PageComponents/Contact/contactIndex'
import HomePage from './PageComponents/Home/homeIndex'
import PortfolioPage from './PageComponents/Portfolio/portfolioIndex'
import ServicePage from './PageComponents/Services/serviceIndex'
import BookOnlinePage from './PageComponents/BookOnline/bookOnlineIndex'
import Header from './PageComponents/Header/headerIndex'
import Footer from './PageComponents/Footer/footerIndex'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route
                        exact path = {'/'}
                        render = {() => (
                            <HomePage/>
                        )}
                    />
                    <Route
                        path = {'/About'}
                        render = {() => (
                            <AboutPage/>
                        )}
                    />
                    <Route
                        path = {'/Services'}
                        render = {() => (
                            <ServicePage/>
                        )}
                    />
                    <Route
                        path = {'/Portfolio'}
                        render = {() => (
                            <PortfolioPage/>
                        )}
                    />
                    <Route
                        path = {'/Booking'}
                        render = {() => (
                            <BookOnlinePage/>
                        )}
                    />
                    <Route
                        path = {'/Contact'}
                        render = {() => (
                            <ContactPage/>
                        )}
                    />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    )
};

export default AppRouter;