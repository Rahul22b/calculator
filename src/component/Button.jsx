import React from 'react'
import style from './Button.module.css'
export default function Button({e,setval,val}) {

 

  return (
   
    <button className={style.button} onClick={()=>{
      if(e=='AC'){
        setval(val='');
      }

      else if(e=='+/-'){
        setval(val*=-1);
      }
     
      else if(e==='='){
        const b=eval(val);
        setval(`Ans ${b}`);
      }
      else{
        setval(val+e)
      }
      
    }}>{e}</button>
  )
}
