"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/images/baby_silva.jpeg",
      title: "The Big Reveal",
      description: "The moment we found out it was a little princess"
    },
    {
      image: "/images/BA4FEDD5-7BAC-41C4-8882-380B228DEFD0_1_105_c.jpeg",
      title: "Anticipation",
      description: "Excited for all the moments we will share with our baby girl"
    },
    {
      image: "/images/5F8C52CC-AEDF-4EF7-9BED-B7DF085C6727_1_105_c.jpeg",
      title: "Growing with Love",
      description: "Every step closer to meeting our baby girl"
    },
    {
      image: "/images/A07C81EA-CA20-4454-86A6-92AFCF05EC98_1_105_c.jpeg",
      title: "Pure Joy",
      description: "The excitement and happiness we are living while waiting"
    },
    {
      image: "/images/D9F8668D-35DE-499F-AF9E-C7494F886B72_1_105_c.jpeg",
      title: "Summer Time",
      description: "Enjoying the summer with our little baby"
    },
    {
      image: "/images/F0841BF9-5E6D-4EB4-8246-54A02C5B5E32_1_105_c.jpeg",
      title: "Beautiful Moments",
      description: "Our little family is growing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]); // Reset timer when currentSlide changes

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-stone-100">
      {/* Interactive Photo Slideshow */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-serif text-rose-800 mb-6">
              It&apos;s a Girl! 💕
            </h1>
            
            {/* Ultrasound Photo Section */}
            <div className="mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
                <Image
                  src="/images/ultrasound.png"
                  alt="Baby Silva Ultrasound"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-rose-600 font-medium">First glimpse of our little princess</p>
            </div>
            
            <div className="w-32 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 font-light">
              Our beautiful journey continues... 💕
            </p>
          </div>
          
          {/* Slideshow Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-200 overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px]">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-rose-600 rounded-full p-2 md:p-4 shadow-xl border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-20"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-rose-600 rounded-full p-2 md:p-4 shadow-xl border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-20"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Background Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:from-black/70 md:via-black/40"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-14 md:bottom-16 left-4 right-4 md:left-8 md:right-8 text-white z-10">
              <h3 className="text-lg md:text-3xl lg:text-4xl font-serif mb-2 md:mb-3 drop-shadow-lg leading-tight">{slides[currentSlide].title}</h3>
              <p className="text-sm md:text-base lg:text-lg opacity-90 drop-shadow-md leading-relaxed">{slides[currentSlide].description}</p>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-white scale-110 shadow-lg'
                      : 'bg-white/60 hover:bg-white/90'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="text-center py-8 px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-rose-800 mb-4">
          Baby Silva&apos;s Shower 🛁
        </h2>
        <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
        <p className="text-lg text-stone-600 font-light">
          Join us in celebrating our little princess
        </p>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Grid Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Date & Time Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 text-center">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-rose-800 mb-2">When</h3>
              <p className="text-stone-600">September 6th, 2025</p>
              <p className="text-stone-600">4:30 PM</p>
            </div>

            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 text-center">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-rose-800 mb-2">Where</h3>
              <p className="text-stone-600">24951 112 Ave</p>
              <p className="text-stone-600 text-sm">Maple Ridge, BC</p>
              <p className="text-stone-500 text-sm">
                <a 
                  href="https://maps.app.goo.gl/NF75Eho5beoLUC7s8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-700 hover:underline transition-colors"
                >
                  📍 View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* RSVP & Registry Section */}
        <section className="bg-gradient-to-r from-rose-100 to-stone-100 rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-800 mb-4">
              RSVP & Registry 🎁
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Your presence is the greatest gift of all, but if you&apos;d like to contribute to Baby Silva&apos;s journey, 
              feel free to check out our gift registry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* RSVP Card */}
            <div className="bg-white/60 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-rose-800 mb-4">Please RSVP</h3>
              <p className="text-stone-600 mb-6">
                Let us know you&apos;ll be joining our celebration
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdvmyCghLWmUXZ36I7ddCEAuBzDHZr5RYyrWF-t0EKhK-VBGg/viewform?usp=sharing&ouid=112872763500968537636"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
              >
                RSVP Now
              </a>
            </div>

            {/* Registry Card */}
            <div className="bg-white/60 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-rose-800 mb-4">Baby Registry</h3>
              <p className="text-stone-600 mb-6">
                Thoughtfully curated items to welcome our little princess
              </p>
              <a 
                href="https://www.amazon.ca/baby-reg/jhancarlos-silvamartinez-andreasofia-guardadoescobar-december-2025-mapleridge/64911REDF9RL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
              >
                View Registry
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-6 border-t border-rose-200">
        <p className="text-stone-500 text-sm">
          With love and anticipation • The Silva Family
        </p>
        <p className="text-rose-400 text-xs mt-2">
          💕 Welcome little princess 💕
        </p>
      </footer>
    </div>
  );
}
