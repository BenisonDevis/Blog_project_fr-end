import React, { useEffect, useState } from 'react'
import { useBlogServices } from '../services/blog_api'
import Swal from "sweetalert2"

const BlogCreate = () => {

    const {postBlogCreate} = useBlogServices()
    const [blogCreate, setBlogCreate] = useState(
        {
            heading : null,
            description : null
        }
    )

    useEffect = (()=>{
        // handleSubmit()
    },[blogCreate])

    const handleChange = (e) =>{
        if (e.target.value){
            setBlogCreate((data) => ({...data,[e.target.name]:e.target.value }))
        }
        else{
            setBlogCreate((data) => ({...data,[e.target.name]:null}))
        }
    }
    const handleReset = () => {
        console.log('enter to the handle Reset')
       let key = Object.keys(blogCreate)
       key.map((data) =>{
        setBlogCreate((val) => ({...val, [data]: null}))
       })

    }


    // const handleReset = () => {
    //     let key = Object.keys(supplierAdd);
    //     key.map((data) => {
    //       if (data === "opening_balance")
    //         setSupplierAdd((val) => ({ ...val, [data]: "0.00" }));
    //       else setSupplierAdd((val) => ({ ...val, [data]: null }));
    //     });
    //     getData();
    //     refresh();
    //     setToEdit(false);
    //   };


    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('+++++++++++++++++++++++++++++')
        try{
            const data = blogCreate

            const response = await postBlogCreate(data)
            console.log(response)
            if(response.success){
                handleReset()

                Swal.fire(response.message, "", "success");

            }
            else{
                Swal.fire(response.message, "", "error");
            }


        }catch(err){
            console.log('error')
        }
    }

    // console.log(blogCreate)

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} className='m-5 d-flex ' action="">
                <div className='m-2'>
                    <label htmlFor="">Blog Heading</label>
                    <input value={blogCreate?.heading||""} onChange={handleChange} type="text" name="heading" id="" />
                </div>

                <div className='m-2'>
                    <label htmlFor="">Description</label>
                    <textarea value={blogCreate?.description || ""} onChange={handleChange} cols={30} rows={5} name="description" id=""></textarea>
                </div>

                <div className='m-2'>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BlogCreate