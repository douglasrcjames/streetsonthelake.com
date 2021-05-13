import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import coupleKiss from "../../assets/images/couple/267A3367.png";
import PhotoGallery from "../misc/PhotoGallery";
import { weddingParty } from '../../utils/constants';
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
                <div className="hero-img">
                </div>
                <div className="wrapper">
                    <h1>Our Story</h1>
                    <Grid fluid>
                        <Row>
                            <Col md={12} lg={8}>
                                <Row start="xs" style={{paddingRight: "25px"}}>
                                    <Col>
                                        <p>
                                            Cooper &amp; Sarah both grew up here in Alaska, but didn't meet until the summer of 2014 when their friend/matchmaker John, invited the two out to Big Lake for Memorial Day weekend. 
                                            They hit it off right away! Sarah was intrigued by Cooper's good looks, quick wit and sense of humor and Cooper was drawn in by Sarah's infectious smile and curly hair. 
                                            They didn't waste any time and started dating right after that weekend. Then, Sarah's dad, Dave saw she was texting Cooper Street, and it turns out he knew the Streets pretty well. 
                                            Dave was the assistant coach at UAF when Keith, Cooper's dad, played college hockey there and they have many funny memories on the road with the team. 
                                            The Street &amp; Laurion families have been around each other for years, and now they're going to be family! 

                                        </p>
                                        <p>
                                            Since that summer, Cooper &amp; Sarah have spent the past 7 years figuring out life together. College graduations, new jobs, living together, raising their dog, Louise and then the biggest milestone, 
                                            when Cooper decided to make it official and ask Sarah the big question! They got engaged in Whittier, Alaska on a camping trip with some of their closest friends and popped some champagne around the 
                                            fire to celebrate. Then, to add to the excitement, they bought their first house and are welcoming a new addition to the family in June, Lady, their new bloodhound pup! They have built a 
                                            beautiful life together so far that will continue to grow and flourish as they commit to a lifetime of "figuring it out" together. 
                                        </p>
                                        <p>
                                            Cooper &amp; Sarah are beyond excited to celebrate their love and dance the night away with all their closest friends & family at Big Lake where their love story began! 
                                        </p>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col md={12} lg={4}>
                                <Row end="xs" center="xs">
                                    <Col className="border-salmon">
                                        <div >
                                            <img src={coupleKiss} alt={"couple kiss"} style={{  width: "100%", height: "auto", maxWidth: "500px"}} className="border-pink"/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>

                    <svg 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 1366 221" 
                        xmlSpace="preserve"
                        className="fill-svg-navy"
                    >
                        <g>
                            <g>
                                <path class="st0" d="M104.9,200.2c11.5,0.3,23.1,0.1,34.3-2.6c10.5-2.6,20.8-5.7,30.9-9.4c4.6-1.6,9.1-3.3,13.6-5.1
                                    c2.6-1,5.2-2.1,7.7-3.2c-0.9,0.4,7.3-3.1,4.4-1.9c-3.1,1.3,5.1-2.2,6.4-2.8c9.9-4.6,19.5-9.7,29.1-15c38.2-21,74.2-45.5,112.6-66
                                    c9.4-5,18.8-9.9,28.4-14.5c4.8-2.3,9.6-4.4,14.5-6.6c3.5-1.5-3.7,1.5-0.2,0.1c1-0.4,2-0.8,2.9-1.2c3-1.2,5.9-2.3,8.9-3.4
                                    c9.8-3.6,19.7-6.6,29.8-9c4.6-1.1,9.2-2,13.8-2.9c2-0.4,5.9-1.7,8-1.3c-0.6-0.1-5.9,0.7-0.8,0.1c1.3-0.1,2.7-0.3,4-0.4
                                    c10.3-1,20.6-1.3,30.9-0.8c2.3,0.1,4.6,0.3,6.9,0.5c1.5,0.1,9.9,0.4,3,0.2c5.1,0.1,10.6,1.8,15.5,3c4.5,1.1,8.9,2.4,13.2,3.9
                                    c2.3,0.8,5.3,1.4,7.4,2.7c-0.6-0.4-5.1-2.3-0.7-0.3c1.2,0.6,2.4,1.1,3.6,1.7c9.5,4.6,18.4,10.3,26.9,16.5c1.6,1.2,6.3,4.4,2.1,1.5
                                    c2.2,1.5,4.3,3.4,6.4,5.1c4.3,3.5,8.4,7,12.6,10.6c7.8,6.7,15.5,13.4,23.6,19.9c17.3,13.9,35.3,26.7,54.5,37.8
                                    c36.8,21.6,76.9,37.8,118,47.6c85.4,20.3,174,12.6,257.3-13.2c84.4-26.1,164.5-65.2,241.3-108.5c10.7-6,20.2-13.2,29.6-21.1
                                    c8.6-7.3,10.1-22.9,4.2-32.2c-6.1-9.5-18.6-16.1-30-12.2c-12,4.1-23.3,9.1-34.3,15.3c-9.2,5.2-18.4,10.4-27.7,15.6
                                    c-18.9,10.5-37.7,21.2-56.8,31.3c-19.3,10.3-38.9,20.2-58.7,29.4c-9.5,4.4-19.1,8.9-28.8,12.9c0.8-0.3,5.1-2.1,0.5-0.2
                                    c-1,0.4-1.9,0.8-2.9,1.2c-2.6,1.1-5.2,2.1-7.8,3.2c-4.9,1.9-9.8,3.7-14.7,5.5c-20.3,7.2-40.8,13.6-61.7,18.8
                                    c-10,2.5-20.1,4.7-30.3,6.6c-5.1,1-10.2,1.8-15.3,2.6c-2.4,0.4-4.8,0.7-7.1,1.1c-1.3,0.2-5,1,0.8-0.1c-1.7,0.3-3.4,0.4-5.1,0.6
                                    c-20.9,2.5-42.1,3.5-63.2,3c-10.1-0.3-20.2-0.9-30.2-1.9c-2.6-0.3-5.3-0.6-7.9-0.9c-0.6-0.1-4-0.6-0.5,0c3.7,0.6-0.5-0.1-1.5-0.2
                                    c-5.3-0.8-10.5-1.6-15.7-2.6c-19.9-3.7-39.6-8.9-58.7-15.5c-4.4-1.5-8.8-3.1-13.1-4.8c-2.5-0.9-5-1.9-7.4-2.9
                                    c-1.1-0.5-2.7-0.9-3.7-1.5c1.6,1,3.6,1.5,0.7,0.3c-9.4-4.1-18.7-8.5-27.9-13.3c-17.9-9.4-35.2-20.2-51.5-32.2
                                    c-1.9-1.4-3.7-2.8-5.6-4.2c-3-2.2,3.4,2.7,0.5,0.4c-1-0.8-2.1-1.6-3.1-2.5c-4-3.2-7.9-6.5-11.8-9.8c-8.1-6.9-16.1-13.9-24.4-20.6
                                    c-18.8-15.2-37.9-28.1-60.5-37c-20.1-7.9-42.2-11.5-63.7-12c-45.2-1.1-89.1,12.1-129.6,31.3c-39.1,18.6-74.4,44.4-110.4,68.2
                                    c-17.9,11.8-36,23.3-54.8,33.6c-18.9,10.3-36.1,19.5-55,26.1c-10.2,3.6-19.2,8-29.2,11.8C87.9,179.4,89.2,199.8,104.9,200.2
                                    L104.9,200.2z"/>
                            </g>
                        </g>
                    </svg>
                    <h2>Gallery</h2>
                    <div className="center-text">
                        <PhotoGallery photos={weddingParty}/>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(CanaryHome);
