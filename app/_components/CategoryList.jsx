import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function CategoryList({categoryList}) {
  return (
    <div className='mt-5'>
        <h2 className='text-green-600 text-2xl font-bold'>Shop by Category</h2>
        <div className='grid grid-cols-2  md:grid-cols-6 gap-5 mt-2'>
        {categoryList.map((category, index) => (
          <Link href={'/products-category/' + category.attributes.name} key={index} className='flex flex-col items-center bg-green-50 gap-2 p-4  rounded-lg group cursor-pointer hover:bg-green-200'>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category.attributes.icon.data[0].attributes.url
              }
              alt="icon"
              width={50}
              height={50}
              className='group-hover:scale-125 transition-all ease-in-out'
            />
            <h2 className='text-green-800'>{category?.attributes?.name}</h2>
            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList