
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Calendar, Award, Heart, Brain, Dumbbell, Shield } from "lucide-react";

const BJJProgram = () => {
  const features = [
    { icon: <Users size={20} />, text: "Fundamental grappling techniques and positions" },
    { icon: <Heart size={20} />, text: "Physical fitness and coordination development" },
    { icon: <Brain size={20} />, text: "Problem-solving skills and mental resilience" },
    { icon: <Shield size={20} />, text: "Self-defense applications and safety awareness" },
  ];

  const ageGroups = [
    { group: "Little Warriors", age: "4-6 years", time: "30 minutes", focus: "Basic movements, listening skills, following instructions" },
    { group: "Young Grapplers", age: "7-10 years", time: "45 minutes", focus: "Fundamental techniques, respect, teamwork" },
    { group: "Teen Champions", age: "11-15 years", time: "60 minutes", focus: "Advanced techniques, competition preparation, leadership" },
  ];

  return (
    <div className="min-h-screen bg-lightBeige">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Brazilian Jiu-Jitsu
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              The gentle art that builds character, confidence, and unshakeable mental toughness through Islamic principles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <a href="#registration-form">Register Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/schedule">View Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-6">
                The Gentle Art
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Brazilian Jiu-Jitsu is more than just a martial art—it's a tool for developing the complete person. 
                Through the practice of grappling, leverage, and technique over strength, students learn valuable life 
                lessons about perseverance, problem-solving, and maintaining composure under pressure.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our program integrates Islamic values of respect, discipline, and community while teaching practical 
                self-defense skills that build confidence and character in young Muslims.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555597408-4e8d5d1e2f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Children practicing Brazilian Jiu-Jitsu"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Age-Appropriate Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each age group has specially designed curriculum that matches their developmental stage and learning capacity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary text-xl">{group.group}</CardTitle>
                  <div className="text-2xl font-bold text-secondary">{group.age}</div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>{group.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">{group.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-lightBeige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Register for BJJ Program
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your child's Brazilian Jiu-Jitsu journey? Fill out our registration form below.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Complete Registration Online
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our secure online registration form for the Brazilian Jiu-Jitsu program.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://forms.google.com/bjj-registration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Award size={20} />
                    Register for BJJ Program
                  </a>
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  You'll be redirected to a secure Google Form to complete your registration
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Questions About Our BJJ Program?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us for more information about class schedules, pricing, or what to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/schedule">View Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BJJProgram;
