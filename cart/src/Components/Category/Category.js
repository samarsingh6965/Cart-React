import {Categories} from '../Data'

function Category({filter,setFilter}) {
    
  return (
    <>
      <div className="w-full px-9 max-sm:px-4 border sticky top-14 bg-white z-10">
        <ul className='flex flex-wrap h-auto items-center'>
            {Categories.map(e=>(
              <div key={e.id} onClick={()=>setFilter(e.Url)} className={`${filter === e.Url ? "bg-gray-300":""} flex items-center gap-1 border m-2 px-5 py-2 rounded-3xl cursor-pointer`}> 
                <span className='text-blue-500'>{e.icon}</span>
                <li className='text-blue-500'>{e.Name}</li>
              </div>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Category
