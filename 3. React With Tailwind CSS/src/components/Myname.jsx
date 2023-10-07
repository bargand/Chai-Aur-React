import React from 'react'

const Myname = ({NewName="agricultureataglance.com", NewLastName}) => {
  return (
    <div>
          <h1 className='font-bold underline bg-green-400 text-30xl text-cyan-950 p-4 rounded-xl mb-3'>{NewName} {NewLastName}</h1>
    </div>
  )
}

export default Myname
