import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white text-xl font-semibold p-5'>
      <p className='text-xs font-sans text-orange-300'>Enter /userid in URL</p>
      User : {userid}
    </div>
  )
}

export default User
