import React, { Component } from 'react'

export default class Event extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Event</h1>
                <p>
                    <b>Friday, August 27th, 2021</b> <br/>
                    Rehearsal Dinner w/ wedding party | 5pm <br/>
                    Stock the Bar / Meet &amp; Greet | 7:30-9:30pm 
                </p>
                <p>
                    <b>Saturday, August 28th, 2021</b> <br/>
                    Wedding Ceremony &amp; Reception <br/>
                    Events start at 4pm at Blue Lantern Lodge 
                 </p>
                <p>
                    <b>Sunday, August 29th, 2021</b> <br/>
                    Mr. &amp; Mrs. Street Send Off | 2pm 
                </p>

                <h2>Accommodations &amp; Parking </h2>
                <p>Lorem ipsum... There will be limited parking available at the venue. Please park on the road or use Uber Code XYZ</p>
                {/* TODO: MAP HERE from Google for now? */}
            </div>
        )
    }
}
