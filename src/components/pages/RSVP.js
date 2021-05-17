import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field, Form } from 'formik';
import {Link} from 'react-router-dom';
import { rsvpNameSchema, rsvpCheckInSchema } from '../../utils/formSchemas'
import { firestore } from "../../Fire.js";
import Footer from '../misc/Footer'
import { NOTIFICATION } from '../../utils/constants';
import { store } from 'react-notifications-component';

export default class RSVP extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nameValidated: "",
            groupGuests: [],
            reservationComplete: false
        }
    }
    
    checkName(values){
        if(values.name === "Guest"){
            store.addNotification({
                title: "Guest register",
                message: `Sorry, but you cannot register as just 'Guest', we need the main invitee's name.`,
                type: "warning",
                ...NOTIFICATION
            })
        } else {
            firestore.collection("sensitive").doc("guests").get().then((doc) => {
                if(doc.exists){
                    if(doc.data().unregistered && doc.data().unregistered.find(guest => guest.name === values.name)){
                        store.addNotification({
                            title: "Success",
                            message: `Nice, you are on the guest list and unregistered. We are just going to grab your info now!`,
                            type: "success",
                            ...NOTIFICATION
                        })
    
                        let registeringGuest = doc.data().unregistered.find(guest => guest.name === values.name)
                        let groupGuests = doc.data().unregistered.filter(guest => guest.group === registeringGuest.group) // Based on registeringGuest group, find other group members
    
                        this.setState({
                            nameValidated: registeringGuest,
                            groupGuests: groupGuests
                        })
                    } else if(doc.data().registered && doc.data().registered.find(guest => guest.name === values.name)) {
                        store.addNotification({
                            title: "Already registered",
                            message: `The user under this email has already registered and selected a gift. If you find this to be a mistake, please contact below.`,
                            type: "warning",
                            ...NOTIFICATION
                        })
                    } else {
                        store.addNotification({
                            title: "Error",
                            message: `Sorry, but it doesn't look like you are on the guest list. Contact us below if you find this a mistake!`,
                            type: "danger",
                            ...NOTIFICATION
                        })
                    }
                } else {
                    store.addNotification({
                        title: "Error",
                        message: `Administrator has yet to add a guest list. Check back soon to sign in.`,
                        type: "danger",
                        ...NOTIFICATION
                    })
                    console.error("Guests document doesn't exist yet.")
                }
            }).catch((error) => {
                console.error("Error getting guests document: ", error);
            });
        }
        
    }

    guestCheckIn = (values) => {
        let confirmedGuests = this.state.groupGuests;
        let radioPass = true
        // Loop through guests in group
        this.state.groupGuests.forEach((guest, i) => {
            console.log("Checking guest: " + guest.name + "....")
            // if that guest checked yes, then set in confirmedGuests
            if(values[`index${i}AttendCheck`] === 'Yes'){
                confirmedGuests[i].attending = true;
            } else if(values[`index${i}AttendCheck`] === 'No') {
                confirmedGuests[i].attending = false;
            } else {
                console.log("Looks like user didn't fill in all the radios...")
                radioPass = false
            }
        })

        if(radioPass){
            firestore.collection("reservations").add({
                guests: confirmedGuests,
                partySize: values.partySize,
                message: values.message,
                timestamp: Date.now()
            }).then(
                store.addNotification({
                    title: "Success",
                    message: `Thanks for your reservation!`,
                    type: "success",
                    ...NOTIFICATION
                })
            );

            this.setState({
                reservationComplete: true
            })
        } else {
            store.addNotification({
                title: "Incomplete",
                message: `Looks like you forgot to give a response for every guest! If you are still unsure on everyone, wait until you are know, come back here and give the response.`,
                type: "danger",
                ...NOTIFICATION
            })
        }
    }
    
    render() {
        return (
            <>
                <div className="wrapper">
                    <h1 className="no-margin">RSVP</h1>
                    {!this.state.nameValidated && (
                        <div>
                            <p>
                                You will be RSVPing for all members in your group at once, so make sure you know what their plans are too!
                                Please enter your name exactly as it appears on the invitation you received in the mail. 
                            </p>
                            <p>This includes capital letters! Here are some examples:</p>
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

                            <div className="hr-navy" />
                            <Formik
                                initialValues={{name: ""}}
                                onSubmit={(values, actions) => {
                                    this.checkName(values);
                                }}
                                validationSchema={rsvpNameSchema}
                            >
                                {props => (
                                    <Form>
                                        <Grid fluid>
                                            <Row center="xs">
                                                <Col sm={12} md={6} className="sm-margin-b">
                                                    <label>Guest Name:</label>
                                                    <br/>
                                                    <Field
                                                        type="text"
                                                        required
                                                        onChange={props.handleChange}
                                                        placeholder="John Doe"
                                                        name="name"
                                                        value={props.values.name}
                                                    />
                                                    <br/>
                                                    {props.errors.name && props.touched.name ? (
                                                        <span className="red">{props.errors.name}</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                    
                                                </Col>
                                            </Row>
                                            <Row center="xs">
                                                <Col xs={12}>
                                                    <button 
                                                        type="submit"
                                                        className="md-blue-btn" 
                                                        disabled={!props.dirty && !props.isSubmitting}>
                                                            Submit
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    )}

                    { this.state.nameValidated && !this.state.reservationComplete && (
                        <div>
                            <h3 className="no-margin">Hi, {this.state.nameValidated.name}!</h3>
                            <h4 className="no-margin">Please respond to the wedding invite by filling out the form below.</h4>
                            <Formik
                                initialValues={{partySize: "", message: ""}}
                                onSubmit={(values, actions) => {
                                    this.guestCheckIn(values);
                                }}
                                validationSchema={rsvpCheckInSchema}
                            >
                                {props => (
                                    <Form>
                                        <Grid fluid>
                                            <Row center="xs">
                                                { 
                                                    this.state.groupGuests.map((guest, i) => {
                                                        return (
                                                            <Col sm={12} key={i}>
                                                                <div>
                                                                    <label>{guest.name}</label>
                                                                    <br/>
                                                                    <Field
                                                                        className="radio"
                                                                        type="radio"
                                                                        name={`index${i}AttendCheck`}
                                                                        value={`Yes`}
                                                                    />
                                                                    <span>Attending</span>
                                                                    <br/>
                                                                    <Field
                                                                        className="radio"
                                                                        type="radio"
                                                                        name={`index${i}AttendCheck`}
                                                                        value={`No`}
                                                                    />
                                                                    <span>Not attending</span>
                                                                </div>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                            
                                            <br/>
                                            <Row center="xs">
                                                <Col sm={12} md={6} className="sm-margin-b">
                                                    <label>How many people will be in your party?:</label>
                                                    <br/>
                                                    <Field
                                                        type="number"
                                                        required
                                                        onChange={props.handleChange}
                                                        placeholder={0}
                                                        name="partySize"
                                                        value={props.values.partySize}
                                                    />
                                                    <br/>
                                                    {props.errors.partySize && props.touched.partySize ? (
                                                        <span className="red">{props.errors.partySize}</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                    
                                                </Col>
                                            </Row>
                                            <Row center="xs">
                                                <Col xs={12}>
                                                    <label>Optional Message:</label>
                                                    <br/>
                                                    <Field
                                                        component="textarea"
                                                        onChange={props.handleChange}
                                                        placeholder="Anything else you'd like to add?"
                                                        name="message"
                                                        value={props.values.message}
                                                    />
                                                    <br/>
                                                    {props.errors.message && props.touched.message ? (
                                                        <span className="red">{props.errors.message}</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row center="xs">
                                                <Col xs={12}>
                                                    <button 
                                                        type="submit"
                                                        className="md-blue-btn" 
                                                        disabled={!props.dirty && !props.isSubmitting}>
                                                            Submit
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    )}

                    {this.state.reservationComplete && (
                        <div className="center-text">
                            <h3 className="no-margin">Reservation complete!</h3>
                            <p>Thanks for RSVPing!</p>
                            <Link to="/event">
                                <button className="md-blue-btn">Check out the event details</button>
                            </Link>
                        </div>
                    )}

                    <div className="center-text" style={{paddingBottom: "50px"}}>
                        <div className="hr-navy" />
                        <p>Having issues? <Link to="/about">Contact us!</Link></p>
                    </div>
                </div>
                
            <Footer />
          </>
        )
    }
}
