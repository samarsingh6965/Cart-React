
import product1 from '../../Assets/ideapad.webp';
import product2 from '../../Assets/l2.jpg';
import product3 from '../../Assets/l3.jpg';
import product4 from '../../Assets/mac.jpg';
import product5 from '../../Assets/download.jpeg';
import product6 from '../../Assets/download (1).jpeg';
import product7 from '../../Assets//download (2).jpeg';
import product8 from '../../Assets/download (3).jpeg';
import product9 from '../../Assets/download (4).jpeg';
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs'
import { useState } from 'react';



const ProList = [{
    id: 1,
    img: product1,
    name: 'Ideapad',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 190000,
    Qty:1
},
{
    id: 2,
    img: product2,
    name: 'Dell Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 3,
    img: product3,
    name: 'HP Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 4,
    img: product4,
    name: 'Macbook',
    description: 'Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 5,
    img: product5,
    name: 'Dell Laptop',
    description: 'expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 6,
    img: product6,
    name: 'HP Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 7,
    img: product7,
    name: 'Macbook',
    description: ' Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 8,
    img: product8,
    name: 'HP Laptop',
    description: 'Lorem ipsum impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 9,
    img: product9,
    name: 'Macbook',
    description: 'Lorem ipsum a impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 10,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 11,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 12,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 13,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 14,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 15,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 16,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 17,
    img: product9,
    name: 'Macbook',
    description: 'Lorem ipsum a impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 18,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 19,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 20,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 21,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
},
{
    id: 22,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 290000,
    Qty:1
},
{
    id: 23,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 120000,
    Qty:1
}]
function Products({ setData, data }) {
    const [toggleIcon, setToggleIcon] = useState(ProList)
    const AddToCart = (e) => {
        let index = data.indexOf(e) === -1
        if(index){
            setData([...data, e])
        }else{
            alert(e.name + " is already added in Cart.")
        }
       
    }
    
    const toggle = (e) => {
        e.toggle = !e.toggle
        setToggleIcon([...toggleIcon])
    }
   



    return (
        <>
            <div className="flex justify-center flex-wrap gap-5">
                {ProList.map(e => (
                    <div className="w-[300px] min-w-[300px] rounded-md border p-1" key={e.id}>
                        <div className="relative">
                            <img src={e.img} alt="img" className='h-[300px] border p-3' />
                            <i className='absolute top-2 right-2 cursor-pointer' onClick={() => toggle(e)}>{e.toggle ? <AiFillHeart className='text-red-500 text-lg' /> : <AiOutlineHeart className='text-red-500 text-lg' />}</i>
                        </div>
                        <div className="px-2 flex flex-col gap-2">
                            <i className='flex py-2 text-orange-500 text-lg' ><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf className='text-base' /><AiOutlineStar /></i>
                            <p className='text-2xl font-serif'>{e.name}</p>
                            <p className='leading-6 h-12 overflow-y-clip font-light'>{e.description}</p>
                            <p className='text-xl leading-10'>Rs. {e.price}<span className='pl-2 text-green-500 text-sm'>50% off</span></p>
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
