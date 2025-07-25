import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Fast Delivery',
    desc: 'Get your products delivered in 2–3 days across India.',
    icon: '🚚'
  },
  {
    title: '24/7 Support',
    desc: 'We’re always here to assist you. Call or chat anytime.',
    icon: '💬'
  },
  {
    title: 'Easy Returns',
    desc: 'Hassle-free returns within 7 days of delivery.',
    icon: '🔁'
  },
  {
    title: 'Secure Payments',
    desc: 'Your data is protected with top-tier security.',
    icon: '🔒'
  }
];

const Service = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: 'power4.out'
    });

    // Service cards animation on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    // CTA bounce animation
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1.5,
      ease: 'bounce.out'
    });
  }, []);

  return (
    <div className="min-h-screen text-white py-12 px-4 md:px-20 font-[cinzelregular]">
      {/* Hero */}
      <div ref={heroRef} className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">Our Services</h1>
        <p className="text-gray-300 text-lg mt-4">We offer more than just perfumes — we deliver excellence.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-[#1f1f1f] border border-yellow-500 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{service.title}</h2>
            <p className="text-gray-400 font-[gil]">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="mt-24 text-center">
        <h3 className="text-3xl md:text-4xl text-white font-bold mb-4">Ready to explore premium scents?</h3>
       <NavLink to="/product">
  <button className="p-4 lg:p-5 py-2 lg:py-3 border-2 border-yellow-500 text-[10px] lg:text-xl text-yellow-500 rounded-full font-bold font-[gil] cursor-pointer">
    SHOP NOW
  </button>
</NavLink>
      </div>
    </div>
  );
};

export default Service;
