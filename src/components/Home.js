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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #495E57 0%, #F4CE14 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        flex: '0 0 auto'
      }}>
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'left' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#F4CE14'
            }}>Little Lemon</h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '20px',
              color: 'white'
            }}>Chicago</h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '30px',
              color: '#E8E8E8'
            }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. Experience the
              authentic flavors of the Mediterranean in the heart of Chicago.
            </p>
            <Link to="/booking">
              <button style={{
                backgroundColor: '#F4CE14',
                color: '#495E57',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(244, 206, 20, 0.3)'
              }} aria-label="Reserve a table at Little Lemon">
                Reserve Table
              </button>
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={food1} 
              alt="Delicious Mediterranean food at Little Lemon restaurant" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </section>
      </header>

      {/* Features Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#FBFBFB',
        flex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#495E57',
            marginBottom: '20px'
          }}>Why Choose Little Lemon?</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px auto'
          }}>
            Discover what makes our Mediterranean restaurant special
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '40px 30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#495E57',
                  marginBottom: '15px'
                }}>{feature.title}</h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#495E57',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#F4CE14',
            marginBottom: '20px'
          }}>What Our Customers Say</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#E8E8E8',
            marginBottom: '60px'
          }}>
            Don't just take our word for it
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  marginBottom: '15px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#F4CE14', fontSize: '1.2rem' }}>⭐</span>
                  ))}
                </div>
                <p style={{
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>"${testimonial.review}"</p>
                <h4 style={{
                  color: '#F4CE14',
                  fontSize: '1.1rem'
                }}>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#F4CE14',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            color: '#495E57',
            marginBottom: '20px'
          }}>Ready for an Unforgettable Dining Experience?</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#495E57',
            marginBottom: '30px'
          }}>
            Book your table today and taste the authentic flavors of the Mediterranean
          </p>
          <Link to="/booking">
            <button style={{
              backgroundColor: '#495E57',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(73, 94, 87, 0.3)'
            }} aria-label="Make a reservation">
              Make a Reservation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
