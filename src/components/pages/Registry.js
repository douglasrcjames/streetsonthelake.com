import React, { Component } from 'react'

export default class Registry extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="no-margin">Registry</h1>
                <p>We are using Zola for our registry services, please visit the link below to checkout the wedding registry of gifts.</p>
                <a href={`https://www.zola.com/registry/sarah-cooper`} target="_blank" rel="noopener noreferrer">
                    <button className="md-blue-btn">Zola Registry</button>
                </a>
                
            </div>
        )
    }
}
