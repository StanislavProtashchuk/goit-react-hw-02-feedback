const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(option => {
                return (
                    <button                        
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