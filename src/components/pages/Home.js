import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
 
class CanaryHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             deviceWidth: 0,
             deviceHeight: 0
        }
    }

    componentDidMount(){
        if(this.deviceWidth > 900){
            document.body.style.overflow = "hidden";
        }
        
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }  


    render() {
        return (
            <>
                <Helmet>
                    <title>Streets on the Lake</title>
                </Helmet>
                <div className={this.state.deviceWidth > 900 ? "h-split left-side" : "top-side"}>
                    <h1 className={this.state.deviceWidth > 900 ? "h-split-logo-text" : "v-split-logo-text"}>Cooper &amp; Sarah</h1>
                    <div className="centered white">
                        <h2 className="white montserrat-regular">UNDER CONSTRUCTION</h2>
                        {/* <Link to="/about">
                            <button type="button" className="md-white-to-inv-btn">Questions?</button>
                        </Link> */}
                       
                    </div>
                </div>

                <div className={this.state.deviceWidth > 900 ? "h-split right-side overflow-hidden" : "bottom-side"}>
                    
                </div>
            </>
        )
    }
}

export default withRouter(CanaryHome);
