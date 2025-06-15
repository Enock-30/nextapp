'use client'

import {useState} from 'react'
import Navbar from '../globalnavbar'
import CreateAcount from './create'


export default function LoginForm(){
const users = {
  password:'199530Webdev?',
  email:'arineitweenock47@gmail.com'
}


const [forData,setFormData] = useState({
  email:'',
  password:''
})
const [showComponent,setShowComponent] = useState(false)
const [createaccount,setCreateaccount] = useState(true)
 const [showform, setShowform] = useState(true)
const handleFormSumbit = (event) =>{
event.preventDefault()

if( forData.email === users.email && forData.password === users.password){

 setShowComponent(true)
setCreateaccount(false)
setShowform(false)
}
else{
  
  setShowComponent(false);
  <CreateAcount show={createaccount}/>

}
 
  

}
const handleChange = (e)=>{
  
 setFormData({...forData, [e.target.name]:e.target.value})

}


    return  (
    <>   
   
            
        {showComponent && <Navbar/>}
          
      
 {showform && (<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 " >
  

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

    <form className="  mt-50 "  onSubmit={handleFormSumbit}>
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-white-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" value={forData.email} onChange={handleChange} id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-green text-green outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-wshite-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input type="password" value={forData.password} onChange={handleChange} name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
        <div className="text-sm text-end">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 ">Forgot password?</a>
          </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>

</div>

 )}


</> 
    )
}