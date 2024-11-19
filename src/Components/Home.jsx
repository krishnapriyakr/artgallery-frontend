import React, { useEffect, useState } from 'react'
import Header from './Header'
import { allArtworksAPI } from '../services/allAPI'
import { Card, Col, Row } from 'react-bootstrap'
import { BASE_URL } from '../services/baseUrl'


function Home() {
  const [allArtworks, setAlArtworks] = useState([])
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const getAllartworks = async () => {
    if (sessionStorage.getItem('token'))
    {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result = await allArtworksAPI(reqHeader)
      if (result.status === 200)
      {
        setAlArtworks(result.data)
      }
      else {
        console.log(result);
      }
      }
  }
 

  useEffect(() => {
    getAllartworks()
  }, [])
  
  return (
    <>
      <div className="home">
        <Header />
        <div className="home d-flex justify-content-center align-items-center mt-3 ">
        <Row className='mt-5 container-fluid justyfy-content-center mb-2'>
              {
                allArtworks?.length>0?allArtworks?.map(artworks => (
                  <Col sm={12} md={6} lg={4} >
           <div className="expcards mb-3 d-flex justify-content-center align-items-center">
          <Card  style={{ width: '18rem',boxShadow:"2px",marginTop:'10px',height:'22rem' }}>
           <Card.Img variant="top" onClick={handleShow} style={{boxShadow:"2px"}} src={artworks?`${BASE_URL}/uploads/${artworks?.artimg}`:"https://th.bing.com/th/id/OIP.yPEaz-j1EKaUnQb6Yx7R2gHaE8?w=1200&h=800&rs=1&pid=ImgDetMain"} height={'165px'} />
           <Card.Body>
            <Card.Title className='text-danger' onClick={handleShow}  >{artworks.title}</Card.Title>
                          <p onClick={handleShow} >
                  by  {artworks.artist} <br />
                 {artworks.dimensions} <br /> 
            {artworks.description} <br /> 
              <span className='mt-2' style={{ fontWeight: 'bolder' }}> $ {artworks.price}</span>   </p>
            
             <Card.Text>
         
            </Card.Text>
            </Card.Body>
        </Card>
            </div>
                  </Col>
                )): <p className='text-danger fw-bolder d-flex justify-content-center align-items-center text-align-center' >No result found </p> 
                
              }
            </Row>

        </div>
      </div>
      
    </>
  )
}

export default Home