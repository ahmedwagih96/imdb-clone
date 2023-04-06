import React from 'react'
import FadeLoader  from "react-spinners/FadeLoader";
type Props = {}

function Loading({}: Props) {
  return (
    <div className='flex justify-center'>
        <FadeLoader color="#F59E0B" />
    </div>
  )
}

export default Loading