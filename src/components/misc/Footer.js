import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
          deviceWidth: 0,
          deviceHeight: 0
        };
    }
      
    componentDidMount() {
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
            <footer>
                <div className="f-container">
                    <div className="left">
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        Streets on the Lake
                    </div>
                    <div className="right">
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                    </div>
                </div>

            </footer>
        )
    }
}
