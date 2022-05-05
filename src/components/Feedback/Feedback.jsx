import React from 'react';
// import PropTypes from 'prop-types';

class Counter extends React.Component{
    render() {
        return (
        <div>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
            <button>Bad</button>
            <h3>Statistics</h3>
            <ul>
                <li>Good: <span>0</span> </li>
                <li>Neutral: <span>0</span> </li>
                <li>Bad: <span>0</span> </li>
            </ul>
            </div>
    )
    }
}

export default Counter;

// export default function Feedback() {
//     return (
//         <div>
//         <h2>Please leave feedback</h2>
//         <button>Good</button>
//         <button>Neutral</button>
//             <button>Bad</button>
//             <h3>Statistics</h3>
//             <ul>
//                 <li>Good: <span>0</span> </li>
//                 <li>Neutral: <span>0</span> </li>
//                 <li>Bad: <span>0</span> </li>
//             </ul>
//             </div>
//     )
// }