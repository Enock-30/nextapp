
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
 <div >
  <div className="mx-auto max-w-2xl px-6 py-10sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-green-900 text-center capitalize">shop like a billioner while spend less</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
      <div className="group relative border   rounded border-red-900  h-auto" id="1" >
      <img src="https://m.media-amazon.com/images/I/71MCH34W2yL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-150 p-2" width={200}/>
        <div className="mt-4 bg-black ">
          <div>
        <p className="mt-1 text-lg ">smart watch</p>
          </div>

          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED1,056.90</p>
          <p>Samsung Galaxy Watch Ultra Smartwatch, Titanium Silver, 47mm, LTE, Health Monitoring, Fitness Tracker (UAE Version)</p>
          <h4 className="text-blue-900">Get it as soon as Tuesday, June 17</h4>
          <p>Fulfilled by Eagle1 - FREE Shipping</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/41SRBNwCLtL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          <br></br>
          <div>
        <p className="mt-1 text-lg text-bolder">Generic</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED60.67</p>
          <p>Generic
        Dresses for women Women Long Sleevve Classy Dress</p>
          <h4><span className="text-blue-900">FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 1 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
         
          <div>
        <p className="mt-1 text-lg text-bolder">ishin</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED35.11</p>
          <p>Women Topknm-INWDR0411-627-628-233-DhTopknm Dresses (pack of 1)
            3.9 out of 5 stars 399</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/61ESpOHiplL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
          
          <div>
        <p className="mt-1 text-lg text-bolder">Lilychan</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED90.00 </p>
          <p>mens Cargo Cargo</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71yJ9ASAFHL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
     
          <div>
        <p className="mt-1 text-lg text-bolder">Haggar</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED41.17 </p>
          <p>Men's Eclo Stria Expandable-Waist Flat Front Dress Pant, Taupe, varies</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71yJ9ASAFHL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
     
          <div>
        <p className="mt-1 text-lg text-bolder">Haggar</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED41.17 </p>
          <p>Men's Eclo Stria Expandable-Waist Flat Front Dress Pant, Taupe, varies</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className="group relative border p-2  rounded border-red-900 bg-white-800 h-auto" id="1" >
      <img src="https://m.media-amazon.com/images/I/71MCH34W2yL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-150 p-2" width={200}/>
        <div className="mt-4 ">
          <div>
        <p className="mt-1 text-lg ">smart watch</p>
          </div>

          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED1,056.90</p>
          <p>Samsung Galaxy Watch Ultra Smartwatch, Titanium Silver, 47mm, LTE, Health Monitoring, Fitness Tracker (UAE Version)</p>
          <h4 className="text-blue-900">Get it as soon as Tuesday, June 17</h4>
          <p>Fulfilled by Eagle1 - FREE Shipping</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div><div className="group relative border p-2  rounded border-red-900 bg-white-800 h-auto" id="1" >
      <img src="https://m.media-amazon.com/images/I/71MCH34W2yL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-150 p-2" width={200}/>
        <div className="mt-4 ">
          <div>
        <p className="mt-1 text-lg ">smart watch</p>
          </div>

          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED1,056.90</p>
          <p>Samsung Galaxy Watch Ultra Smartwatch, Titanium Silver, 47mm, LTE, Health Monitoring, Fitness Tracker (UAE Version)</p>
          <h4 className="text-blue-900">Get it as soon as Tuesday, June 17</h4>
          <p>Fulfilled by Eagle1 - FREE Shipping</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71yJ9ASAFHL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
     
          <div>
        <p className="mt-1 text-lg text-bolder">Haggar</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED41.17 </p>
          <p>Men's Eclo Stria Expandable-Waist Flat Front Dress Pant, Taupe, varies</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71yJ9ASAFHL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
     
          <div>
        <p className="mt-1 text-lg text-bolder">Haggar</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED41.17 </p>
          <p>Men's Eclo Stria Expandable-Waist Flat Front Dress Pant, Taupe, varies</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71yJ9ASAFHL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          
     
          <div>
        <p className="mt-1 text-lg text-bolder">Haggar</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED41.17 </p>
          <p>Men's Eclo Stria Expandable-Waist Flat Front Dress Pant, Taupe, varies</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71ep0U9c+VL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          

          <div>
        <p className="mt-1 text-lg text-bolder">Clarks</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED249.00 Was: AED 295.77Was: AED295.77 </p>
          <p>Whiddon Cap Mens Oxford</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71ep0U9c+VL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          

          <div>
        <p className="mt-1 text-lg text-bolder">Clarks</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED249.00 Was: AED 295.77Was: AED295.77 </p>
          <p>Whiddon Cap Mens Oxford</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className=" relative border p-2  rounded border-red-900 bg-white-800" id="1" >
      <img src="https://m.media-amazon.com/images/I/71ep0U9c+VL._AC_UL320_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 p-2 " width={200} />
        <div className="mt-4 ">
          

          <div>
        <p className="mt-1 text-lg text-bolder">Clarks</p>
          </div>
          <p className="text-lg font-medium text-gray-900 text-orange-800">AED249.00 Was: AED 295.77Was: AED295.77 </p>
          <p>Whiddon Cap Mens Oxford</p>
          <h4><span className="text-blue-900"> FREE delivery Tue, 17 Jun</span> on your first order
          Or fastest delivery Tomorrow, 16 Jun</h4>
          <p className="text-orange-800">Only 10 left in stock - order soon.</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
      <div className="group relative border p-2  rounded border-red-900 bg-white-800 h-auto" id="1" >
      <img src="https://m.media-amazon.com/images/I/71MCH34W2yL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-150 p-2" width={200}/>
        <div className="mt-4 ">
          <div>
        <p className="mt-1 text-lg ">smart watch</p>
          </div>

          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED1,056.90</p>
          <p>Samsung Galaxy Watch Ultra Smartwatch, Titanium Silver, 47mm, LTE, Health Monitoring, Fitness Tracker (UAE Version)</p>
          <h4 className="text-blue-900">Get it as soon as Tuesday, June 17</h4>
          <p>Fulfilled by Eagle1 - FREE Shipping</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div><div className="group relative border p-2  rounded border-red-900 bg-white-800 h-auto" id="1" >
      <img src="https://m.media-amazon.com/images/I/71MCH34W2yL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-150 p-2" width={200}/>
        <div className="mt-4 ">
          <div>
        <p className="mt-1 text-lg ">smart watch</p>
          </div>

          <p className="text-lg font-medium text-gray-900 text-orange-800"> AED1,056.90</p>
          <p>Samsung Galaxy Watch Ultra Smartwatch, Titanium Silver, 47mm, LTE, Health Monitoring, Fitness Tracker (UAE Version)</p>
          <h4 className="text-blue-900">Get it as soon as Tuesday, June 17</h4>
          <p>Fulfilled by Eagle1 - FREE Shipping</p>
            <button className="bg-green-600 p-1 rounded-full w-40 block m-auto ">Add cart</button>

        </div>
      </div>
         </div>
     
   </div>
</div>
 
</>
   ) 
}
export default Homes