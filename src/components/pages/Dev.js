import React, { Component } from 'react'
import { CSVLink } from 'react-csv';
import { store } from 'react-notifications-component';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field, Form } from 'formik';

import { devFormSchema } from '../../utils/formSchemas'
import { guestList, NOTIFICATION } from '../../utils/constants';
import { timestampToDateTime } from '../../utils/misc';
import { firestore } from "../../Fire.js";

export default class Dev extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            reservations: [],
            validated: false
        }
    }
    
    createGuestList = () => {
        firestore.collection("sensitive").doc("guests").set({
            unregistered: guestList
        }, {merge: true}).then(
            store.addNotification({
                title: "Created!",
                message: `Guest list created successfully`,
                type: "success",
                ...NOTIFICATION
            })
        );
    }

    exportReservations = () => {
        firestore.collection("reservations")
            .get().then((querySnapshot) => {
                let reservations = []
                querySnapshot.forEach((doc) => {
                    let docWithMore = Object.assign({}, doc.data());
                    docWithMore.dateTime = timestampToDateTime(doc.data().timestamp);
                    docWithMore.dateTimeString = `${timestampToDateTime(doc.data().timestamp).fullDate} @ ${timestampToDateTime(doc.data().timestamp).fullTime}`;
                    let guestStatuses = doc.data().guests;
                    doc.data().guests.forEach((guest, i) => {
                        guestStatuses[i].attending = guest.attending ? "Yes" : "No";
                    })
                    docWithMore.guests = guestStatuses;
                    reservations.push(docWithMore);
                });

                this.setState({
                    reservations: reservations,
                })

                store.addNotification({
                    title: "Grabbed reservations",
                    message: `We just grabbed your ${reservations.length} reservations from the database, ready to download to your computer.`,
                    type: "success",
                    ...NOTIFICATION
                })
            });
    }

    enterPassword = (values) => {
        if(values.password === process.env.REACT_APP_ADMIN_PASS){
            this.setState({
                validated: true
            })
        } else {
            store.addNotification({
                title: "Failed",
                message: `Wrong password.`,
                type: "danger",
                ...NOTIFICATION
            })
        }
    }

    render() {
        const ReservationsCSVHeaders = [
            { label: "Group #", key: "guests[0].group" },
            { label: "Guest 1 Name", key: "guests[0].name" },
            { label: "Guest 1 Attending?", key: "guests[0].attending" },
            { label: "Guest 2 Name", key: "guests[1].name" },
            { label: "Guest 2 Attending?", key: "guests[1].attending" },
            { label: "Guest 3 Name", key: "guests[2].name" },
            { label: "Guest 3 Attending?", key: "guests[2].attending" },
            { label: "Party Size", key: "partySize" },
            { label: "Message", key: "message" },
            { label: "Time Registered", key: "dateTimeString" },
        ];

        if(this.state.validated === false){
            return (
                <div className="wrapper">
                    <Formik
                        initialValues={{password: ""}}
                        onSubmit={(values, actions) => {
                            this.enterPassword(values);
                        }}
                        validationSchema={devFormSchema}
                    >
                        {props => (
                            <Form>
                                <Grid fluid>
                                    {/* Row 1 */}
                                    <Row>
                                        <Col sm={12} md={6} className="sm-margin-b">
                                            <label>Password:</label>
                                            <br/>
                                            <Field
                                                type="password"
                                                required
                                                onChange={props.handleChange}
                                                placeholder="*************"
                                                name="password"
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
                                    <Row className="md-margin-b">
                                        <Col xs={12}>
                                            <button 
                                                type="submit"
                                                className="md-blue-btn" 
                                                disabled={!props.dirty && !props.isSubmitting}
                                            >
                                                    Submit
                                            </button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </div>
            )
        } else {
            return (
                <div className="wrapper">
                    <h1>Dev methods</h1>
                    {this.state.reservations.length === 0 && (
                        <button className="md-blue-btn" onClick={() => this.exportReservations()}>Export reservations from database &nbsp;<i className="fas fa-file-download" /></button>
                    )}
                    {this.state.reservations && this.state.reservations.length !== 0 && (
                        <CSVLink 
                            data={this.state.reservations} 
                            headers={ReservationsCSVHeaders}
                            filename={`${this.state.reservations.length}_wedding_reservations.csv`}
                            onClick={() => {
                                store.addNotification({
                                    title: "Success",
                                    message: `Downloading reservations CSV now...`,
                                    type: "success",
                                    ...NOTIFICATION
                                })
                            }}
                        >
                            <button className="md-blue-btn">Download all reservations &nbsp;<i className="fas fa-file-download" /></button>
                        </CSVLink>
                    )}
                    <br/><br/>
                    {/* <button className="md-blue-btn" onClick={() => this.createGuestList()}>+ Create guest list</button> */}
                </div>
            )
        }
        
    }
}
