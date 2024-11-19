import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Col, Row } from 'react-bootstrap'
import { uploadArtworkAPI } from '../services/allAPI'

function Addworks() {

  const [artDetails, setArtDetails] = useState({
      title:"",category:"",artist:"",dimensions:"",price:"",description:"",artimg:""
  })
  const [preview, setPreview] = useState("")
  

  const reset=() => {
    setArtDetails({
      title:"",category:"",artist:"",dimensions:"",price:"",description:"",artimg:""
    })
    setPreview("")
    
  }

  const[token,setToken]=useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token"))
    {
        setToken(sessionStorage.getItem("token"))
    }
    else {
        setToken("")
    }
    }, [])
  
  useEffect(() => {
    if (artDetails.artimg)
    {
      setPreview(URL.createObjectURL(artDetails.artimg))
    }
    
  }, [artDetails.artimg])
  

  const handleUpload = async (e) => {
    e.preventDefault()
    const{title,category,artist,dimensions,price,description,artimg }=artDetails
    if (!title || !category || !artist || !dimensions || !price || !description || !artimg ) {
      alert("Please fill empty fields")
    }
    else {
      const reqBody = new FormData()
      reqBody.append('title', title)
      reqBody.append('category', category)
      reqBody.append('artist', artist)
      reqBody.append('price', price)
      reqBody.append('dimensions', dimensions)
      reqBody.append('description', description)
      
      reqBody.append('artimg', artimg)
     
      
      for (let [key, value] of reqBody.entries())
      {
        console.log(key, value);
      }

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await uploadArtworkAPI(reqBody, reqHeader)
        if (result.status === 200) {
          console.log(result.data);
          alert("Art work Added Successfully")
          setArtDetails({
            title:"",category:"",artist:"",dimensions:"",price:"",description:"",artimg:""
          })

          
        }
        else {
          console.log(result);
          console.log(result.response.data);
        }
      
      }
    }


    }

  return (
    <>
      <Header />
      <div className="addwork m-2 mt-5 ">
     <center>   <h4>Add your art works here</h4> </center>
        <div className="add_part d-flex justify-content-center align-items-center  ">
          <Row>
            <Col>
              <div className="images pt-4 mt-5 ">
              <label>
             <input type="file"  style={{ display:'none' }} onChange={e=>setArtDetails({...artDetails,artimg:e.target.files[0]})} />
             <img  className='img mb-2 '  width={"430px"} height={"280px"} src={preview? preview:"https://armadayoungplants.nl/wp-content/uploads/2016/02/default-placeholder-300x300.png"} alt="" /> <br /> 
                </label> <br />

                {/* <div class="mt-2 row d-flex">
                <div className="col-sm-3 p-2" >
                <label> 
             <input type="file"  style={{ display:'none' }} onChange={e=>setArtDetails({...artDetails,artimg2:e.target.files[0]})} />
             <img  className='img mx-1 ' width={"200px"} height={"180px"} src={preview2? preview2:"https://armadayoungplants.nl/wp-content/uploads/2016/02/default-placeholder-300x300.png"} alt="" />
                    </label>  </div>
                    <div className="col-2"></div>
               <div className="col-sm-3 p-2" > 
             <label>
             <input type="file"  style={{ display:'none' }} onChange={e=>setArtDetails({...artDetails,artimg3:e.target.files[0]})} />
             <img  className='img ' width={"200px"} height={"180px"} src={preview3? preview3:"https://armadayoungplants.nl/wp-content/uploads/2016/02/default-placeholder-300x300.png"} alt="" />
             </label> <br /> */}
              {/* </div> */}
            {/* </div> */}
                </div>
            </Col>
            <Col>
              
          <div className="container justify-content-center align-items-center  ">
        <div class="mt-2 row">
          <label  class="col-sm-12 col-form-label fw-bolder text-dark">Title</label> <br />
          <div class="col-sm-11">
            <input type="text"  style={{width:"340px"}}  class="form-control" value={artDetails.title} onChange={e=>setArtDetails({...artDetails,title:e.target.value})}   />
          </div>
        </div>
            <div class="mt-3 row">
              <div className="col">
          <label   class="col-sm-8 col-form-label fw-bolder text-dark">Category</label> <br />
          <div class="col-sm-6">
                  {/* <input type="text" style={{ width: "250px" }} class="form-control" value={projectDetails.category} onChange={e => setProjectDetails({ ...projectDetails, category: e.target.value })} /> */}
                  <select class="form-control" style={{width:"340px"}} value={artDetails.category} onChange={e=>setArtDetails({...artDetails,category:e.target.value})} >
                      <option value="" style={{display:"none"}}  >Select a Category</option>
                      <option value="Luxury Villa">Paintings</option>
                      <option value="Beachfront Bungalow">Sculptures</option>
                      {/* <option value="Mountain Cabin">Mountain Cabin</option> */}
                      <option value="City Apartment">Digital Art</option>
                      <option value="Countryside Cottage">Glass Art</option>
                      <option value="Desert Retreat">Woodwork</option>
                      <option value="Forest Lodge">Photography</option>
                      <option value="Cozy Studio">Textile Art</option>
                      
                      </select>
                </div> </div> 
                <div className="col">
              <label  class="col-sm-4 col-form-label fw-bolder text-dark">Artist</label> <br />
          <div class="col-sm-6">
                 <input type="text" style={{width:"340px"}}  class="form-control" value={artDetails.artist} onChange={e=>setArtDetails({...artDetails,artist:e.target.value})}  />

              </div> </div>
            </div>
            <div class="mt-2 row">
          <label  class="col-sm-12 col-form-label fw-bolder text-dark">Dimensions</label> <br />
          <div class="col-sm-6">
            <input type="text" style={{width:'340px'}}  class="form-control" value={artDetails.dimensions} onChange={e=>setArtDetails({...artDetails,dimensions:e.target.value})} />
          </div>
        </div>
        <div class="mt-2 row">
          <label  class="col-sm-12 col-form-label fw-bolder text-dark">Price</label> <br />
          <div class="col-sm-6">
            <input type="number" style={{width:'340px'}}  class="form-control" value={artDetails.price} onChange={e=>setArtDetails({...artDetails,price:e.target.value})} />
          </div>
        </div>
            <div class="mt-2 row">
          <label  class="col-sm-12 col-form-label fw-bolder text-dark">Description</label> <br />
          <div class="col-sm-6">
            <input type="text" style={{height:'60px',width:'340px'}}  class="form-control" value={artDetails.description} onChange={e=>setArtDetails({...artDetails,description:e.target.value})} />
          </div>
                </div> <br />
                <div className="container d-flex justify-content-center align-items-center  ">
            <div className="button">
              <button className='btn btn-outline-danger' onClick={reset} >Reset</button>
              <button className='btn btn-outline-primary' onClick={handleUpload}  style={{marginLeft:"10px"}}>Upload</button>
            </div>
          </div>
         </div>
            </Col>
          </Row>
    
        </div>
      </div>
    </>
  )
}

export default Addworks