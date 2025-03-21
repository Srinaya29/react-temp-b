import React, { useState } from "react";

export default function App8() {
  const [num, setNum] = useState([]); // State for storing numbers
  const [text, setText] = useState(""); // State for input field
  const [sum, setSum] = useState(0); // State to track the sum

  const handleSubmit = () => {
    if (text.trim() !== "") { // Prevent empty values
      const newNumber = Number(text); // Convert input to number
      setNum([...num, newNumber]); // Add to the list
      setSum(sum + newNumber); // Update sum
      setText(""); // Clear input after adding
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter any number"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <hr />
      <ul>
        {num.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h3>Total Sum: {sum}</h3>
    </div>
  );
}
