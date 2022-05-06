import React from "react";

const Controls = ({onHandleFeedback}) => (
    <div>
        <button type="button" name="good" onClick={onHandleFeedback}>Good</button>
        <button type="button" name="neutral" onClick={onHandleFeedback}>Neutral</button>
        <button type="button" name="bad" onClick={onHandleFeedback}>Bad</button>
    </div>
);

export default Controls;