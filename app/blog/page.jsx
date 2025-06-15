'use client'

import Link from "next/link"
import { useState,useEffect } from "react"
const MyBlog = ()=>{
const [posts,setPosts] = useState([])
const userDta = {title:'enock',body:'that is my name'}
 const [newPost,setNewPost] = useState({title:'',body:''})
  

//  when l click post first l like empty post with an id similar to the second post l add

useEffect( () =>{
    const getPost =  async () => {
       const respo = await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await respo.json();
       setPosts(data)
    }  
getPost()
    
},[])

 const handleClick = (e) =>{
    // console.log('clicke');
    
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(newPost)
    })
    .then( repo =>repo.json())
    .then( data =>{
        setPosts([...posts,data])
        setNewPost(userDta)}
      
        
)
 }
// console.log(posts);


    return(
        <>
        {<button onClick={handleClick}> click</button>}

        <h2>This is my blog posts</h2>
       {posts === 0 ? (<p>loading posts</p>) :
       (<ul>
        
  
    {posts.map((post) =>(
               
            <li key={post.id} className="border m-3 rounded p-2 text-l">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                 <Link href={`/blog/${post.id}`} className="text-blue-800">read more </Link>
            </li>
           
))}
         
         
</ul>
 )}  

        </>
    )
}
export default MyBlog