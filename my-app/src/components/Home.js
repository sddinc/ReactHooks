import React, {useState,useEffect} from 'react';

function Home() {
////////////////   useSate ////////////////
const [count,setCount]=useState(0);
const [message,setMessage]=useState("Salut");

////////////////   useEffect////////////////
useEffect(function(){
    console.log("run effect");
    var x=document.getElementById("div_1");
    console.log(x);
},[count]);

////////////////   useRef////////////////

const [num1,setNum1]=useState();
const [num2,setNum2]=useState();
const [total,setTotal]=useState();
function sum() 
{
    setTotal(num1+num2);
}


    return (  <div>

        <h1>useState</h1>
            
            <div>
                <button onClick={()=>setCount(count+1)}>add</button> 
                <p>{count}</p>
                <button onClick={()=>setCount(count-1)}>sub</button> 
                <h3>your msj:{message}</h3>
                <button onClick={()=>setMessage("vlad")}>change the message</button>
            </div>
            <div>
                <input type="text" value={num1}  onChange={e => setNum1(+e.target.value)}></input><br/>
                <input type="text" value={num2}  onChange={e => setNum2(+e.target.value)}></input><br/>
                <p>{total}</p>
                <button onClick={sum}> sum</button>

            </div>
            <div id="div_1"></div>
            
    </div>
            


    );
}

export default Home;