import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      description: "We source the finest Mediterranean ingredients daily from local farmers and suppliers.",
      icon: "🌿"
    },
    {
      title: "Traditional Recipes",
      description: "Authentic family recipes passed down through generations with a modern twist.",
      icon: "👨‍🍳"
    },
    {
      title: "Cozy Atmosphere",
      description: "Warm, welcoming environment perfect for family dinners and romantic dates.",
      icon: "🏠"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "The best Mediterranean food in Chicago! The atmosphere is perfect and the staff is incredibly friendly.",
      rating: 5
    },
    {
      name: "Mike Chen",
      review: "Amazing flavors and generous portions. The lemon chicken is absolutely divine!",
      rating: 5
    },
    {
      name: "Emma Davis",
      review: "A hidden gem! Perfect for date nights. The ambiance and food quality are outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#495E57] to-[#F4CE14] text-white py-20 px-5 text-center flex-none">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h1 className="text-6xl font-bold mb-3 text-[#F4CE14]">
              Little Lemon
            </h1>
            <h2 className="text-3xl mb-5 text-white">
              Chicago
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-gray-200">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. Experience the
              authentic flavors of the Mediterranean in the heart of Chicago.
            </p>
            <Link to="/booking">
              <button 
                className="bg-[#F4CE14] text-[#495E57] border-none px-8 py-4 text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Reserve a table at Little Lemon"
              >
                Reserve Table
              </button>
            </Link>
          </div>
          <div className="text-center">
            <img 
              src={food1} 
              alt="Delicious Mediterranean food at Little Lemon restaurant" 
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </section>
      </header>

      {/* Features Section */}
      <section className="py-20 px-5 bg-gray-50 flex-1">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-[#495E57] mb-5">
            Why Choose Little Lemon?
          </h2>
          <p className="text-lg text-gray-600 mb-15">
            Discover what makes our restaurant special
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-5xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl text-[#495E57] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-5 bg-[#495E57] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-[#F4CE14] mb-5">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-200 mb-15">
            Don't just take our word for it
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#F4CE14] text-xl">⭐</span>
                  ))}
                </div>
                <p className="italic mb-5 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <h4 className="text-[#F4CE14] text-lg">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-15 px-5 bg-[#F4CE14] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-[#495E57] mb-5">
            Ready for an Unforgettable Dining Experience?
          </h2>
          <p className="text-lg text-[#495E57] mb-8">
            Book your table today and taste the authentic flavors of the Mediterranean
          </p>
          <Link to="/booking">
            <button 
              className="bg-[#495E57] text-white border-none px-10 py-4 text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Make a reservation"
            >
              Make a Reservation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
