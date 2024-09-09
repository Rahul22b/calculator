import React from 'react'
import style from './Button.module.css'
export default function Button({e,setval,val}) {

 

  return (
   
    <button className={style.button} onClick={()=>{
      if(e=='C'){
        setval(val='');
      }
      else if(e==='='){
        const b=eval(val);
        setval(b);
      }
      else{
        setval(val+e)
      }
      
    }}>{e}</button>
  )
}
