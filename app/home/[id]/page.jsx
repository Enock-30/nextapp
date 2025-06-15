 
 'use client'
    import { useState,useEffect } from "react"
 import { useParams } from "next/navigation"
 
 
const productId = () =>{
    
    const [photo,setPhoto] = useState([])
    const {id} = useParams()
useEffect( () =>{
const Photos = async ()=>{
const respo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
const data = await respo.json();
 setPhoto(data)
}
Photos()
},[])
console.log(photo);

return(
        <>
        <h2>{photo.title}</h2>
        <img src={`${photo.url}`} alt="" />
        </>
    )
}
export default productId