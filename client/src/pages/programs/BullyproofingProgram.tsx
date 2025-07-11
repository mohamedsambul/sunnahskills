
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Calendar, Award, Users, Eye, Heart, Brain } from "lucide-react";

const BullyproofingProgram = () => {
  const features = [
    { icon: <Users size={20} />, text: "Verbal boundary setting and assertiveness" },
    { icon: <Eye size={20} />, text: "Situational awareness and threat recognition" },
    { icon: <Shield size={20} />, text: "Basic grappling and distance control" },
    { icon: <Heart size={20} />, text: "Confidence building and self-esteem development" },
  ];

  const modules = [
    { 
      title: "Verbal Defense Skills", 
      duration: "1 session", 
      age: "8-14 years",
      content: "Learning to set clear boundaries, de-escalation techniques, and assertive communication"
    },
    { 
      title: "Situational Awareness", 
      duration: "1 session", 
      age: "8-14 years",
      content: "Recognizing dangerous situations, trusting instincts, and making smart decisions"
    },
    { 
      title: "Physical Protection", 
      duration: "1 session", 
      age: "8-14 years",
      content: "Basic grappling for distance control, escape techniques, and personal safety"
    },
    { 
      title: "Confidence Building", 
      duration: "1 session", 
      age: "8-14 years",
      content: "Building unshakeable self-confidence through Islamic principles and practical skills"
    },
  ];

  const scenarios = [
    "Verbal bullying and name-calling",
    "Social exclusion and peer pressure",
    "Physical intimidation and threats",
    "Online harassment and cyberbullying",
    "Stranger danger situations",
    "Inappropriate touching or contact",
  ];

  return (
    <div className="min-h-screen bg-lightBeige">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Bullyproofing Workshops
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering young Muslims with confidence, awareness, and practical skills to handle challenging situations
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
                Building Unshakeable Confidence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our bullyproofing workshops go beyond traditional anti-bullying programs. We empower children with 
                practical skills, Islamic confidence principles, and the wisdom to handle difficult situations with 
                grace and strength.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Drawing from Islamic teachings about courage, justice, and standing up for what's right, we help 
                children develop the mental and physical tools they need to protect themselves and others while 
                maintaining their Islamic character and values.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Children learning confidence and self-defense skills"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Comprehensive Skills Training
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our workshops cover all aspects of personal safety and confidence building through structured modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{module.title}</CardTitle>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Ages: {module.age}</span>
                    <span>Duration: {module.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{module.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Covered */}
      <section className="py-16 bg-lightBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Real-World Situations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We prepare students for the situations they may actually encounter in their daily lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Shield className="text-primary mx-auto mb-3" size={32} />
                  <p className="text-gray-700 font-medium">{scenario}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Islamic Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <Heart size={24} />
                  Character Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Courage (Shaja'ah) in the face of injustice</li>
                  <li>• Patience (Sabr) and emotional control</li>
                  <li>• Justice (Adl) and standing up for others</li>
                  <li>• Wisdom (Hikmah) in choosing responses</li>
                  <li>• Forgiveness and mercy when appropriate</li>
                  <li>• Trust in Allah while taking practical steps</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <Brain size={24} />
                  Practical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Clear verbal boundary setting</li>
                  <li>• Body language and confident posture</li>
                  <li>• De-escalation and conflict resolution</li>
                  <li>• Basic self-defense and escape techniques</li>
                  <li>• When and how to seek help</li>
                  <li>• Supporting and protecting others</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-lightBeige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Register for Bullyproofing Workshop
            </h2>
            <p className="text-lg text-gray-600">
              Empower your child with confidence and practical skills for life's challenges.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Complete Registration Online
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our secure online registration form for the Bullyproofing Workshop.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://forms.google.com/bullyproofing-registration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Shield size={20} />
                    Register for Bullyproofing Workshop
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
            Questions About Our Bullyproofing Program?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We understand every child's situation is unique. Contact us to discuss how we can help.
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

export default BullyproofingProgram;
