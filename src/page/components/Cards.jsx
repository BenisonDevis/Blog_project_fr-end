import React, { useEffect } from 'react'
import '../../App.css'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Cards = (props) => {
  const {blogList} = props

  
  return (
    <div className='row m-2' >
      {
        blogList?.map((data)=>{
          {console.log(data)}
          return(
            <>
              <div className='col-4 border border-5 border-dark d-flex justify-content-between'>
                <div>
                  <h1>{data?.heading||""}</h1>
                  <p>{data?.description||""}</p>
                  <p>{data?.created_at||""}</p>
                </div>
                <div>
                  <FaEdit className='btn-stl me-3 ' size={30} />
                  <MdDeleteForever className='btn-stl' size={35} />
                </div>
              </div>

            </>
          )
          

        })
      }
      
    </div>

    
  )
}

export default Cards