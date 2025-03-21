import React, { useState } from "react";

export default function App8() {
  const [v1, setV1] = useState(0); // State for first number
  const [v2, setV2] = useState(0); // State for second number

  return (
    <div>
      <p><input
        type="number"
        placeholder="Enter first number"
        value={v1}
        onChange={(event) => setV1(Number(event.target.value))}
      />
      </p>
      <p><input
        type="number"
        placeholder="Enter second number"
        value={v2}
        onChange={(event) => setV2(Number(event.target.value))}
      />
      </p>
      <h3>Total Sum: {v1 + v2}</h3> {/* Dynamic sum */}
      <h3>Total Multiplication: {v1 * v2}</h3>
    </div>
  );
}
