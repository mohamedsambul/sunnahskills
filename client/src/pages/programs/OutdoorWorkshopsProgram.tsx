
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Clock, Calendar, Award, Compass, Mountain, Leaf, Sun } from "lucide-react";

const OutdoorWorkshopsProgram = () => {
  const features = [
    { icon: <TreePine size={20} />, text: "Survival skills and outdoor preparedness" },
    { icon: <Compass size={20} />, text: "Navigation skills and orienteering" },
    { icon: <Mountain size={20} />, text: "Hiking, camping, and outdoor exploration" },
    { icon: <Leaf size={20} />, text: "Environmental awareness and nature connection" },
  ];

  const workshops = [
    { 
      title: "Basic Survival Skills", 
      age: "8-15 years", 
      duration: "Full Day",
      skills: "Fire making, shelter building, water purification, basic first aid"
    },
    { 
      title: "Navigation & Orienteering", 
      age: "10-16 years", 
      duration: "Half Day",
      skills: "Map reading, compass use, GPS basics, natural navigation signs"
    },
    { 
      title: "Outdoor Cooking", 
      age: "6-14 years", 
      duration: "Half Day",
      skills: "Camp cooking, food safety, outdoor meal planning, halal considerations"
    },
    { 
      title: "Nature Photography", 
      age: "8-16 years", 
      duration: "Full Day",
      skills: "Wildlife photography, composition, nature journaling, observation skills"
    },
  ];

  const seasons = [
    { season: "Spring", focus: "Nature awakening, plant identification, hiking" },
    { season: "Summer", focus: "Water activities, camping skills, extended outdoor time" },
    { season: "Fall", focus: "Tracking, foraging basics, weather awareness" },
    { season: "Winter", focus: "Cold weather skills, indoor planning, equipment care" },
  ];

  return (
    <div className="min-h-screen bg-lightBeige">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Outdoor Workshops
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connecting young Muslims with Allah's creation through hands-on outdoor education and survival skills
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
                Learning from Allah's Creation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our outdoor workshops combine practical wilderness skills with Islamic values of environmental 
                stewardship and appreciation for Allah's creation. Students learn essential outdoor skills while 
                developing a deeper connection to the natural world.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From basic survival techniques to advanced outdoor leadership, our programs build confidence, 
                self-reliance, and respect for nature. Each workshop emphasizes safety, environmental awareness, 
                and the Islamic principle of being good stewards of the Earth.
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
                src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Children learning outdoor skills in nature"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Hands-On Learning Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each workshop focuses on specific outdoor skills with age-appropriate instruction and safety protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{workshop.title}</CardTitle>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Ages: {workshop.age}</span>
                    <span>Duration: {workshop.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{workshop.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Programs */}
      <section className="py-16 bg-lightBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Year-Round Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our workshops adapt to the seasons, taking advantage of nature's changing classroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">{season.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{season.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <TreePine size={24} />
                  Safety & Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Certified outdoor education instructors</li>
                  <li>• First aid and emergency protocols</li>
                  <li>• Age-appropriate tool safety training</li>
                  <li>• Weather monitoring and backup plans</li>
                  <li>• All safety equipment provided</li>
                  <li>• Small instructor-to-student ratios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-2">
                  <Compass size={24} />
                  What to Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Weather-appropriate clothing</li>
                  <li>• Sturdy outdoor shoes/boots</li>
                  <li>• Water bottle and healthy snacks</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                  <li>• Personal medication if needed</li>
                  <li>• Positive attitude and open mind!</li>
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
              Register for Outdoor Workshops
            </h2>
            <p className="text-lg text-gray-600">
              Join us for hands-on outdoor learning experiences that build skills and character.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Complete Registration Online
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our secure online registration form for Outdoor Workshops.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://forms.google.com/outdoor-workshops-registration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <TreePine size={20} />
                    Register for Outdoor Workshops
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
            Ready for Outdoor Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about specific workshops, skill levels, or what to expect? We're here to help!
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

export default OutdoorWorkshopsProgram;
