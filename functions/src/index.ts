"use strict";
import functions = require('firebase-functions');
import admin = require("firebase-admin");
import nodemailer = require('nodemailer');
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
admin.initializeApp(functions.config().firebase);

export const onMessageCreated = functions.firestore.document('messages/{messageId}')
  .onCreate(async (snap: { data: () => any; }) => {
    console.log("Message create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h2>New <u>streetsonthelake.com</u> Website Contact</h2>
            <p>
                A new contact message has arrived! You can directly reply to this email to 
                contact the visitor back on their question or inquiry if need be. Their information and message is detailed below.
            </p>
            <h3>Details:</h3>
            <p><u>Name</u>: ${newValue.name}</p>
            <p><u>Email</u>: ${newValue.email}</p>
            <h3>Message:</h3>
            <p>${newValue.message}</p>
        </div>
        `
        // Config it
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: functions.config().email.user,
                pass: functions.config().email.password
            }
        })
        console.log("transporter = " + transporter)

        // Pack it
        const mailOptions = {
            from: `drcj.dev@gmail.com`,
            to: 's.laurion24@gmail.com, douglasrcjames@gmail.com, drcj.dev@gmail.com,',
            replyTo: `${newValue.email}`,
            subject: `New streetsonthelake.com contact from ${newValue.name}`,
            text: newValue.message,
            html: htmlEmail
        }

        // Send it
        return transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(error)
        return;
    }
  });

export const onReservationCreated = functions.firestore.document('reservations/{reservationId}')
    .onCreate(async (snap: DocumentSnapshot, context: functions.EventContext) => {
        const newValue = snap.data();
        if (newValue === null || newValue === undefined) {
            return;
        }
        
        try {
            const allPromises: Array<Promise<any>> = [];      
            
            // First let's get the guest arrays so we can change them 
            allPromises.push(
                admin.firestore().collection('sensitive').doc('guests').get()
                    .then(async (doc) => {
                        if (doc.exists) {
                            console.log("Guests doc exists");
                            const newUnregisteredArray: any[] = doc.data()?.unregistered;
                            const newRegisteredArray: any[] = doc.data()?.registered || [];
                            // Now, search and remove entry from unregistered array and move to registered array
                            newValue.guests.forEach((guest: any, i: any) => {
                                for(let x = 0; x < newUnregisteredArray.length; x++) {
                                    if(newUnregisteredArray[x].name === guest.name && newUnregisteredArray[x].group === guest.group) {
                                        // We got a match, so now remove from unregistered and push to registered
                                        const matchedGuest = newUnregisteredArray.splice(x, 1) 
                                        console.log("matchedGuest: " + matchedGuest[0].name)
                                        newRegisteredArray.push(matchedGuest[0]);
                                        break;
                                    }
                                }
                            })  

                            // Update both arrays with these new changes when we finished
                            allPromises.push(
                                admin.firestore().collection('sensitive').doc('guests').set({
                                    registered: newRegisteredArray,
                                    unregistered: newUnregisteredArray
                                }, {merge: true}).then(() => {
                                    console.log("Moved this user's email from unregistered to registered array.")
                                })
                            );   
                        } else {
                            console.log("Guests doc doesnt exist.")
                        }    
                    })
            ); 

            // Prepare email....
            const rsvpListItems: string[] = [];
            newValue.guests.forEach((guest: any, i: any) => {
                rsvpListItems.push(`<li><b>${guest.name} is ${guest.attending ? "attending!" : "not attending..."}</b></li>`)
            })

            const groupNumber = newValue.guests[0].group
            // Template it
            const htmlEmail = 
            `
            <div>
                <h2>New Wedding RSVP!</h2>
                <p>
                    We got a reservation just now and here are the details:
                </p>
                <p><u>Reservations</u>:</p>
                ${rsvpListItems.join(` `)}
                <p><u>Group Number</u>: ${groupNumber}</p>
                <p><u>Party Size</u>: ${newValue.partySize}</p>
                <h3>Message:</h3>
                <p>${newValue.message}</p>
            </div>
            `
            // Config it
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: functions.config().email.user,
                    pass: functions.config().email.password
                }
            })
            console.log("transporter = " + transporter)

            // Pack it
            const mailOptions = {
                from: `drcj.dev@gmail.com`,
                to: 'drcj.dev@gmail.com, s.laurion24@gmail.com', 
                replyTo: `drcj.dev@gmail.com`,
                subject: `New wedding RSVP from group ${newValue.guests[0].group}!`,
                text: newValue.message,
                html: htmlEmail
            }
            
            allPromises.push(transporter.sendMail(mailOptions));
            return Promise.all(allPromises)
        } catch(error) {
            console.error("Error: " + error);
            return;
        }
});