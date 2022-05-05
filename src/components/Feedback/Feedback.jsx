import React, {Component} from 'react';
import Controls from './Controls/Controls';
// import PropTypes from 'prop-types';

class Counter extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = (e) => {
        const name = e.target.name;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }));
    };

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <Controls
                    onHandleFeedback={this.handleFeedback}
                />
                <h3>Statistics</h3>
                <ul>
                    <li>Good: <span>{this.state.good}</span> </li>
                    <li>Neutral: <span>{this.state.neutral}</span> </li>
                    <li>Bad: <span>{this.state.bad}</span> </li>
                </ul>
            </div>
        );
    };
};

export default Counter;