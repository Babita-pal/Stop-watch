
// import Button from './Button';
// import { useState ,useRef} from 'react';


// function Stopwatch(){
//     const startTime =useRef(0);
//     const [elapsedTime,setElapsedTime]=useState(0);
//     const intervalId =useRef(null)


//     const handleStart=()=>{
//         startTime.current=Date.now()
//         intervalId.current=setInterval(()=>{
//             setElapsedTime(Date.now()-startTime.current)

//         },10)


//     }
//     const handleStop=()=>{
//         clearInterval(intervalId.current)
       

        
//         // const handleReset:() => void
//     }
//     const handleReset=()=>{
//         setElapsedTime(0);

//     }

//     const formatTime=()=>{
//         let mins=Math.floor(elapsedTime/(1000 * 60)% 60)
//         let seconds=Math.floor(elapsedTime/(1000) % 60)
//         let milisecond = Math.floor(elapsedTime % 1000 / 10);
//         mins=String(mins).padStart(2,"0");
//         seconds=String(seconds).padStart(2,"0");
//         milisecond = String(milisecond).padStart(2,"0")


//         return `${mins}:${seconds}:${milisecond}`

//     }
//     return(
//         <div>
//             <div>{formatTime()} </div>
//             <div>
//                 <Button text="Start" handleClick={handleStart}/>
//                 <Button text="Stop" handleClick={handleStop}/>
//                 <Button text="Reset" handleClick={handleReset}/>

//                 {/* <button   className='border border-black rounded-md p-2 bg-pink-500'  >Stopt</button>
//                 <button  className='border border-black rounded-md p-2 bg-pink-500'     >Reset</button> */}

//             </div>
//         </div>
//     )
// }
// export default Stopwatch; 

import Button from './Button';
import { useState, useRef } from 'react';

function Stopwatch() {
    const startTime = useRef(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalId = useRef(null);

    const handleStart = () => {
        startTime.current = Date.now();
        intervalId.current = setInterval(() => {
            setElapsedTime(Date.now() - startTime.current);
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalId.current);
    };

    const handleReset = () => {
        setElapsedTime(0);
    };

    const formatTime = () => {
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milisecond = Math.floor(elapsedTime % 1000 / 10);
        mins = String(mins).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milisecond = String(milisecond).padStart(2, "0");

        return `${mins}:${seconds}:${milisecond}`;
    };

    return (
        <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-lg shadow-md w-96 mx-auto mt-32 ">
            <div className="text-4xl font-mono mb-4">{formatTime()}</div>
            <div className="flex space-x-4">
                <Button text="Start" handleClick={handleStart} className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"/>
                <Button text="Stop" handleClick={handleStop} className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"/>
                <Button text="Reset" handleClick={handleReset} className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600"/>
            </div>
        </div>
    );
}

export default Stopwatch;
