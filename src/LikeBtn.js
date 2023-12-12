import React from 'react'
import { useState } from 'react'

export default function LikeBtn() {

    let numLikes=0;

    const [likes,setLikes]=useState(numLikes);

    const increment=()=> { setLikes(likes+1)}


  return (
    <div>
      <button onClick={increment} className='like'>❤️ Like </button > <p>{likes} {(likes===0 || likes===1) ? "Like" : "Likes "} </p>
    </div>
  )
}
