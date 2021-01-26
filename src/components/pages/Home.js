import React, { Component } from 'react'
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
                    <h1 className={this.state.deviceWidth > 900 ? "h-split-logo-text" : "v-split-logo-text"}>Cooper + Sarah</h1>
                    <div className="centered white">
                        <p className="lg-text">08.28.21 - Big Lake, Alaska</p>
                        <h2 className="white montserrat-regular">Working on the details.</h2>
                        <p className="lg-text">Updates to come, stay tuned.</p>
                        <Link to="/about">
                            <button type="button" className="md-white-to-inv-btn">Contact us</button>
                        </Link>
                       
                    </div>
                </div>

                <div className={this.state.deviceWidth > 900 ? "h-split right-side overflow-hidden" : "bottom-side"}>
                    
                </div>
            </>
        )
    }
}

export default withRouter(CanaryHome);
