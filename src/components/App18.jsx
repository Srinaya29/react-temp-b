import React from 'react'
import { useState } from 'react';
export default function App18() {
    const [num, setNum] = useState(10);
    const [count,setCount]=useState(0);
    const f1= () =>{
        let i;
        for(i=0;i<num**2;i++){}
        return i;
    };
    const result=f1()
    return (
        <div>
            <h3>This is App18</h3>
            {result}
            <p>
                <button onClick={() =>setCount(count+1)}>Increase Count</button>
                {count}
            </p>
        </div>
  );
}
