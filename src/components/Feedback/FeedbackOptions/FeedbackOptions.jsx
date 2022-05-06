import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={s.buttonList}>
            {options.map(option => {
                return (
                    <button
                        className={s.button}    
                        type="button"
                        name={option}
                        onClick={() =>
                            onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                );
            })}
        </ul>
    );
};

export default FeedbackOptions;