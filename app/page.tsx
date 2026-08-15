'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, User, GraduationCap, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') || form.querySelector<HTMLInputElement>('input[type="text"]')?.value,
      phone: formData.get('phone') || form.querySelector<HTMLInputElement>('input[type="tel"]')?.value,
      email: formData.get('email') || form.querySelector<HTMLInputElement>('input[type="email"]')?.value,
      course: formData.get('course') || form.querySelector<HTMLSelectElement>('select')?.value,
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyD0CPy4bfe8a_tfrTmZ8ZJFACE1WnEpU2N-vN_M9me_kupWa6zVdFPKWgnXbeUG4Pcw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // GOOGLE ADS CONVERSION TRACKING CODE 
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18214496526/6FifCMTz0Ecel7SrO1D'
        });
      }

      setSubmitted(true);
      setIsPopupOpen(false); // Close popup on successful submission
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Open the popup shortly after landing
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-[#141414] border-b border-white/10 text-gray-300 py-2 px-4 sm:px-6 text-xs sm:text-sm hidden md:block">
          <div className="container mx-auto flex justify-start items-center">
            <div className="flex items-center gap-6">
              <span className="font-semibold text-white/50 uppercase tracking-widest text-xs">Contact us:</span>
              <a href="tel:+919717296692" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-gold" /> +91-9717296692
              </a>
              <a href="mailto:swissschoolofbeautyrohini@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-gold" /> swissschoolofbeautyrohini@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="https://www.instagram.com/swissschoolofbeautyrohini/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572334512798" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Header */}
        <header className="bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="bg-white p-1.5 flex flex-col items-center justify-center w-[140px] mb-1">
                <div className="border border-black w-full p-[1px]">
                  <div className="border border-black relative flex flex-col items-center justify-center pt-2 pb-3">
                    <div className="font-serif text-[24px] text-black tracking-[0.05em] leading-none flex items-center ml-1">
                      SW
                      <div className="mx-1 flex flex-col items-center justify-end relative h-[24px] w-[8px]">
                        <div className="bg-[#e31837] w-2.5 h-2.5 rounded-t-sm rounded-b-[1px] absolute top-0 -ml-[0.5px]" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}></div>
                        <div className="bg-black w-[3px] h-[16px] absolute bottom-0 rounded-b-[1px]"></div>
                      </div>
                      SS
                    </div>
                    <div className="absolute -bottom-2 bg-black text-white text-[5px] tracking-[0.3em] py-0.5 pl-2.5 pr-2 rounded-full border-[1.5px] border-white whitespace-nowrap font-bold">
                      SCHOOL OF BEAUTY
                    </div>
                  </div>
                </div>
                <div className="text-black text-[5px] tracking-[0.08em] mt-1.5 font-bold uppercase">
                  International Precision Beauty Mastery
                </div>
              </div>
              <div className="font-sans text-brand-gold text-[10px] font-bold tracking-widest uppercase">
                Rohini Centre
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
              <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
              <a href="#courses" className="hover:text-brand-gold transition-colors">Courses</a>
              <a href="#testimonials" className="hover:text-brand-gold transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
            </nav>
            
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
              Enquire Now
            </a>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-4 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/cover.jpeg"
            alt="Salon Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
              Empowering Beauty Professionals
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Master the Art of <span className="text-brand-gold italic">Aesthetics</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Join the Swiss School of Beauty Rohini. World-class curriculum, hands-on training, and internationally recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-bold text-lg shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                Start Your Journey <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#courses" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                Explore Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-brand-cream text-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[1.05fr_1.35fr] gap-12 lg:gap-20 items-stretch">
            <div className="relative h-full min-h-[420px] md:min-h-[560px] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
              <Image
                src="/makeup.jpg"
                alt="Professional precision beauty makeup portrait"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex h-full flex-col justify-center">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600 mb-6">About Us</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8 text-black">
                Professional Beauty Education With International Precision
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Swiss School of Beauty provides industry-oriented training in Beauty and Wellness with practical learning, expert mentorship and career-focused guidance.
              </p>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                Our courses cover Cosmetology, Makeup, Hair, Beauty, Skin, Nail and Wellness, helping students become industry-ready professionals.
              </p>
              <a href="#contact" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#141414] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">5k+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Placement Support</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">CIDESCO</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 px-4 bg-brand-cream text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our <span className="text-brand-gold italic">Courses</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive courses designed to transform beginners into industry-ready professionals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Makeup Courses',
                image: '/makeup2.jpg',
                desc: 'Build practical and theoretical knowledge related to professional makeup artistry.',
              },
              {
                title: 'Hair Courses',
                image: '/hair.jpg',
                desc: 'Master cutting, styling, finishing and modern professional hair techniques.',
              },
              {
                title: 'Beauty Courses',
                image: '/beauty.jpg',
                desc: 'Learn skin, beauty therapy, client handling and essential salon services.',
              },
              {
                title: 'Cosmetology Courses',
                image: '/cosmetology.jpg',
                desc: 'Comprehensive learning covering beauty, hair, skin and salon practice.',
              },
              {
                title: 'Nail Courses',
                image: '/nail.jpg',
                desc: 'Learn nail art, extension techniques and modern salon-ready nail skills.',
              },
              {
                title: 'Nutrition & Wellness',
                image: '/nutritionist.jpg',
                desc: 'Expand your learning with wellness-focused career-oriented programs.',
              }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group flex flex-col">
                <div className="relative h-60 w-full overflow-hidden shrink-0">
                  <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-serif font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed">{course.desc}</p>
                  <a href="#contact" className="inline-flex items-center text-brand-gold font-bold hover:text-yellow-600 transition-colors">
                    Enquire Now <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Accreditations (Cream Background) */}
      <section id="testimonials" className="py-24 px-4 bg-brand-cream text-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Student <span className="text-brand-gold italic">Success</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our alumni who are now leading professionals in top salons worldwide.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                name: "Anjali Verma",
                role: "Lead Makeup Artist at MAC",
                text: "My journey with Swiss School of Beauty Rohini gave me the foundational skills and international exposure I needed to excel. The faculty's dedication to perfection is truly inspiring."
              },
              {
                name: "Kritika Chawla",
                role: "Celebrity Hairstylist",
                text: "The Cosmetology Diploma was a game-changer. The hands-on training and CIDESCO certification prepared me to confidently step into the professional beauty industry."
              }
            ].map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-xl shadow-black/5 relative">
                <Star className="w-10 h-10 text-brand-gold/20 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-lg italic text-gray-700 mb-6">&quot;{test.text}&quot;</p>
                <div>
                  <div className="font-bold font-serif text-xl">{test.name}</div>
                  <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider">{test.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-black/10 pt-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Internationally Accredited By</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
               <div className="text-2xl font-serif font-bold">CIDESCO</div>
               <div className="text-2xl font-serif font-bold">CIBTAC</div>
               <div className="text-2xl font-serif font-bold">VTCT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#141414]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Take the <span className="text-brand-gold italic">First Step</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Ready to turn your passion for beauty into a lucrative career? Fill out the form, and our career counselors will get in touch with you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase">Call Us</div>
                    <a href="tel:+919717296692" className="text-xl font-semibold hover:text-brand-gold transition-colors">+91 9717296692</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase">Email Us</div>
                    <a href="mailto:swissschoolofbeautyrohini@gmail.com" className="text-lg font-semibold hover:text-brand-gold transition-colors break-all">swissschoolofbeautyrohini@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase">Visit Us</div>
                    <a href="https://maps.app.goo.gl/cJMqkTPhLr3FcvHQ7" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-brand-gold transition-colors block">
                      Swiss School Of Beauty Rohini, New Delhi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a href="https://www.instagram.com/swissschoolofbeautyrohini/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61572334512798" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
             <form className="space-y-6" onSubmit={(e) => handleSubmit(e, 'contact')}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interested Course</label>
                  <div className="relative">
                    <select name="course" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-pointer">
                      <option value="">Select a course</option>
                      <option value="Makeup Courses">Makeup Courses</option>
                      <option value="Hair Courses">Hair Courses</option>
                      <option value="Beauty Courses">Beauty Courses</option>
                      <option value="Cosmetology Courses">Cosmetology Courses</option>
                      <option value="Nail Courses">Nail Courses</option>
                      <option value="Nutrition & Wellness">Nutrition & Wellness</option>
                    </select>
                    <ChevronRight className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-xl bg-[#d4af37] text-black font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
                    loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-[#c39f30] active:scale-[0.98] cursor-pointer'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      Submit Enquiry 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <div className="font-serif text-2xl font-bold text-white mb-4 flex items-center justify-center">
            <span className="text-brand-gold mr-2">Swiss School of Beauty Rohini</span> 
          </div>
          <p className="mb-6">Empowering the next generation of beauty leaders.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/swissschoolofbeautyrohini/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572334512798" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">YouTube</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Swiss School of Beauty Rohini. All rights reserved.</p>
        </div>
      </footer>

      {/* Enquiry Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative w-full max-w-md bg-[#fdfaf5] rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Decorative blob top right */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#f5ebd7] rounded-full opacity-70 blur-xl pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8 sm:p-10">
                <h3 className="text-[32px] font-serif font-bold text-black leading-tight mb-2">
                  Get Course Details
                </h3>
                <p className="text-gray-600 mb-8">
                  Share your details. Our counsellor will call you.
                </p>

                <form className="space-y-5" onSubmit={(e) => handleSubmit(e, 'popup')}>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Your Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-white border border-[#e5d9c5] rounded-2xl pl-12 pr-4 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" 
                        placeholder="Enter your full name" 
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full bg-white border border-[#e5d9c5] rounded-2xl pl-12 pr-4 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" 
                        placeholder="Enter mobile number" 
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-white border border-[#e5d9c5] rounded-2xl pl-12 pr-4 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" 
                        placeholder="Enter email address" 
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Select Course</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                      <select 
                        name="course"
                        required
                        className="w-full bg-white border border-[#e5d9c5] rounded-2xl pl-12 pr-10 py-3.5 text-black focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-pointer invalid:text-gray-400"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-gray-400">Choose your course</option>
                        <option value="Makeup Courses" className="text-black">Makeup Courses</option>
                        <option value="Hair Courses" className="text-black">Hair Courses</option>
                        <option value="Beauty Courses" className="text-black">Beauty Courses</option>
                        <option value="Cosmetology Courses" className="text-black">Cosmetology Courses</option>
                        <option value="Nail Courses" className="text-black">Nail Courses</option>
                        <option value="Nutrition & Wellness" className="text-black">Nutrition & Wellness</option>
                      </select>
                      <ChevronRight className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full mt-2 py-4 rounded-2xl bg-[#dcb163] text-black font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                      loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-[#c99f52] active:scale-[0.98] cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        Submit Enquiry <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
                    Your information is safe with us. We will contact you only for course counselling.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}