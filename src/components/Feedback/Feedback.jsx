import React from 'react';
// import PropTypes from 'prop-types';

class Counter extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
    };

        handleNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));
    };

            handleBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
        <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGood}>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
            <button type="button" onClick={this.handleBad}>Bad</button>
            <h3>Statistics</h3>
            <ul>
                    <li>Good: <span>{this.state.good}</span> </li>
                <li>Neutral: <span>{this.state.neutral}</span> </li>
                <li>Bad: <span>{this.state.bad}</span> </li>
            </ul>
            </div>
    )
    }
}

export default Counter;