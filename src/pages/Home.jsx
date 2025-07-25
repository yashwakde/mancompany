import React, { useState, useEffect, useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import stage from "../assets/stage.png";
import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import perfume4 from "../assets/perfume4.png";
import perfume5 from "../assets/perfume5.png";
import perfume6 from "../assets/perfume6.png";
import perfume7 from "../assets/perfume7.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import platinum from "../assets/platinum.png";
import carbon from "../assets/carbon.png";
import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";

const perfumes = [perfume1, perfume2, perfume3, perfume4, perfume5, perfume6, perfume7];

const collections = ["Origi", "Desti", "White", "Desire", "Regal", "gold", "Wood"];

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const textRef = useRef(null);
  const perfumeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % perfumes.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(".gsap-heading", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".gsap-overlay", {
      scrollTrigger: {
        trigger: ".gsap-overlay",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3
    });

    

    gsap.from(".gsap-brand", {
      scrollTrigger: {
        trigger: ".gsap-brand",
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2
    });

   

   

    
  }, []);

  return (
    <div className="px-[3%] w-full mt-15 min-h-screen flex flex-col items-center relative">

      <div className="absolute top-0 lg:top-1 right-15 lg:right-90 rotate-7 w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] "><img src={top1} alt="" className="w-full h-full object-cover" /></div>
      <div className="absolute top-15 lg:top-60 left-10 lg:left-90 -rotate-6 w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] "><img src={top2} alt="" className="w-full h-full object-cover" /></div>

      <h2 className="text-[20px] z-99 lg:text-[80px] p-5 text-center font-[gil] capitalize text-yellow-500 gsap-heading">
        <PiStarFourFill className="animate-pulse" />Discover Your perfect <br />
        <span className="font-[cinzelregular] text-white">Fragnance</span>
      </h2>
      <NavLink to="/product">
        <button className="p-4 lg:p-5 py-2 lg:py-3 border-2 border-yellow-500 text-[10px] lg:text-xl text-yellow-500 rounded-full font-bold font-[gil] cursor-pointer transition-transform duration-300 hover:scale-105">
          OUR SHOP
        </button>
      </NavLink>

      <div className="absolute w-full h-[400px] z-10 top-20 lg:top-[12%]">
        <div className="absolute top-[35%] lg:top-[15%] left-[4%] lg:-left-[1%] text-end w-[10%] lg:w-[43%] gsap-overlay">
          <h1 className="text-[40px] lg:text-[100px] text-yellow-500 uppercase font-thin font-[cinzelregular]">Scent</h1>
        </div>
        <div className="absolute top-[50%] lg:top-[40%] right-3 lg:right-1 text-end w-[100%] lg:w-[40%] gsap-overlay">
          <h1 className="text-[40px] lg:text-[100px] text-yellow-500 uppercase font-thin font-[cinzelregular] lg:text-start">Verse</h1>
        </div>
        <div className="absolute top-[50%] lg:top-[50%] left-[3%] lg:left-[20%] gsap-overlay">
          <p className="text-[20px] lg:text-[70px] text-yellow-500 font-bold uppercase font-[cinzelregular]">51+ <span className="text-white text-[15px] lg:text-[20px] font-thin">Perfumes</span></p>
        </div>
        <div className="absolute top-[40%] lg:top-[20%] right-[3%] lg:right-[20%] gsap-overlay">
          <p className="text-[20px] lg:text-[50px] text-yellow-500 font-bold uppercase font-[cinzelregular]">14T <span className="text-white text-[15px] lg:text-[20px] font-thin">customer</span></p>
        </div>
      </div>

      <div ref={perfumeRef} className="w-[300px] h-[250px] lg:w-[400px] lg:h-[600px] relative z-0">
        <img src={stage} alt="stage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={perfumes[currentIndex]}
            alt={`Perfume ${currentIndex + 1}`}
            className={`w-[200px] h-[180px] lg:w-[400px] lg:h-[350px] object-contain transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>

      {/* 🔥 Swiper Slider for Latest Perfumes */}
      <div className="w-full max-w-6xl mt-16 pb-10 px-4 pt-10">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl text-white font-black font-[cinzelregular]">Our Latest Collection</h3>
          <div className="w-[10%] lg:w-[70%] bg-amber-500 h-[2px]"> </div>
          <p className="text-[15px] text-yellow-500 font-[cinzelregular]">2025</p>
        </div>

        <Swiper
          modules={[Mousewheel, Pagination]}
          mousewheel
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {perfumes.map((img, index) => (
            <SwiperSlide key={index}>
              <NavLink to="/product">
                <div className="bg-white/10 backdrop-blur-md border border-amber-500 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                  <div className="p-5 flex flex-col items-center relative">
                    <img
                      src={img}
                      alt={`Perfume ${index + 1}`}
                      className="w-full h-[250px] object-contain mb-4 drop-shadow-xl z-90"
                    />
                    <h3 className="text-center text-3xl lg:text-[42px] text-shadow-md text-shadow-amber-400 font-bold font-[cinzelregular] text-yellow-300 uppercase tracking-wide absolute top-[70%] left-[35%] lg:left-[44%]">
                      {collections[index]}
                    </h3>
                    <button className="mt-4 px-6 py-2 rounded-full border border-yellow-500 text-yellow-400 font-semibold text-sm hover:bg-yellow-500 hover:text-black transition duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Brand Promise Section */}
      <div className="w-full max-w-[900px] flex flex-col items-center gap-6 px-4 py-10">
        <h3 className="text-2xl lg:text-4xl font-bold font-[cinzelregular] text-white capitallize text-center">
          Brand Promise
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">
          {[brand1, brand2, brand3, brand4].map((img, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2 gsap-brand">
              <img src={img} alt="brand" className="w-12 h-12 object-cover rounded-full" />
              <h4 className="text-amber-400 capitalize leading-tight font-[gil]">
                {i === 0 && "Nature\nMagic"}
                {i === 1 && "Premium\nessential oil"}
                {i === 2 && "No harmful\nchemicals"}
                {i === 3 && "Cruelty\nFree"}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col justify-between items-center mt-5">
        <h2 className="text-2xl lg:text-4xl text-white  capitalize font-[cinzel]">Our Perfumes</h2>
 <div className="w-full px-2 py-2 flex flex-col lg:flex-row items-center gap-6">
        
        <div className="w-[250px] lg:w-[400px]">
          <img src={info1} alt="Blanc" className="w-full h-full object-contain bg-none" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
          <h4 className="text-3xl text-yellow-400 font-bold font-[gil] mb-2">Valentino Eau De Perfume</h4>
          <p className="text-white text-sm lg:text-[18px] font-[gil]">
           A gourmand-leather fusion with hazelnut and coffee, giving a cozy, masculine vibe — often feels like sweet chocolate-covered nuts over a cedar & leather foundation.Bergamot, MyrtleSome users find lovely scent but weak longevity, often fading after about 2–3 hours on skin 
  Hazelnut, Chocolate, Roasted Coffee Beans. </p>
                    <h5 className="text-black bg-yellow-300 px-2 mt-2 uppercase whitespace-nowrap rounded-full font-[cinzel]">20% Concentration on Eau De Perfume</h5>
          <NavLink to='/product'><button className="px-3 py-2  mt-2 border-2 border-amber-400 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black">Buy Now</button></NavLink>
        </div>
      </div>
      <div className="w-full px-2 py-2 flex flex-col lg:flex-row-reverse items-center gap-6">
        
        <div className="w-[250px] lg:w-[400px]">
          <img src={info2} alt="Blanc" className="w-full h-full object-contain" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
          <h4 className="text-3xl text-yellow-400 font-bold font-[gil] mb-2"> Hustler Eau De Perfume</h4>
          <p className="text-white text-sm lg:text-[18px] font-[gil]">
           A stronger concentration compared to body sprays or EDTs.Citrus  Warm woods (such as amberwood), musk  Typically 5–6 hours on skin, according to user experience. Highly peppery and spicy; sometimes described as unusual or incense-like Bold and spicy, but may feel niche—occasionally compared to incense smell.</p>
          <h5 className="text-black bg-yellow-300 px-2 mt-2 uppercase whitespace-nowrap rounded-full font-[cinzel]">20% Concentration on Eau De Perfume</h5>
          <NavLink to='/product'><button className="px-3 py-2  mt-2 border-2 border-amber-400 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black">Buy Now</button></NavLink>
        </div>
      </div>
      <div className="w-full px-2 py-2 flex flex-col lg:flex-row items-center gap-6">
        
        <div className="w-[250px] lg:w-[400px]">
          <img src={info3} alt="Blanc" className="w-full h-full object-contain" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
          <h4 className="text-3xl text-yellow-400 font-black font-[gil] mb-2">Intense Eau De Perfume</h4>
          <p className="text-white text-sm lg:text-[18px] font-[gil]">
           Its smells like Lavender, vanilla, coffee, lemon, musk.It gives off a masculine and luxurious feel, but leans slightly sweet due to the vanilla and plum notes.On average: 2–4 hours (on skin)
might go up to 5–6 hours . And In humid or hot weather 1-2 hours at best.t smells great in the first hour, but it fades faster than expected for an Eau de Parfum.</p>
                    <h5 className="text-black bg-yellow-300 px-2 mt-2 uppercase whitespace-nowrap font-bold rounded-full font-[cinzel]">20% Concentration on Eau De Perfume</h5>

          <NavLink to='/product'><button className="px-3 py-2  mt-2 border-2 border-amber-400 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black">Buy Now</button></NavLink>
        </div>
      </div>
      </div>
     <div className=" w-full reviews  py-10 px-4  mt-10">
  <h2 className="text-2xl text-yellow-400 font-[cinzelregular] font-bold mb-10 text-center">
    Customer Review
  </h2>

  <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
    
    {/* Review 2 - Left */}
    <div className="review bg-white p-6 border-2 border-amber-500  shadow-lg w-full max-w-xs">
      <img
        src={platinum}
        alt="Product 2"
        className="w-full h-auto  mb-4"
      />
      <div className="flex justify-center mb-2 text-yellow-400 text-xl">★★★★★</div>
      <h3 className="text-lg font-semibold text-center font-[gil]">Eau De Parfum | Platinum</h3>
      <p className="text-center text-gray-600 font-[play] mt-2">Very refreshing scent. 👌</p>
    </div>

    {/* Review 1 - Center */}
    <div className="review bg-white p-6  border-2 border-amber-500 shadow-2xl w-full max-w-xs scale-105 md:scale-110 z-10">
      <img
        src="https://www.themancompany.com/cdn/shop/files/600x600_webTitanium_50ml_765x.jpg?v=1726831575"
        alt="Product 1"
        className="w-full h-auto  mb-4"
      />
      <div className="flex justify-center mb-2 text-yellow-400 text-xl">★★★★★</div>
      <h3 className="text-lg font-semibold text-center font-[gil]">Eau De Parfum | Titanium</h3>
      <p className="text-center text-gray-600 mt-2 font-[play]">The product is amazing. 😍</p>
    </div>

    {/* Review 3 - Right */}
    <div className="review bg-white p-6  border-2 border-amber-500 shadow-lg w-full max-w-xs">
      <img
        src={carbon}
        alt="Product 3"
        className="w-full h-auto  mb-4"
      />
      <div className="flex justify-center mb-2 text-yellow-400 text-xl">★★★★★</div>
      <h3 className="text-lg font-semibold text-center font-[gil]">Eau De Parfum | Carbon</h3>
      <p className="text-center text-gray-600 mt-2 font-[play]">Smells great all day! 💯</p>
    </div>
    
  </div>
</div>

     

    </div>
  );
};

export default Home;
