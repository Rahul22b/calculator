import React from 'react'
import Button from './component/Button';

export default function Keypad({setval,val}) {
    const data=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','C','=','.'];
  return (
    data.map((e)=><Button e={e} setval={setval} val={val}></Button>)
  )
}
