import React, { Component } from 'react'

export default class Registry extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Registry</h1>
                <a href={`https://www.zola.com/registry/sarah-cooper`} target="_blank" rel="noopener noreferrer">
                    <button className="md-black-btn">Zola Registry</button>
                </a>
                
            </div>
        )
    }
}
