import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import hitesh from "../assets/hitesh.png";
import hitesh2 from "../assets/hitesh2.png";
import parvesh from "../assets/Parvesh.png"
import bhisham from "../assets/Bhisham.png";
import ayushman from "../assets/ayushman.jpg"
import emami from "../assets/emami.png"
const AboutPage = () => {
  const timelineRef = useRef(null);
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    gsap.from('.timeline-item', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto font-[cinzelregular] text-black space-y-20">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-amber-500 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About The Man Company
      </motion.h1>

      {/* Founder Introduction */}
      <motion.div
        className="flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <img
          src={hitesh}
          alt="Hitesh Dhingra"
          className="rounded-full w-[200px] h-[200px] object-cover shadow-lg"
        />
        <p className="text-lg text-white max-w-3xl leading-relaxed font-[gil]">
          Founded in 2015 by <strong className='text-amber-500 font-[cinzelregular]'>Hitesh Dhingra</strong>, The Man Company delivers premium men’s grooming products made from natural ingredients. With support from <strong className='text-amber-300 font-[cinzelregular]'>Emami Ltd</strong> and a celebrity face in <strong className='text-amber-300'>Ayushmann Khurrana</strong>, it has redefined modern masculinity in India.
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {[ 
          { name: "Hitesh Dhingra", img: hitesh2, desc: "Founder & MD. Ex-founder of Letsbuy.com and a pioneer in Indian digital commerce." },
          { name: "Parvesh Bareja", img: parvesh, desc: "Co-founder. Heads brand expansion and user operations with a sharp execution focus." },
          { name: "Bhisham Bhateja", img: bhisham, desc: "Co-founder. Manages supply chain, backend, and logistics frameworks." }
        ].map((member, i) => (
          <motion.div
            key={i}
            className="bg-yellow-400  shadow-xl  p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="relative w-36 h-36 mb-3">
              <div className="absolute inset-0 rounded-full border-4 border-black animate-spin-slow"></div>
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-36 h-36 object-contain relative z-10"
              />
            </div>
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Journey Timeline */}
      <div ref={timelineRef} className="space-y-10">
        <h2 className="text-3xl font-bold text-center  text-amber-500">Journey Timeline</h2>
        {[
          { year: '2015', event: 'Company Founded by Hitesh Dhingra and team.' },
          { year: '2017', event: 'Emami Ltd. joins as strategic investor, powering product innovation and growth.' },
          { year: '2019', event: 'Bollywood actor Ayushmann Khurrana joins as investor & brand ambassador.' },
          { year: '2024', event: 'Emami acquires 100% stake in The Man Company. Valuation exceeds ₹400 Cr.' }
        ].map((item, i) => (
          <div key={i} className="timeline-item bg-yellow-500 border-2 border-white  p-5  shadow-sm">
            <h3 className="text-lg font-bold text-indigo-600">{item.year}</h3>
            <p className="text-black text-sm mt-1">{item.event}</p>
          </div>
        ))}
      </div>

      {/* Emami Acquisition */}
      <motion.div
        className="border-2 border-amber-400 bg-black shadow-lg p-8 text-center flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={emami} alt="Emami Ltd." className="w-24 h-24 object-contain rounded-full " />
        <h2 className="text-xl font-semibold text-indigo-600">Emami Acquisition</h2>
        <p className="text-gray-300 max-w-xl">
          In 2024, Emami Ltd. acquired full ownership of The Man Company, recognizing its rapid growth and premium D2C positioning in India’s grooming market.
        </p>
      </motion.div>

      {/* Ayushmann Section */}
      <motion.div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-amber-500">Celebrity Investor</h2>
        <motion.img
          src={ayushman}
          alt="Ayushmann Khurrana"
          className="w-40 h-40 object-cover mx-auto rounded-full shadow-md"
          whileHover={{ scale: 1.05 }}
        />
        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
          Actor <strong>Ayushmann Khurrana</strong> is not only a brand ambassador but also a strategic investor, embodying the brand’s modern and sophisticated identity.
        </p>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-amber-500">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Karan, Delhi', text: 'Their perfume collection is amazing. Lasts all day!' },
            { name: 'Faiz, Mumbai', text: 'Love the beard oil – it nourishes well.' },
            { name: 'Ayushmann Khurrana', text: 'The products are elegant, subtle, and perfect for everyday use.' }
          ].map((review, i) => (
            <motion.div
              key={i}
              className="bg-yellow-500 border-white border-2  p-4 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="italic text-sm text-gray-700 mb-2">"{review.text}"</p>
              <p className="text-xs text-white">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div className="text-center space-y-4" ref={videoRef}>
        <h2 className="text-2xl font-bold text-amber-500">Watch Our Story</h2>
        <div className="w-full aspect-w-16 aspect-h-9">
          {videoVisible && (
            <iframe
              className="w-full h-96 rounded-xl object-cover"
              src="https://www.youtube.com/embed/0XXDilO4bq0?autoplay=1&mute=1"
              title="The Man Company Story"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </motion.div>

      {/* Animation CSS */}
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
