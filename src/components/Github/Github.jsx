import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/vivekmavani10')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])
    
    return (
    <div className='bg-gray-700 text-white text-xl font-semibold p-5'>
      Github followers : {data.followers}
      <div className="flex justify-center items-center pt-5 pb-2">
  <img className="" src={data.avatar_url} alt="Github Picture" width="300" />
</div>
    </div>
  )
}

export default Github
