import React from 'react'
import FadeLoader  from "react-spinners/FadeLoader";
type Props = {}

function Loading({}: Props) {
  return (
    <div className='flex justify-center'>
        {/* <img className ='h-96'src="spinner.svg" alt="loading..." /> */}
        <FadeLoader color="#F59E0B" />
    </div>
  )
}

export default Loading