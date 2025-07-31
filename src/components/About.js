import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-[#495E57] to-[#3A4B47] text-white py-16 px-8 text-center mb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
            About Little Lemon
          </h1>
          <h2 className="text-3xl text-[#F4CE14] mb-6 font-normal">
            Chicago's Mediterranean Gem
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover the story behind our family-owned Mediterranean restaurant
          </p>
        </div>
      </section>

      <section className="px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. We
              are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our chefs draw inspiration from Italian, Greek, and Turkish
              culture and have a menu of 12–15 items that they rotate
              seasonally. The restaurant has a rustic and relaxed atmosphere
              with moderate prices, making it a popular place for a meal any
              time of the day.
            </p>

            <h3 className="text-[#495E57] text-xl font-medium mb-4">
              Our Story
            </h3>
            <p className="text-lg leading-relaxed">
              Founded in 1995 by brothers Mario and Adrian, Little Lemon started
              as a small family restaurant with a dream to bring authentic
              Mediterranean flavors to Chicago. Today, we continue that
              tradition with the same passion and commitment to quality
              ingredients and exceptional service.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#F4CE14] p-8 rounded-xl mb-8">
              <h3 className="text-xl font-medium mb-4">Visit Us</h3>
              <p className="my-2">
                <strong className="uppercase">Address:</strong>
                <br />
                123 Mediterranean Ave
                <br />
                Chicago, IL 60601
              </p>
              <p className="my-2">
                <strong>Phone:</strong>
                <br />
                (312) 555-LEMON
              </p>
              <p className="my-2">
                <strong>Hours:</strong>
                <br />
                Mon-Sun: 11:00 AM - 10:00 PM
              </p>

              <Link to="/contact" className="no-underline">
                <button className="bg-[#495E57] text-[#F4CE14] border-2 border-[#F4CE14] px-6 py-3 rounded-full text-base font-semibold cursor-pointer mt-4 w-full transition-all duration-300 shadow-md hover:bg-[#F4CE14] hover:text-[#495E57] hover:-translate-y-0.5 hover:shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
