
import product1 from '../../Assets/ideapad.webp';
import product2 from '../../Assets/l2.jpg';
import product3 from '../../Assets/l3.jpg';
import product4 from '../../Assets/mac.jpg';
import product5 from '../../Assets/download.jpeg';
import product6 from '../../Assets/download (1).jpeg';
import product7 from '../../Assets//download (2).jpeg';
import product8 from '../../Assets/download (3).jpeg';
import product9 from '../../Assets/download (4).jpeg';
import {AiOutlineShoppingCart} from 'react-icons/ai'


const ProList = [{
    id: 1,
    img: product1,
    name: 'Ideapad Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,90,000',
},
{
    id: 2,
    img: product2,
    name: 'Dell Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 3,
    img: product3,
    name: 'HP Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 4,
    img: product4,
    name: 'Macbook',
    description: 'Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '2,90,000',
},
{
    id: 5,
    img: product5,
    name: 'Dell Laptop',
    description: 'expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 6,
    img: product6,
    name: 'HP Laptop',
    description: 'iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 7,
    img: product7,
    name: 'Macbook',
    description: ' Dicta sunt iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '2,90,000',
},
{
    id: 8,
    img: product8,
    name: 'HP Laptop',
    description: 'Lorem ipsum impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 9,
    img: product9,
    name: 'Macbook',
    description: 'Lorem ipsum a impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '2,90,000',
},
{
    id: 10,
    img: product2,
    name: 'Dell Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 11,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor sit amet impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 12,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '2,90,000',
},
{
    id: 13,
    img: product3,
    name: 'HP Laptop',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
},
{
    id: 14,
    img: product4,
    name: 'Macbook',
    description: 'Lorem ipsum dolor expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '2,90,000',
},
{
    id: 15,
    img: product3,
    name: 'HPLaptop',
    description: 'Lorem ipsum iusto expedita impedit hic dolorum saepe unde suscipit esse! Deserunt',
    price: '1,20,000',
}]
function Products({ setData, data }) {


    const AddToCart = (e) => {
        setData([...data, e])
    }



    return (
        <>
            <div className="flex justify-center  flex-wrap gap-5 ">
                {ProList.map(e => (
                    <div className="w-[300px] min-w-[300px] rounded-md border p-1" key={e.id}>
                        <img src={e.img} alt="img" className='h-[300px] border p-3' />
                        <div className="px-2 flex flex-col gap-2">
                            <p className='text-2xl font-serif leading-10'>{e.name}</p>
                            <p className='leading-6 h-12 overflow-y-clip'>{e.description}</p>
                            <p className='text-xl leading-10'>Rs. {e.price}</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <button onClick={() => AddToCart(e)} className='bg-orange-500 justify-center flex w-[49%] rounded-md px-4 py-2 gap-1 text-white'>Add <AiOutlineShoppingCart className='text-xl'/></button>
                            <button onClick={() => AddToCart(e)} className='bg-orange-500 justify-center flex w-[49%] rounded-md px-4 py-2 gap-1 text-white'>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
