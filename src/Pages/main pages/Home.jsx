import React from "react";
import HeroSection from "../../sections/Hero";
import StatsSection from "../../sections/StatsSection";
import Features from "../../sections/FeaturesSection";
import Subjects from "../../sections/SubjectsSection";
import Testimonials from "../../sections/TestimonialsSection";
import AboutSection from "../../sections/AboutSection";
import TeacherSection from "../../sections/TeacherSection";

// Mock Framer Motion components for animation

const AnimatedLandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <Features />

      {/* Teacher Section */}
      <TeacherSection />

      {/* Subjects Section */}
      <Subjects />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default AnimatedLandingPage;
