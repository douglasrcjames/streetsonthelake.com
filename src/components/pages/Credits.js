import React, { Component } from 'react'

export default class Credits extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="no-margin">Credits</h1>
                <p className="no-margin">Taking a moment to appreciate those who helped make this happen.</p>
                <ul>
                    <li><b>Icons</b></li>
                    <ul>
                        <li><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
                        <li><a href="https://www.flaticon.com/authors/pause08" target="_blank" rel="noopener noreferrer">pause08 @ Flaticon.com</a></li>
                        <li><a href="https://www.flaticon.com/authors/turkkub" target="_blank" rel="noopener noreferrer">turkkub @ Flaticon.com</a></li>
                        <li><a href="https://www.flaticon.com/free-icon/wave_4161780" target="_blank" rel="noopener noreferrer">Freepik @ Flaticon.com</a></li>
                    </ul>
                    <li><b>Mom &amp; Dad</b></li>
                </ul>
            </div>
        )
    }
}
