import React from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalItems } from '../app/slices/basketSlice';
import CheckoutProduct from './CheckoutProduct';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Currency from "react-currency-formatter";
const Checkout = () => {

    const{data: session} = useSession();

    console.log(session)

    const items = useSelector(selectItems);
    const total = useSelector(selectTotalItems)

  
    return (
        <div>
            
            <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* left */}


            <div className="flex-grow m-3 shadow-2xl">
                <Image src='https:/links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit="contain"/>

                <div className="flex flex-col p-5 shadow-md ">
                    <h1 className="text-3xl text-black  border-b "> {items.length === 0 ? 'Your Cart is Empty' : 'Your Shopping Cart'}</h1>
                 {
                     items.map((item, i)=>(
                        
                    <CheckoutProduct key={i}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    hasPrime={item.hasPrime}
                    rating={item.rating}/>
                     ))
                 }
              
                </div>
            </div>

            {/* Right */}

            <div className='flex flex-col bg-white'>
                {
                    items.length && (
                        <>
                        <h2 className="whitespace-nowrap text-sm ">
                            Subtotal ({items.length} items) :

                            <span className='font-bold'>
                                <Currency quantity={total}/>
                            </span>
                            </h2>

                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? "Sign In To Checkout" : "Proceed To Checkout"}</button></>
                    )
                }
            </div>

          </main>
        </div>
    )
}

export default Checkout
