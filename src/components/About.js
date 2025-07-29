import React from 'react';

const About = () => {
    return (
        <main>
            {/* Hero Header Section */}
            <section style={{
                background: 'linear-gradient(135deg, #495E57 0%, #3A4B47 100%)',
                color: '#FFFFFF',
                padding: '4rem 2rem',
                textAlign: 'center',
                marginBottom: '3rem'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '600',
                        margin: '0 0 1rem 0',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>About Little Lemon</h1>
                    <h2 style={{
                        fontSize: '2rem',
                        color: '#F4CE14',
                        margin: '0 0 1.5rem 0',
                        fontWeight: '400'
                    }}>Chicago's Mediterranean Gem</h2>
                    <p style={{
                        fontSize: '1.3rem',
                        opacity: '0.9',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>Discover the story behind our family-owned Mediterranean restaurant</p>
                </div>
            </section>
            
            <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
                            in a lively but casual environment. We are a family-owned Mediterranean restaurant, focused on 
                            traditional recipes served with a modern twist.
                        </p>
                        
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Our chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 
                            items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with 
                            moderate prices, making it a popular place for a meal any time of the day.
                        </p>

                        <h3 style={{ color: '#495E57', marginBottom: '1rem' }}>Our Story</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Founded in 1995 by brothers Mario and Adrian, Little Lemon started as a small family 
                            restaurant with a dream to bring authentic Mediterranean flavors to Chicago. Today, 
                            we continue that tradition with the same passion and commitment to quality ingredients 
                            and exceptional service.
                        </p>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            backgroundColor: '#F4CE14', 
                            padding: '2rem', 
                            borderRadius: '10px',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ margin: '0 0 1rem 0' }}>Visit Us</h3>
                            <p style={{ margin: '0.5rem 0' }}><strong>Address:</strong><br />123 Mediterranean Ave<br />Chicago, IL 60601</p>
                            <p style={{ margin: '0.5rem 0' }}><strong>Phone:</strong><br />(312) 555-LEMON</p>
                            <p style={{ margin: '0.5rem 0' }}><strong>Hours:</strong><br />Mon-Sun: 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
