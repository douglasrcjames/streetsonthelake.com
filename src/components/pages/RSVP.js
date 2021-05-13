import React, { Component } from 'react'
import ContactForm from '../misc/ContactForm'
import Footer from '../misc/Footer'
export default class RSVP extends Component {
    render() {
        return (
            <>
            {/* Review our meeting notes on this part */}
            {/* Render their name back to them when we verify them */}
            {/* # of people in party? coming/not coming radio buttons.... Notes textarea */}
                <div className="wrapper">
                    <h1>RSVP</h1>
                    <p>
                        Please enter your name exactly as it appears on the invitation you received in the mail. 
                        You will be RSVPing for all members in your group at once, so make sure you know what their plans are too!
                        Such as: 
                    </p>
                        <ul>
                            <li>
                                "John &amp; Jane O'Neil" appears on the invite, you can enter either "John O'Neil" or "Jane O'Neil"
                            </li>
                            <li>
                                "The Smith Family" then enter "The Smith Family"
                            </li>
                            <li>
                                "Taylor Doe &amp; Guest" then you must enter the primary contact, "Taylor Doe" in this case.
                            </li>
                        </ul>

                    <p>Please enter the ZIP code exactly as it appears on the invite envelope you received.</p>

                    <p>Having issues? Contact us below!</p>
                    <ContactForm />
                </div>
                
            <Footer />
          </>
        )
    }
}
