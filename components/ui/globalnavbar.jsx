'use client'

export default function Navbar(){
return (
  <>
  <div className=' w-full' >
  <nav  style={{backgroundColor:'green', opacity0:0.3}}>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
          <div className="flex space-x-4">
            <a href="/home" className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-black-900">Home</a>
            <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-black hover:text-white">About</a>
            <a href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-black hover:text-white">blog</a>
            <a href="/support" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-black hover:text-white">support</a>
          </div>
      </div>
        

        {/* <!-- Profile dropdown --> */}
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="cdbd2c2539e254031809ac7cd244ae60.jpg" alt="" />
            </button>
          </div>

      
      </div>
    </div>
  </div>

  
</nav>

</div>
</>
  )
}

