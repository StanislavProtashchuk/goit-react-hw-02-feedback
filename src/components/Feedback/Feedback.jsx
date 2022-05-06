import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Counter extends Component{
    static total = 0;
    static percentPositivFeedback  = 0;

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = name => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };

    countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        this.percentPositivFeedback = Math.round((this.state.good / this.total) * 100);
    }

    render() {
        const buttons = Object.keys(this.state);
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={buttons}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.total === 0 ? (
                        <Notification message="There is no feedback" />) : (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.total}
                            positivePercentage={this.percentPositivFeedback}
                        />
                    )}
                </Section>    
            </div>
        );
    };
};

export default Counter;