import { MdDelete } from 'react-icons/md'
import cartEmpty from '../../Assets/empty.png'

const NavCart = ({ data, setData }) => {
    const handleRemove = (e) => {
        let index = data.findIndex((el) => el.id === e)
        data.splice(index, 1)
        setData([...data])
    }
    const handleMinus = (e) => {
        e.Qty = e.Qty - 1
        if (e.Qty <= 1) {
            e.Qty = 1
        }
        setData([...data])
    }
    
    const handlePlus = (e) => {
        e.Qty = e.Qty + 1
        if (e.Qty >= 5) {
            e.Qty = 5
        }
        setData([...data])
    }
    
    
    return (
        <>
            {/* cart Bar Started  */}
            <div className="w-1/3 justify-between max-md:w-3/5 max-lg:w-1/2 h-[93vh] fixed z-50 flex gap-2 flex-col border bg-gray-300 top-14 right-0 p-2">
                <div className='h-[70vh] overflow-y-auto'>
                    {data.length === 0 ? <p className='text-center text-3xl mt-6'><img src={cartEmpty} alt="" /></p>
                        : data.map(e => (
                            <div key={e.id} className="w-full bg-white flex flex-wrap justify-between border">
                                <div className="w-full flex max-sm:flex-col gap-4 items-center my-1 p-2">
                                    <img src={e.img} alt="" className='w-[49%] max-sm:w-full h-[150px] border p-2' />
                                    <div className=" w-[50%] h-[140px] max-sm:w-full max-sm:h-auto leading-10 relative">
                                        <h1 className=' font-semibold'>{e.name}</h1>
                                        <p className=" font-semibold">Rs. {e.price}<span className='pl-2 text-green-500 text-xs'>50% off</span></p>
                                        <MdDelete onClick={() => handleRemove(e.id)} className='text-3xl absolute top-0 right-2 cursor-pointer' />
                                        <div className="flex items-center gap-1">
                                            <button onClick={() => handleMinus(e)} className='px-4 text-3xl border rounded-md'>-</button>
                                            <p className='w-7 h-7 flex items-center justify-center border rounded-full'>{e.Qty}</p>
                                            <button onClick={() => handlePlus(e)} className='px-4 text-3xl border rounded-md'>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="w-full h-[23vh] bg-orange-400 flex flex-col p-6 justify-between">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl max-sm:text-base'>Delivery Charges : <span className='max-sm:text-base w-auto max-sm:py-0 px-2 py-1 text-lg border border-slate-600'>{49}</span></p>
                        <p className='text-xl max-sm:text-base'>Total : <span className='max-sm:text-base w-auto px-2 max-sm:py-0 py-1 text-lg border border-slate-600'>{120000}</span></p>
                    </div>
                    <button className='p-2 max-sm:p-0 bg-white rounded-md'>Checkout</button>
                </div>
            </div>
            {/* Cart Bar Ended  */}
        </>
    )
}

export default NavCart
