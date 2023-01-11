import React from 'react'
import bookingCars from "../../assets/dummy-data/booking-cars"
export default function Booking() {
  return<>
  
  <div className="container">
    <div className="row g-3">
    <h1>Booking</h1>
    <div className="col-md-6">
    <select class="form-select" aria-label="Default select example">
  
  <option selected value="new">new</option>
  <option value="old">old</option>
  <option value="used">used</option>
</select>
    </div>
    <div className="col-md-6">
    <select class="form-select" aria-label="Default select example">
 
  <option selected value="Toyota">Toyota</option>
  <option value="porche">porche</option>
  <option value="Mercidce">Mercidce</option>
</select>
    </div>
    {bookingCars.slice(0,8).map((item,index)=>{
          return<>
           <div className='col-md-3  ' key={index}>
          <div className="content excolor rounded-2 p-2">
            <div className="contenttop d-flex justify-content-between align-items-center">
            <h6>{item.carName}</h6>
            <i class="fa-regular fa-heart"></i>
            </div>
            <div className="contentcenter">
            <img src={item.imgUrl} alt=""  className='w-100' />
            
            </div>
            <div className="contentbottom d-flex justify-content-between align-items-center">
              <div className="bottomleft  d-flex justify-content-evenly align-items-center ">
              <p className='mx-2'><span><i class="fa-solid fa-person"></i>  {item.retweet}  </span>{item.groupSize}</p>
            <p className='mx-2'><span><i className="fa-solid fa-arrows-rotate"></i>{item.type}</span> </p>
            
              </div>
              <div className="bottomright ">
              <p><span><i className="fa-solid fa-dollar-sign"></i> {item.rentPrice} </span> /d</p>
            
              </div>
            
             
             
            </div>
          </div>
        </div>
          </>
        })
  }
    </div>
  </div>
 
  </>
}
