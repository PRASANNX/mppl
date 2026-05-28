'use client';

export default function CTASection() {
  return (
    <section className="bg-neon-green w-full py-24 px-6 lg:px-16" id="register">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Copy */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-bebas text-league-black text-[clamp(64px,10vw,120px)] leading-[0.85] mb-6 tracking-tight">
            READY<br/>TO PLAY?
          </h2>
          <p className="font-dm-sans text-black/70 text-lg max-w-sm mx-auto md:mx-0">
            Register your interest for MPPL 2026. Open for players, teams, and sponsors.
            Be the first to know when registrations open.
          </p>
          
          <div className="mt-12 hidden md:block">
            <p className="font-dm-sans text-sm font-bold text-black/50 mb-3 uppercase tracking-widest">
              Or connect directly
            </p>
            <button className="bg-league-black text-white px-6 py-3 rounded-full font-dm-sans font-bold flex items-center gap-2 hover:bg-black transition-colors">
              <span className="text-neon-green">💬</span> WhatsApp Us
            </button>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="flex flex-col gap-4 font-dm-sans">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider">Full Name</label>
                <input type="text" className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors" placeholder="Enter your full name" />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider">Phone Number</label>
                <input type="tel" className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors" placeholder="+91" />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider">Email</label>
                <input type="email" className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors" placeholder="Your email address" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-black/60 uppercase tracking-wider">City</label>
                  <select className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors">
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Gwalior</option>
                    <option>Jabalpur</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-black/60 uppercase tracking-wider">Experience</label>
                  <select className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Pro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider">Category</label>
                <select className="border-b-2 border-black/10 py-2 focus:outline-none focus:border-neon-green bg-transparent transition-colors">
                  <option>Open Men's</option>
                  <option>Open Women's</option>
                  <option>Mixed Doubles</option>
                  <option>30+ Men's</option>
                  <option>Under 18</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <button type="button" className="mt-6 bg-league-black text-neon-green font-bebas text-2xl py-4 rounded-lg hover:bg-black transition-colors tracking-wide">
                REGISTER INTEREST →
              </button>
            </form>
          </div>
          
          <div className="mt-8 flex flex-col items-center md:hidden">
            <p className="font-dm-sans text-sm font-bold text-black/50 mb-3 uppercase tracking-widest">
              Or connect directly
            </p>
            <button className="bg-league-black text-white px-6 py-3 rounded-full font-dm-sans font-bold flex items-center gap-2">
              <span className="text-neon-green">💬</span> WhatsApp Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
