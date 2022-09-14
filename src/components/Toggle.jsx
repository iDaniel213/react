import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

export const Toggle=() => {
  const [isHappy,setisHappy]=useState(true)

  return (
    <div className="text-center mt-3">
      <Button onClick={() =>setisHappy(!isHappy)}>Are you happy? {isHappy? '😂':'😁'}</Button>
    </div>
  )
}
