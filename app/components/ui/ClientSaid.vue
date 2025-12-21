import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "OmahTI memberikan kinerja terbaiknya dalam mebuat Website!",
      name: "Dhimas Sulistio",
      position: "Web Developer",
      rating: "20° FS",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dhimas"
    },
    {
      id: 2,
      quote: "Pelayanan yang sangat profesional dan hasil yang memuaskan. Highly recommended!",
      name: "Sarah Johnson",
      position: "Product Manager",
      rating: "18° FS",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 3,
      quote: "Tim yang solid dan komunikatif. Proyek selesai tepat waktu dengan kualitas terbaik.",
      name: "Ahmad Rizki",
      position: "CEO Startup",
      rating: "19° FS",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-orange-50 to-blue-50 p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          What Our <span className="text-orange-500">Clients</span> Say About Us
        </h2>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Testimonial Text */}
            <div className="space-y-6">
              {/* Quote Icon */}
              <div className="relative">
                <Quote className="w-16 h-16 text-gray-300 absolute -top-4 -left-2" />
                <div className="text-gray-400 text-6xl font-bold opacity-20">
                  {testimonials[currentIndex].rating}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-orange-200"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Phone 1 */}
                <div className="w-64 h-[500px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-[3rem] p-3 shadow-2xl transform -rotate-12 absolute left-0">
                  <div className="bg-white rounded-[2.5rem] h-full w-full overflow-hidden">
                    <div className="h-6 bg-black rounded-b-3xl mx-auto w-32"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-3 bg-blue-100 rounded w-full"></div>
                      <div className="h-3 bg-blue-100 rounded w-5/6"></div>
                      <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mt-4"></div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-20 bg-blue-100 rounded"></div>
                        <div className="h-20 bg-blue-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-12 relative ml-32">
                  <div className="bg-white rounded-[2.5rem] h-full w-full overflow-hidden">
                    <div className="h-6 bg-black rounded-b-3xl mx-auto w-32"></div>
                    <div className="p-4 space-y-2">
                      <div className="text-xs font-bold text-blue-600 mb-2">50+</div>
                      <div className="h-3 bg-orange-200 rounded w-3/4"></div>
                      <div className="h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mt-4"></div>
                      <div className="space-y-2 mt-4">
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-16 bg-blue-600 rounded mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-orange-500'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}