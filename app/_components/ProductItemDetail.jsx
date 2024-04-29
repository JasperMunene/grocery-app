"use client"
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

function ProductItemDetail({ product }) {
    const [quantity, setQuantity] = useState(1);

    const totalPrice = product.attributes.sellingprice
        ? product.attributes.sellingprice * quantity
        : product.attributes.mrp * quantity;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
            <Image
                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.attributes.images.data[0].attributes.url}
                width={300}
                height={300}
                alt='image'
                className='p-3 h-[320px] w-[300px] object-contain'
            />
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>{product.attributes.name}</h2>
                <h2 className='text-lg pt-3  text-gray-500'>{product.attributes.description}</h2>
                <div className='flex gap-3'>
                    {product.attributes.sellingprice && (
                        <h2 className='font-bold text-3xl'>${product.attributes.sellingprice}</h2>
                    )}
                    <h2 className={`font-bold text-3xl ${product.attributes.sellingprice && 'line-through text-gray-400'}`}>
                        ${product.attributes.mrp}
                    </h2>
                    <h2 className='font-medium text-lg'>Quantity ({product.attributes.itemQuantityType})</h2>
                </div>
                <div className='flex flex-col items-baseline gap-3'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-2 border flex gap-10 items-center px-5'>
                            <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                            <h2>{quantity}</h2>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <h2 className='text-2xl font-bold'> = $ {(totalPrice).toFixed(2)}</h2>
                    </div>
                    <Button className='flex gap-3'>
                        <ShoppingBasket />
                        Add to Cart
                    </Button>
                </div>
                <h2>
                    <span className='font-bold'>Category: </span>
                    {product.attributes.categories.data[0].attributes.name}
                </h2>
            </div>
        </div>
    );
}

export default ProductItemDetail;