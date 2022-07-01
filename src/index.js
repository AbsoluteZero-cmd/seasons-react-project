import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDispaly';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    // when component first shows up
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {}

    // We have to define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>{this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        } else {
            return <Spinner />;
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
