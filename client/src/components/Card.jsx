import React from 'react'

function Card() {
  return (
    <div className='flex gap-3'>
      <div class="max-w-sm w-80 overflow-hidden rounded-lg shadow-lg bg-[#2A1B12] text-white flex flex-col justify-between">
        <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Product Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Product Name</div>
          <p class="text-[#A69482] text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum consequuntur nisi vero animi. Cum, deleniti eum.
          </p>
        </div>
        <div>
          <div class="flex items-center text-[#C1B3A4] text-xl font-semibold mt-2 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>1,299</span>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-between items-center">
            <div class="space-x-2">
              <button class="bg-[#A69482] text-[#2A1B12] hover:bg-[#C1B3A4] py-1 px-2 rounded-lg">Buy Now</button>
              <button class="bg-[#A69482] text-[#2A1B12] hover:bg-[#C1B3A4] py-1 px-2 rounded-lg">Add to Cart</button>
            </div>
            <button class="text-[#C1B3A4] hover:text-[#D3C6B5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
            <button class="text-[#C1B3A4] hover:text-[#D3C6B5]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card