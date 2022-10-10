import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HomeComp() {

  let navigate = useNavigate()
  const routeChange = (path) =>{
    navigate(path)
  }
  return (
    <div className='linksContainer'>
        <span onClick={()=>{routeChange('users')}} className='linksCell'>
            Users
        </span>

        <span onClick={()=>{routeChange('posts')}} className='linksCell'>
            Posts
        </span>
    </div>

  )
}

export default HomeComp