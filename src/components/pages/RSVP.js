import React, { Component } from 'react'
import ContactForm from '../misc/ContactForm'
import Footer from '../misc/Footer'
export default class RSVP extends Component {
    render() {
        return (
            <>
            {/* Review our meeting notes on this part */}
            {/* TODO: validate with name on invite */}
            {/* Is there a code on the invite? */}
            {/* Render their name back to them when we verify them */}
            {/* # of people in party? coming/not coming radio buttons.... Notes textarea */}
                <div className="wrapper">
                    <h1>RSVP</h1>
                    <ContactForm />
                </div>
                
            <Footer />
          </>
        )
    }
}
