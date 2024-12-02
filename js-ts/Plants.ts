let plants = ["Oak", "Elm", "Beech"];
plants["Tree"] = "Ash";
plants["Tree"] = "Cherry"
plants["Flower"] = "Rose"

var garden: string[] = []

for (let plant in plants) {
      garden.push(plant);
}

for (let plant of plants) {
      garden.push(plant);
} 

console.log(garden)

// Select all acceptable answers:

// A. The garden varicible contains two copies of the values. "Oak", "Elm", "Beech", "Ash", "Cherry" and "Rose
// B. The garden variable contains the integer values: 0, 1 and 2.
// C. The garden variable contains the values: "Oak", "Elm" and "Beech".
// D. The garden variable contains the values: "Oak", "Elm", "Beech" and "Rose".
// E. The garden variable contains two copies of the value "Rose"

// Correct Answers: B and C