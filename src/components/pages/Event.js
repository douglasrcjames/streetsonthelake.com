import React, { Component } from 'react'
import SimpleMap from '../misc/SimpleMap'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import dish from '../../assets/images/icons/dish.png'
import rings from '../../assets/images/icons/engagement.png'
import wave from '../../assets/images/icons/wave.png'
export default class Event extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            year: new Date().getFullYear(),
        }
    }
    
    render() {
        return (
            <>
            <div className="wrapper">
                <h1>The Event</h1>
                <Grid fluid>
                    <Row center="xs">
                        <Col sm={12} md={4}>
                            <img src={dish} alt="dish" style={{ width: "100%", height: "auto", maxWidth: "125px", padding: "25px" }} />
                            <h3>Rehearsal Dinner</h3>
                            <p>
                                <b>Friday, August 27th, 2021</b> <br/>
                                Rehearsal Dinner w/ wedding party | <u>5pm</u> <br/>
                                Stock the Bar / Meet &amp; Greet | <u>7:30-9:30pm</u> 
                            </p>
                        </Col>
                        <Col sm={12} md={4}>
                            <img src={rings} alt="rings marriage" style={{ width: "100%", height: "auto", maxWidth: "125px", padding: "25px" }} />
                            <h3>Ceremony &amp; Reception</h3>
                            <p>
                                <b>Saturday, August 28th, 2021</b> <br/>
                                Wedding Ceremony &amp; Reception <br/>
                                Events start at <u>4pm</u> at Blue Lantern Lodge 
                             </p>
                        </Col>
                        <Col sm={12} md={4}>
                            <img src={wave} alt="hand wave" style={{ width: "100%", height: "auto", maxWidth: "125px", padding: "25px" }} />
                            <h3>Send Off</h3>
                            <p>
                                <b>Sunday, August 29th, 2021</b> <br/>
                                Mr. &amp; Mrs. Street Send Off | <u>2pm</u> 
                            </p>
                        </Col>
                    </Row>
                </Grid>
               
                <h2 className="sm-margin-t">Accommodations</h2>
                <p>See list of cabins, lodges and hotels on and near Big Lake, Alaska.</p>
                <ul>
                    <li>
                        <a 
                            href={`https://www.expedia.com/Hotel-Search?SEMDTL=a111798315447.b1114317737363.r1a32c52d6aaaa46f84041ea05a84efdd9890f763a42730cf1d1b1c82377e2911f.g1kwd-11796680036.i1.d1484874726568.e1c.j19033845.k1.f1.n1.l1g.h1e.m1&adults=2&destination=Big%20Lake%2C%20Alaska%2C%20United%20States%20of%20America&directFlights=false&endDate=2021-05-27&gclid=CjwKCAjw-e2EBhAhEiwAJI5jg4dOJzacG5w1YPe-E9IoBgF06pHvVU2U0seuiTy6ZyrrNC0KjNMOyRoCCrYQAvD_BwE&hotels-destination=Big%20Lake&latLong=61.5346263112115%2C-149.97237456606058&localDateFormat=M%2Fd%2Fyyyy&locale=en_US&partialStay=false&regionId=6084359&semcid=US.UB.GOOGLE.DT-c-EN.HOTEL&semdtl=&siteid=1&sort=RECOMMENDED&startDate=2021-05-26&theme=&useRewards=true&userIntent=`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Expedia
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`https://www.airbnb.com/s/Big-Lake--AK--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=june&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Big%20Lake%2C%20AK%2C%20United%20States&place_id=ChIJOQPrBg7PyFYRVTbZE6wprMc&checkin=2021-08-27&checkout=2021-08-29&disable_auto_translation=false&source=structured_search_input_header&search_type=autocomplete_click`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Airbnb
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`https://www.vrbo.com/search/keywords:big-lake-alaska-united-states-of-america/arrival:2021-08-27/departure:2021-08-29?petIncluded=false&filterByTotalPrice=true`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vrbo
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`https://www.bestwestern.com/en_US/book/hotel-rooms.02011.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:02011`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Best Western
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`http://dnr.alaska.gov/parks/aspunits/matsu/biglakenosrs.htm`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Big Lake Campgrounds
                        </a>
                    </li>
                </ul>
            </div>
                
            <SimpleMap />
            <div className="bg-navy" style={{padding: "40px 20px"}}>
                <div className="left white">
                    &copy;
                    {' '}
                    {this.state.year}
                    {' '}
                    Streets on the Lake
                </div>
                <div className="center-text">
                    <Link to="/credits" className="white">Icon Credits</Link>
                </div>
                <div className="right white">
                    <a className="white text-hover" href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                </div>
            </div>
            </>
        )
    }
}
