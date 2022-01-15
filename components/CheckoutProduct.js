import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Currency from "react-currency-formatter";

function CheckoutProduct({ id, title, image, description, rating, category, price, hasPrime}) {
    return (
        <div className="grid grid-cols-5 mt-5">
            <Image src = {image} height={200} width={200} objectFit="contain"/>

            {/* middleside */}
            <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_, i)=>(
                    <StarIcon className="h-5 text-yellow-400"/>
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price}  />
            </div>
            
           
        </div>
    )
}

export default CheckoutProduct;
