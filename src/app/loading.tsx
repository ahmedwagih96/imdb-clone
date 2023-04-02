import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <div className='flex justify-center'>
        <img className ='h-96'src="spinner.svg" alt="loading..." />
    </div>
  )
}

export default Loading