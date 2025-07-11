
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Clock, Calendar, Award, Heart, Brain, Eye, Focus } from "lucide-react";

const ArcheryProgram = () => {
  const features = [
    { icon: <Target size={20} />, text: "Traditional and modern archery techniques" },
    { icon: <Focus size={20} />, text: "Concentration and mental discipline training" },
    { icon: <Eye size={20} />, text: "Hand-eye coordination and precision development" },
    { icon: <Heart size={20} />, text: "Patience, perseverance, and self-control" },
  ];

  const levels = [
    { 
      level: "Beginner Archers", 
      age: "6-12 years", 
      equipment: "Foam-tipped arrows, youth bows",
      skills: "Basic stance, nocking, drawing, and releasing techniques"
    },
    { 
      level: "Intermediate Archers", 
      age: "10-15 years", 
      equipment: "Traditional recurve bows, target arrows",
      skills: "Form refinement, distance shooting, competitive preparation"
    },
    { 
      level: "Advanced Archers", 
      age: "13+ years", 
      equipment: "Competition-grade equipment",
      skills: "Advanced techniques, tournament preparation, teaching assistance"
    },
  ];

  return (
    <div className="min-h-screen bg-lightBeige">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Traditional Archery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Following the Sunnah of Prophet Muhammad (ﷺ), developing focus, precision, and character through the noble art of archery
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
                The Prophet's Sport
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Archery holds a special place in Islamic tradition. The Prophet Muhammad (ﷺ) encouraged archery as both 
                a practical skill and a means of developing discipline and focus. Our program honors this tradition while 
                teaching modern safety practices and competitive techniques.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Students learn not just to hit targets, but to develop the mental clarity, patience, and steady hand that 
                archery requires. These skills transfer directly to academic performance, emotional regulation, and 
                spiritual development.
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
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Youth practicing traditional archery"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skill Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Progressive Skill Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our archery program is structured to safely develop skills from complete beginner to competitive archer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary text-xl">{level.level}</CardTitle>
                  <div className="text-2xl font-bold text-secondary">{level.age}</div>
                  <div className="text-sm text-gray-600 italic">{level.equipment}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">{level.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Equipment */}
      <section className="py-16 bg-lightBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Safety First Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <Target size={24} />
                  Equipment & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Age-appropriate bows and safety equipment provided</li>
                  <li>• Professional safety supervision at all times</li>
                  <li>• Foam-tipped arrows for beginners</li>
                  <li>• Clear safety protocols and range rules</li>
                  <li>• Arm guards and finger tabs included</li>
                  <li>• Regular equipment inspection and maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <Brain size={24} />
                  Skills Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Proper stance and shooting form</li>
                  <li>• Breathing techniques for accuracy</li>
                  <li>• Mental focus and concentration</li>
                  <li>• Distance and wind judgment</li>
                  <li>• Equipment care and maintenance</li>
                  <li>• Competitive shooting preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Register for Archery Program
            </h2>
            <p className="text-lg text-gray-600">
              Join our traditional archery program and develop focus, precision, and character.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Complete Registration Online
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our secure online registration form for the Archery program.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://forms.google.com/archery-registration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Target size={20} />
                    Register for Archery Program
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
            Ready to Start Your Archery Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about equipment, skill levels, or class times? We're here to help guide you.
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

export default ArcheryProgram;
