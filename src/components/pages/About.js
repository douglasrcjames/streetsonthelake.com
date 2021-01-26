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
                
                <h1>About</h1>
                <p>Questions already? Just want to say hi? Anything is welcome, let us know!</p>
                <ContactForm />
                
            </div>
        )
    }
}
