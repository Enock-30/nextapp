'use client'

import { useState } from "react"
import Specification from "./specification"
const ProductOverView = ()=>{
   const [clostToggle,setCloseToggle] = useState(false)

  const clostToggles = ()=>{
    setCloseToggle(!clostToggle)
  }
    return ( 
      <>
        <div style={{display:clostToggle ? 'none' : 'block'}} class="relative z-10" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      
      <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button  onClick={clostToggles} type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
            <span class="sr-only">Close</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." class="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5" />
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-2xl text-gray-900">$192</p>

                
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>

                <form>
                  {/* <!-- Colors --> */}
                  <fieldset aria-label="Choose a color">
                    <legend class="text-sm font-medium text-gray-900">Color</legend>

                    <div class="mt-4 flex items-center gap-x-3">
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="White" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="White" class="sr-only"  />
                        <span aria-hidden="true" class="size-8 rounded-full border border-black/10 bg-white"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="Gray" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="Gray" class="sr-only" />
                        <span aria-hidden="true" class="size-8 rounded-full border border-black/10 bg-gray-200"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="Black" class="sr-only"/>
                        <span aria-hidden="true" class="size-8 rounded-full border border-black/10 bg-gray-900"></span>
                      </label>
                    </div>
                  </fieldset>

                  {/* <!-- Sizes --> */}
                  <fieldset class="mt-10" aria-label="Choose a size">
                    <div class="flex items-center justify-between">
                      <div class="text-sm font-medium text-gray-900">Size</div>
                      <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <div class="mt-4 grid grid-cols-4 gap-4">
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XXS" class="sr-only" />
                        <span>XXS</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XS" class="sr-only" />
                        <span>XS</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="S" class="sr-only"/>
                        <span>S</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="M" class="sr-only" />
                        <span>M</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="L" class="sr-only" />
                        <span>L</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XL" class="sr-only" />
                        <span>XL</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XXL" class="sr-only" />
                        <span>XXL</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input  type="radio" name="size-choice" value="XXXL" disabled class="sr-only" />
                        <span>XXXL</span>
                        <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                          <svg class="absolute inset-0 size-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <button type="submit" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add to bag</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Specification/>
</>
    )
}

export default ProductOverView