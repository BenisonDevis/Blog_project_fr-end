import React, { useEffect, useState } from 'react'
import { useBlogServices } from '../services/blog_api'
import Cards from './components/Cards'
import { useNavigate } from 'react-router-dom';


const BlogList = () => {
  const {getBlogList} = useBlogServices()
  const [blogList, setBlogLIst] = useState()

  const navigate = useNavigate()
  
  const handleNavigate = () =>{
    navigate('blog-create')
  }
  
  useEffect (()=>{
    getData()
  },[])

  const getData = async () =>{
    try{
      const response = await getBlogList()

      if(response.success){
        setBlogLIst(response.data)
      }
    }catch(err){
      console.log('error')
    }
  }

  console.log(blogList)
  return (
    <div>
      <header>
        <h1 className='bg-dark text-white'>My Blog</h1>
        <button onClick={handleNavigate}>Create Blog</button>
      </header>

      <div>
        <Cards {...{blogList}}/>
        hello
      </div>
    </div>
  )
}

export default BlogList