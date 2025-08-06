import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-stone-100">
      {/* Gender Reveal Carousel */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-serif text-rose-800 mb-4">
              It's a Girl! 💕
            </h1>
            <div className="w-32 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 font-light">
              Our journey to meeting Baby Silva
            </p>
          </div>
          
          {/* Photo Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-200">
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/baby_silva.jpeg"
                  alt="Gender Reveal Photo 1"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-stone-700 font-medium">The Big Reveal</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-200">
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">👶🏻</div>
                  <p className="text-rose-700 font-serif text-lg">Our Story</p>
                </div>
              </div>
              <p className="text-center text-stone-700 font-medium">Beautiful Moments</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-200">
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌸</div>
                  <p className="text-rose-700 font-serif text-lg">Little Princess</p>
                </div>
              </div>
              <p className="text-center text-stone-700 font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="text-center py-8 px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-rose-800 mb-4">
          Baby Silva's Shower
        </h2>
        <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
        <p className="text-lg text-stone-600 font-light">
          Join us in celebrating our little princess
        </p>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Timeline Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200">
            <h2 className="text-2xl md:text-3xl font-serif text-rose-800 mb-8 text-center">
              Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-rose-400 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-stone-800">Welcome & Mingling</h3>
                  <p className="text-stone-600 text-sm">2:00 PM - Light refreshments and games</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-rose-400 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-stone-800">Gift Opening</h3>
                  <p className="text-stone-600 text-sm">3:00 PM - Watch Baby Silva's first presents</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-rose-400 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-stone-800">Sweet Treats</h3>
                  <p className="text-stone-600 text-sm">4:00 PM - Cake and celebration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Date & Time Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 text-center">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-rose-800 mb-2">When</h3>
              <p className="text-stone-600">Saturday, March 15th</p>
              <p className="text-stone-600">2:00 PM - 5:00 PM</p>
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
              <p className="text-stone-600">The Garden Room</p>
              <p className="text-stone-600 text-sm">123 Bloom Street</p>
            </div>

            {/* Baby Photo Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                <Image
                  src="/images/baby_silva.jpeg"
                  alt="Baby Silva"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-rose-800 mb-2">Our Little Princess</h3>
              <p className="text-stone-600">Coming Soon</p>
              <p className="text-stone-600 text-sm">We can't wait to meet our baby girl!</p>
            </div>
          </div>
        </section>

        {/* RSVP & Registry Section */}
        <section className="bg-gradient-to-r from-rose-100 to-stone-100 rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-800 mb-4">
              RSVP & Registry
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Your presence is the greatest gift, but if you'd like to contribute to Baby Silva's journey, 
              we've curated a special registry of princess-worthy essentials.
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
                Let us know you'll be joining our celebration by March 1st
              </p>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                RSVP Now
              </button>
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
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                View Registry
              </button>
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
          💕 Welcome to our little princess 💕
        </p>
      </footer>
    </div>
  );
}
