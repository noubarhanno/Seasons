import React from 'react';
import './SeasonStyle.css';

const seasonConfig = {
    summer:{
        text: "Let's hit the beach!",
        iconName: 'sun icon massive'
    },
    winter:{
        text: "Burr it's Cold",
        iconName: "snowflake icon massive"
    }
}

const getSeason = (lat, month) => {
    if (month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} left`}></i>
            <div><h1>{text}</h1></div>
            <i className={`${iconName} right`}></i>
        </div>
    )
}

export default SeasonDisplay;