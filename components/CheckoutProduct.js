import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../app/slices/basketSlice";


function CheckoutProduct({ id, title, image, description, rating, category, price, hasPrime}) {


    const dispatch = useDispatch()

    const addItemToBasket = ()=>{

        const product = {
            id, title, image, description, rating, category, price, hasPrime  
        }
        dispatch(addToBasket(product))
    }


    //Remove Items From Redux
    const removeItemFromBasket = ()=>{
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5 my-5 shadow-sm shadow-amber-300">
            <Image src = {image} height={200} width={200} objectFit="contain"/>

            {/* middleside */}
            <div className="col-span-3 mx-5">
            <p className="font-bold text-gray-500">{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_, i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-400"/>
                ))}
            </div>
            <p className="my-2 text-sm poppins line-clamp-3">{description}</p>
            <div className="mb-6">
            <Currency quantity={price}/>
            </div>
            
           
            {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
             <img
          loading="lazy"
            className="w-12"
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt="primeImg"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
         )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button" onClick={addItemToBasket}>Add To Basket</button>
            <button className="button" onClick={removeItemFromBasket}>Remove From Basket</button>
            </div>
            
            
           
        </div>
    )
}

export default CheckoutProduct;
