"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import GlobalApi from '../_utils/GlobalApi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
  
const [categoryList, setCategoryList] = useState([]);



 useEffect(()=>{
    getCategoryList();
  }, [])

  /**
   * Get Category List
   */

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='p-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-8'>
            <Image src='/logo.png' alt='logo' width={150} height={100} />
            <div>
               
                <DropdownMenu>
                  <DropdownMenuTrigger asChild> 
                  <h2 className='md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 hidden cursor-pointer'><LayoutGrid className='h-5 w-5' /> Category</h2></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {categoryList.map((category,index)=> (
                        <DropdownMenuItem key={index}>
                        <h2>{category?.attributes?.Name}</h2>
                        </DropdownMenuItem>
                      ))}
                      
                    </DropdownMenuContent>
                </DropdownMenu>

                

                
            </div>
            <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
                  <Search />
                  <input type='text' placeholder='search' className='outline-none'/>
            </div>
        </div>
        <div className='flex gap-5 items-center'>
         <h2 className='flex gap-2 items-center text-lg'><ShoppingBag />0</h2>
          <Button>Login</Button>
        </div>
    </div>
  )
}

export default Header