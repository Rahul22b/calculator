import React from 'react'
import Button from './component/Button';

export default function Keypad({setval,val}) {
    const data=['AC','X','+/-','/','7','8','9','*','4','5','6','-','1','2','3','+','%','0','.','='];
  return (
    data.map((e)=><Button e={e} setval={setval} val={val}></Button>)
  )
}
