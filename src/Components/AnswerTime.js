import { useEffect, useState ,useRef} from 'react';
import './AnswerTimer.css';

const AnswerTimer = ({duration,onTimeUp})=>{

    const [counter,setCounter] = useState(0);
    const intervalRef = useRef();
    const [progressLoaded,setProgressLoaded]=useState(0);

useEffect(()=>{

    intervalRef.current = setInterval(()=>{
        setCounter((cur)=>cur+1);

    },1000);

    return ()=> clearInterval(intervalRef.current);
},[]);

useEffect(()=>{


    setProgressLoaded(100*(counter/ duration));


if(counter === duration){

    clearInterval(intervalRef.current);


    setTimeout(()=>{
onTimeUp();
    },1000)
}

},[counter])
    
return(
<>
<div className='answer-timer-container'>

<div 

style={{

width:`${progressLoaded}%`,

}}

className='progress'>

{counter}

</div>
</div>
</>


);

}


export default AnswerTimer;