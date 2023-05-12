import React from 'react'
import product1 from '../../Assets/ideapad.webp'

function CartBar() {
  return (
    <>
      {/* cart page */}
      <div className="w-1/3 h-screen fixed border bg-white top-14 right-0 overflow-y-scroll">
                <div className="w-full flex flex-wrap justify-between px-2">
                    <div className="w-full flex h-[150px] my-1 border">
                        <img src={product1} alt="" className='w-[50%] h-[140px] my-auto' />
                        <div className="py-2 w-[50%]">
                            <h1 className='text-2xl font-semibold pl-2'>Ideapad Laptop</h1>
                            <p className="text-2xl font-semibold pl-2 mt-2">Rs. 1,90,000</p>
                            <button className='border px-3 py-1.5 text-lg rounded-lg bg-orange-500 text-white ml-2 mt-2'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* cart page */}
    </>
  )
}

export default CartBar
