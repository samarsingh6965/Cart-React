import React from 'react'
import { MdDelete } from 'react-icons/md'
import cartEmpty from '../../Assets/empty.png'

const NavCart = ({ data }) => {

    return (
        <>
            {/* cart Bar Started  */}
            <div id='Cart-Bar' className="w-1/3 max-md:w-2/3 max-lg:w-1/2 h-screen fixed z-50 flex gap-2 flex-col border bg-gray-300 top-14 right-0 overflow-y-scroll p-2">
                {data.length === 0 ? <p className='text-center text-3xl mt-6'><img src={cartEmpty} alt="" /></p>
                    : data.map(e => (
                        <div key={e.id} className="w-full bg-white flex flex-wrap justify-between border">
                            <div className="w-full flex gap-4 items-center my-1 p-2">
                                <img src={e.img} alt="" className='w-[49%] h-[140px] border p-2' />
                                <div className=" w-[50%] h-[140px] leading-10 relative">
                                    <h1 className=' font-semibold'>{e.name}</h1>
                                    <p className=" font-semibold">Rs. {e.price}</p>
                                    <MdDelete className='text-3xl absolute top-0 right-2 cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* Cart Bar Ended  */}
        </>
    )
}

export default NavCart
