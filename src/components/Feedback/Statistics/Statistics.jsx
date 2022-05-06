import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={s.item}>
            <li className={s.good}>Good: {good}</li>
            <li className={s.neutral}>Neutral: {neutral}</li>
            <li className={s.bad}>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};

export default Statistics;