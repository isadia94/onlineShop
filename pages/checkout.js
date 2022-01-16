import Head from "next/head"
import Image from "next/image"
import Checkout from "../components/checkout"
import Header from "../components/Header"

function CheckoutBox() {
    return (
        <div>
          <Head>
          <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=El+Messiri:wght@400;500;600;700&family=Moon+Dance&family=Parisienne&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@100;200;300;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

          <title>Checkout Page</title>
          </Head>
          <Header/>
          <Checkout/>
        </div>
    )
}

export default CheckoutBox
