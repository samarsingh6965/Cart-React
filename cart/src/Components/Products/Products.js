import React, { useEffect, useState } from 'react'
import product1 from '../../Assets/ideapad.webp';
import product2 from '../../Assets/l2.jpg';
import product3 from '../../Assets/l3.jpg';
import product4 from '../../Assets/mac.jpg';


const ProList = [{
    id: 1,
    img: product1,
    name: 'Ideapad Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,90,000',
    btn: 'Add To Cart',
},
{
    id: 2,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 3,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 4,
    img: product4,
    name: 'MakBook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 2,90,000',
    btn: 'Add To Cart',
},
{
    id: 5,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 6,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 7,
    img: product4,
    name: 'MakBook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 2,90,000',
    btn: 'Add To Cart',
},
{
    id: 8,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 9,
    img: product4,
    name: 'MakBook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 2,90,000',
    btn: 'Add To Cart',
},
{
    id: 10,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 11,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 12,
    img: product4,
    name: 'MakBook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 2,90,000',
    btn: 'Add To Cart',
},
{
    id: 13,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
},
{
    id: 14,
    img: product4,
    name: 'MakBook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 2,90,000',
    btn: 'Add To Cart',
},
{
    id: 13,
    img: product3,
    name: 'HPLaptop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: 'Rs. 1,20,000',
    btn: 'Add To Cart',
}]
function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(ProList)
    },[])
    return (
        <>
            <div className="w-full flex flex-wrap justify-between px-2">
                {data.map(e => (<div className="w-[33%] flex h-[300px] my-1 border">
                    <img key={e.id} src={e.img} alt="" className='w-[50%] h-[290px] my-auto' />
                    <div className="py-2">
                        <h1 className='text-2xl font-semibold pl-2'>{e.name}</h1>
                        <p className="px-2 mt-4">{e.description}</p>
                        <p className="text-2xl font-semibold pl-2 mt-4">{e.price}</p>
                        <button className='border px-4 py-2 text-lg rounded-lg bg-orange-500 text-white ml-2 mt-2'>{e.btn}</button>
                    </div>
                </div>))}
            </div>


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

export default Products
