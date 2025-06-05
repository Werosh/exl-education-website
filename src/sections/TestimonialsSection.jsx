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
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c133?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Data Science Student",
      institution: "MIT",
      text: "The practical projects and real-world applications made all the difference. I went from struggling with statistics to building machine learning models confidently.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Web Development Graduate",
      institution: "UC Berkeley",
      text: "Amazing experience! The curriculum is cutting-edge and the support system is incredible. I built 5 full-stack applications and got hired before graduation.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Park",
      role: "AI/ML Engineer",
      institution: "Carnegie Mellon",
      text: "The hands-on approach to learning AI and machine learning was exceptional. I'm now working on cutting-edge AI projects at a Fortune 500 company.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Lisa Wang",
      role: "Full Stack Developer",
      institution: "Harvard University",
      text: "The mentorship program and project-based learning gave me the confidence to tackle complex development challenges. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [bubbles, setBubbles] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  React.useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 60 + 20,
          left: Math.random() * 100,
          animationDuration: Math.random() * 10 + 8,
          animationDelay: Math.random() * 5,
        });
      }
      setBubbles(newBubbles);
    };
    generateBubbles();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="min-w-full transition-all duration-500">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 mx-4 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-blue-200"
            />
            <div className="ml-3">
              <h4 className="font-semibold text-slate-800 text-sm">
                {testimonial.name}
              </h4>
              <p className="text-blue-600 text-xs">{testimonial.institution}</p>
            </div>
            <div className="ml-auto bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
              {testimonial.score}
            </div>
          </div>
          <div className="flex mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animation: `float ${bubble.animationDuration}s infinite linear`,
              animationDelay: `${bubble.animationDelay}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-600 mb-6">
            What our students are saying
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Arrow Controls */}
        <div className="relative mb-16">
          <button
            onClick={prevTestimonial}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-50 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-50 z-10"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
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
