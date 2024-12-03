// An RPG game lets you assign points to various attributes of your character to improve it.
// The points earned by the character are available to assign across all attributes.
// Each attribute can only be assigned at most 70% of totalPoints unless totalPoints is 1,
// in which case only one attribute can get a maximum of 1 point.
// The sum of all the points assigned plus the remaining points should add upto totalPoints.

// Implement the CharacterAttributes component with the logic described above and the following requirements:
// Points should be assigned by moving the slider and the remaining points should be displayed in the span tag.
// When initialized, all points are available and all sliders start at 0.
// Each slider must have a range from 0 upto totalPoints.

// For example, if totalPoints is 15, then the user shouldn't be able 
// to drag the slider past 10 even if more points available.

import React from "react";
import ReactDOM from "react-dom";

function CharacterAttributes({ totalPoints }) {

    const [health, setHealth] = React.useState(0);
    const [stamina, setStamina] = React.useState(0);
    const [speed, setSpeed] = React.useState(0);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        setScore(() => stamina + speed + health);
    }, [health, stamina, speed]);

    const handleChange = (e) => {
      
        const isWithinThreshold = +e.target.value <= Math.floor(totalPoints * 0.7);
        const isTotalPointsOne = totalPoints === 1;

        if (e.target.name === "health") {
            if ((isTotalPointsOne && stamina === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && +e.target.value + stamina + speed <= totalPoints)) {
                setHealth(+e.target.value);
            }
        } else if (e.target.name === "stamina") {
            if ((isTotalPointsOne && health === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + +e.target.value + speed <= totalPoints)) {
                setStamina(+e.target.value);
            }
        } else if (e.target.name === "speed") {
            if ((isTotalPointsOne && health === 0 && stamina === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + stamina + +e.target.value <= totalPoints)) {
                setSpeed(+e.target.value);
            }
        }
    };

    return (
        <div>
            Character stats: <span id="points">{Number(totalPoints) - score}</span> points left.
            <div>
                <input type="range" id="health" name="health" min="0" 
                max={totalPoints} value={health} step="1" 
                onChange={(e) => handleChange(e)} />Health
            </div>
            <div>
                <input type="range" id="stamina" name="stamina" min="0" 
                max={totalPoints} value={stamina} step="1" 
                onChange={(e) => handleChange(e)} />Stamina
            </div>
            <div>
                <input type="range" id="speed" name="speed" min="0" 
                max={totalPoints} value={speed} step="1" 
                onChange={(e) => handleChange(e)} />Speed
            </div>
        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);
