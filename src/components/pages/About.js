import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import ContactForm from '../misc/ContactForm';

export default class About extends Component {

    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>About | Streets on the Lake</title>
                </Helmet>
                <Link to="/">
                    <button className="md-black-btn">
                            <i className="fas fa-arrow-left" />&nbsp; Back
                    </button>
                </Link>
                
                <h1 className="montserrat-regular">Contact Us</h1>
                <p>Just want to say hi or have a question? Anything is welcome, let us know!</p>
                <ContactForm />
                <div className="center">
                    <img src={require('../../assets/images/couple/267A3130.jpg')} alt={"sarah and cooper looking at each other"} className="xxlarge left" style={{border: "black 4px solid"}}  />
                    <img src={require('../../assets/images/couple/267A4296.jpg')} alt={"sarah and cooper holding hands sunset"} className="xxlarge right" style={{border: "black 4px solid"}} />
                </div>
               
            </div>
        )
    }
}
