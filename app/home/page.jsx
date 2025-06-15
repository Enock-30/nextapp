
'use client'
import { useState,useEffect } from "react";
import Toggle from "../reusuableComponents/toggle";
import Link from "next/link";
import ShoppingItems from "../reusuableComponents/shoppingCart";
import FiltredProducts from "../reusuableComponents/filters";
import { Preview } from "../reusuableComponents/previewCategory";
import Specification from "../reusuableComponents/specification";
import ShippmentAddress from "../reusuableComponents/ship";
import ProductOverView from "../reusuableComponents/productOverView";
import Products from "@/components/products";

  
const Homes = () =>{ 
const [ photos,setPhotos] =useState([])

useEffect( () =>{
  const getPhotos = async()=> {
      const respo = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await respo.json()
      setPhotos(data.slice(0,30))
  }
  getPhotos()
},[])
// console.log(photos)
   return (
  
    <>

    {/* <Productslist/> */}
{/* <Products/> */}
    <div className="flex  items-center">
      <div>

       <Toggle/> 
                  <div className=" bg-indigo-900">
                    <p className="  p-2 wrap  text-center text-white m-auto text-20">shop with us and discover more on our big deals and discount upto 20%</p>
                  <img className="  w-full h-100 object-contain block p-4 " src="https://www.shutterstock.com/image-photo/hero-low-angle-shot-large-260nw-2617575817.jpg" alt="" />
                </div>
    {/* <Promotions/> */}
    
    {/* <Preview/>  */}
    {/* <FiltredProducts/> */}
{/* <ShoppingItems/>  */}
{/* <Specification/>    */}
   {/* <ShippmentAddress/> */}
   {/* <ProductOverView/> */}
    <ul>
{photos.map( (photo) =>(
  

<li key={photo.id} className="border m-3 p-2 rounded">
  
    <h3>{photo.title}</h3>
    <img src = {`${photo.url}`}/>
    <Link href={`/home/${photo.id}`} className="text-blue-800 underline"> read more</Link>
 
</li>
))}
</ul> 
 <div className="">
  <div className="mx-auto max-w-2xl px-6 py-10sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-green-900 text-center capitalize">shop like a billioner while spend less</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     <div className="group relative" id="1">
<img src="https://m.media-amazon.com/images/I/61b3EzV5ZxL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-black-900 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" width={300} height={200}/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900"> $54</p>
        </div>
      </div>
    
       <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              
                <span aria-hidden="true" className="absolute inset-0 text-white"></span>
                Basic Tee
             
            </h3>
            <p className="mt-1 text-sm text-white">Black</p>
          </div>
          <button className="bg-green-600 p-1 rounded-full w-20">buy</button>
          <p className="text-sm font-medium text-white">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
       </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-white">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-white">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div> 
       <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
    
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative" id="1">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2025/img/Apparel/XCM_CUTTLE_2154676_6421116_379x304_1X_en_AE._SY304_CB546575248_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>


    </div>
      
</div>
   </div >
   </div>

 </div>
</>
   ) 
}
export default Homes