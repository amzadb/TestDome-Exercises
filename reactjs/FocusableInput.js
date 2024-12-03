// Finish the FocusableInput component so that it renders an input element 
// automatically receives focus on the first render if the shouldFocus prop is true.

import React from 'react';
import { createRoot } from 'react-dom/client';

const FocusableInput = (props) => {
  // Write your code here
  if (props.shouldFocus) {
    return <input autoFocus />;
  } else {
    return <input />;
  }
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);