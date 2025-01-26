import { useRef, useState } from "react";
import "./Demo.css"

function Demo(){

    let x = 0; // Local Variable

    const [y, setY] = useState(0); // state variable

    const z = useRef(0);

    function handleX(){
        x = x+1;
        console.log(x);
    }

    function handleY(){
        setY(y+1);
    }

    function handleZ(){
        z.current =z.current + 1;
        console.log(z.current);
    }
    return(
        <>
            <div className="container">
                <h1>X :{x}</h1>
                <button onClick={handleX}>Increase x</button>
                <h1>Y:{y}</h1>
                <button onClick={handleY}>Increase Y</button>
                <h1>Z:{z.current}</h1>
                <button onClick={handleZ}>Increase Z</button>
            </div>
        </>
    )
}

export default Demo;