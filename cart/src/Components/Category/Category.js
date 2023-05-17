import {Categories} from '../Data'

function Category({filter,setFilter}) {
    
  return (
    <>
      <div className="w-full px-32 max-md:px-10 max-sm:px-4 border sticky top-14 bg-white z-10">
        <ul className='flex flex-wrap h-auto items-center'>
            {Categories.map(e=>(
                <li key={e.id} className={`${filter === e.Url ? 'bg-gray-300':''} border m-2 px-5 py-2 rounded-3xl cursor-pointer`}
                onClick={()=>setFilter(e.Url)}>{e.Name}</li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Category
