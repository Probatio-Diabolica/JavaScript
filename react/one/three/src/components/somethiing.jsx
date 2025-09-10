import React from 'react'

function Somethiing({ unliteral,heading="Default value"}) {
  return (
    <>
    <h1>howdy</h1>
          <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">  
        <div> y   
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://w7.pngwing.com/pngs/13/441/png-transparent-cat-kitten-cat-image-file-formats-animals-cat-like-mammal-thumbnail.png" />  
          </div>  
          <div class="flex items-center md:items-start">    
            <span class="text-2xl font-medium">{unliteral}</span>    
            <span class="font-medium text-sky-500">{heading}</span>    
            <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">      
              <span>No. 4</span>      
              <span>·</span>      
              <span>2025</span>    
              </span>  
        </div>
      </div>
  </>
  )
}

export default Somethiing