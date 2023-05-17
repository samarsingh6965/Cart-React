
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs'
import { useState } from 'react';





function Products({ setData, data ,Product}) {
    const [toggleIcon, setToggleIcon] = useState(Product)
    
    const AddToCart = (e) => {
        let index = data.indexOf(e) === -1
        if(index){
            setData([...data, e])
        }else{
            alert(e.name + " is already exist in Cart.")
        }
    }
    
    
    const toggle = (e) => {
        e.toggle = !e.toggle
        setToggleIcon([...toggleIcon])
    }
   



    return (
        <>
            <div className="flex justify-center flex-wrap gap-5 pt-4">
                {Product.length === 0 ? <p className='mt-4 text-4xl max-md:text-lg max-sm:text-base font-serif'>Nothing to show in this Category :</p>:Product.map(e => (
                    <div className="w-[350px] max-[375px]:w-[280px] min-w-[300px]] rounded-md border p-1" key={e.id}>
                        <div className="relative">
                            <img src={e.img} alt="img" className='h-[300px] w-full border p-3' />
                            <i className='absolute top-2 right-2 cursor-pointer' onClick={() => toggle(e)}>{e.toggle ? <AiFillHeart className='text-red-500 text-lg' /> : <AiOutlineHeart className='text-red-500 text-lg' />}</i>
                        </div>
                        <div className="px-2 flex flex-col gap-2">
                            <i className='flex py-2 text-orange-500 text-lg' ><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf className='text-base' /><AiOutlineStar /></i>
                            <p className='text-2xl font-serif'>{e.name}</p>
                            <p className='leading-6 truncate font-light'>{e.description}</p>
                            <p className='text-xl leading-10' >Rs. {e.price}<span className='pl-2 text-green-500 text-sm'>50% off</span></p>
                        </div>
                        <div className="flex justify-between px-2 py-2">
                            <button onClick={() => AddToCart(e)} className='bg-orange-500 justify-center flex w-[49%] rounded-md px-4 py-2 gap-1 text-white'>Add <AiOutlineShoppingCart className='text-xl' /></button>
                            <button className='bg-orange-500 justify-center flex w-[49%] rounded-md px-4 py-2 gap-1 text-white'>Buy Now</button>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}

export default Products
