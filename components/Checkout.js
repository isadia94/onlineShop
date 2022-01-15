import React from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../app/slices/basketSlice';
import CheckoutProduct from './CheckoutProduct';
const Checkout = () => {

    const items = useSelector(selectItems);

    console.log(items.length);
    return (
        <div>
            <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* left */}


            <div className="flex-grow m-5 shadow-2xl">
                <Image src='https:/links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit="contain"/>

                <div className="flex flex-col p-5 ">
                    <h1 className="text-3xl text-black  border-b "> {items.length === 0 ? 'Your Cart is Empty' : 'Your Shopping Cart'}</h1>
                 {
                     items.map((item, i)=>(
                        
                    <CheckoutProduct key={i}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}/>
                     ))
                 }
              
                </div>
            </div>

          </main>
        </div>
    )
}

export default Checkout
