
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'



function Start() {
    const navigate = useNavigate()

    const handlemMove=()=> {
        navigate('/login')
    }
  return (
      <>
          <div className="btnstart  d-flex justify-content-center align-items-center" style={{ height: "740px",}}>
          <Button onClick={handlemMove} className='bg-transparent' >Get Start</Button>

          </div>
          {/* <Link to={'/login'} >Get start</Link> */}
        </ >
  )
}

export default Start