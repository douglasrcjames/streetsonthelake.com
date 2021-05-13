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

                <h2 className="sm-margin-t">Wedding Party</h2>
                <p>
                    <b>Bride's Parents:</b><br/>
                    <u>David &amp; Tracey Laurion</u>
                </p>
                <p>
                    <b>Groom's Parents:</b><br/>
                    <u>Keith Street &amp; Rhonda Farrell</u> 
                </p>
                <p>
                    <b>Officiant:</b><br/>
                    <u>Jimmy Christianson</u>
                </p>
                <p>
                    <b>Ring Bearer:</b><br/>
                    <u>Quinn Diessner</u>
                </p>
                <p>
                    <b>Wedding Party:</b><br/>
                    <u>Mackenzie Diessner</u> - Matron Of Honor, Sarah's big sister <br/>
                    <u>Sydney Laurion</u> - Maid of Honor, Sarah's little sister <br/>
                    <u>Kylie Ramos</u> - Bridesmaid, Cooper's sister  <br/>
                    <u>Mattisen Sept</u> - Bridesmaid, childhood friend  <br/>
                    <u>Chloe Lindsey</u> - Bridesmaid, PIC &amp; friend  <br/>
                    <u>Shea Prestegard</u> - Bridesmaid, friend &amp; sister <br/>
                    <u>Ashley Taylor</u> - Bridesmaid, Tridelta sorority sister  <br/>
                    <u>Ana Campos</u> - Bridesmaid, Tridelta sorority sister <br/>
                    <u>Ellicia Turner</u> - Bridesmaid, childhood dance partner  <br/>
                    <u>Michayla Nice</u> - Bridesmaid, childhood friend  <br/>
                </p>
                <p>
                    <u>Erik Scott</u> - Best Man, Riding buddy &amp; friend <br/>
                    <u>Adrian Ramos</u> - Groomsmen, Brother-in-law &amp; friend <br/>
                    <u>Hayden Wright</u> - Groomsmen, childhood PIC &amp; friend <br/>
                    <u>John Regnart</u> - Groomsmen, childhood friend <br/>
                    <u>Alex Prestegard</u> - Groomsmen, childhood friend <br/>
                    <u>Bobby Murphy</u> - Groomsmen, childhood friend <br/>
                    <u>Chase Crabb</u> - Groomsmen, childhood friend<br/>
                    <u>Dylan Clowers</u> - Groomsmen, childhood friend <br/>
                    <u>Adam Harkreader</u> - Groomsmen, friend &amp; old landlord <br/>
                    <u>Lucas Nokelby</u> - Groomsmen, childhood friend &amp; riding buddy<br/>
                </p>
                <p>
                    <u>Cole Christianson</u> - Honorary Groomsmen, Cooper's Bestfriend. If heaven wasn't so far away, you would be by our side on our wedding day. RIP (heart) 
                </p>

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
                {/* TODO: MAP HERE from Google for now? */}
            </div>
        )
    }
}
