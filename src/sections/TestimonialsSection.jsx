import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Graduate",
      institution: "Stanford University",
      text: "EXL Education completely transformed my understanding of programming. The personalized approach and expert mentors helped me land my dream job at a top tech company.",
      rating: 5,
      score: "98.5 ATAR",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c133?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Data Science Student",
      institution: "MIT",
      text: "The practical projects and real-world applications made all the difference. I went from struggling with statistics to building machine learning models confidently.",
      rating: 5,
      score: "99.2 ATAR",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Web Development Graduate",
      institution: "UC Berkeley",
      text: "Amazing experience! The curriculum is cutting-edge and the support system is incredible. I built 5 full-stack applications and got hired before graduation.",
      rating: 5,
      score: "97.8 ATAR",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What our students are saying
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-slate-50 rounded-2xl p-12 md:p-16 relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
              />
            </div>

            {/* Student Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-1">
                {testimonials[currentIndex].institution}
              </p>
              <p className="text-slate-600">
                {testimonials[currentIndex].role}
              </p>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mt-3">
                {testimonials[currentIndex].score}
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-blue-500 fill-current mx-1"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-blue-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-slate-600">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98.5%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
