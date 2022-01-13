import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative">
          <img
            loading="lazy"
            className="h-96 object-cover"
            src="/banner5.jpg"
          />
          <h1 className="absolute top-10 left-4 women text-3xl md:text-3xl lg:text-6xl">
            Women's Clothing
          </h1>
          <p className="price absolute top-20 right-14 text-lg bg-pink-500 text-white h-12 w-12 rounded-full flex items-center justify-center sm:text-2xl sm:h-14 sm:w-14 md:h-28 md:w-28 md:right-48 md:text-6xl md:top-34">
            50%
          </p>
        </div>
        <div className="relative">
          <img loading="lazy" className="h-96 w-full" src="/banner1.jpg" />
        </div>
        <div className="relative">
          <img loading="lazy" className="h-96 w-full" src="/banner4.jpg" />
          <h1 className="absolute text-5xl top-20 right-4 md:top-10 games md:right-12 p-4 flex flex-col md:text-7xl">
            Games &
            <span>
              C<span className="text-purple-700">o</span>ns
              <span className="text-purple-700">o</span>les
            </span>
          </h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
