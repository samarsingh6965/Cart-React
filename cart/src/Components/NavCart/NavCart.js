import { MdDelete } from 'react-icons/md'
import cartEmpty from '../../Assets/empty.png'

const NavCart = ({ data , setData}) => {
    const handleRemove = (e) => {
        let index = data.findIndex((el) => el.id === e)
        data.splice(index,1)
        setData([...data])
     }
    
    return (
        <>
            {/* cart Bar Started  */}
            <div className="w-1/3 max-md:w-2/3 max-lg:w-1/2 h-screen fixed z-50 flex gap-2 flex-col border bg-gray-300 top-14 right-0 overflow-y-scroll p-2">
                {data.length === 0 ? <p className='text-center text-3xl mt-6'><img src={cartEmpty} alt="" /></p>
                    : data.map(e => (
                        <div key={e.id} className="w-full bg-white flex flex-wrap justify-between border">
                            <div className="w-full flex gap-4 items-center my-1 p-2">
                                <img src={e.img} alt="" className='w-[49%] h-[150px] border p-2' />
                                <div className=" w-[50%] h-[140px] leading-10 relative">
                                    <h1 className=' font-semibold'>{e.name}</h1>
                                    <p className=" font-semibold">Rs. {e.price}<span className='pl-2 text-green-500 text-xs'>50% off</span></p>
                                    <MdDelete onClick={() => handleRemove(e.id)} className='text-3xl absolute top-0 right-2 cursor-pointer'/>
                                    <button className='bg-blue-500 mt-3 rounded-md w-full text-white h-8 leading-8'>Buy</button>
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
