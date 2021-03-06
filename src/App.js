import React from 'react';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import history from './history';
import Routes from "./routes";
import ReactNotification from 'react-notifications-component'

// Components
import Header from './components/misc/Header';
// import Footer from './components/misc/Footer';

// CSS
import "./assets/css/Text.scss";
import "./assets/css/Align.scss";
import "./assets/css/Images.scss";
import "./assets/css/Forms.scss";
import "./assets/css/Misc.scss";
import "./assets/css/PhotoGallery.scss";
import 'react-notifications-component/dist/theme.css'

// This component fixes bug where new page load would sometimes be in the middle or bottom
import ScrollToTop from "./components/misc/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <Router history={history}>
        <ReactNotification />
        <ScrollToTop>
          <Header />
          <Routes />
          {/* <Footer /> */}
        </ScrollToTop>
      </Router>
    </HelmetProvider>
    
  );
}

export default App;
