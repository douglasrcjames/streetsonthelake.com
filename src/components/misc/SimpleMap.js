import React, { Component } from 'react'
import { Map, GoogleApiWrapper  } from 'google-maps-react';

class SimpleMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mapStyles: {
                width: '100%',
                height: '100%',
                filter: "grayscale(40%)"
              }
        }
    }
    render() {
        return (
            <div style={{ position: 'relative', width: '100%', height: '50vh', zIndex: "2"}}>

                <Map
                    google={this.props.google}
                    zoom={14}
                    style={this.state.mapStyles}
                    initialCenter={{ lat: 61.534132159114414, lng: -149.83031614877666}}
                >
                    {/* <Marker position={{ lat: 61.534132159114414, lng: -149.83031614877666}} /> */}
                </Map>
            </div>
            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_FIREBASE_LIVE_API_KEY
  })(SimpleMap);
