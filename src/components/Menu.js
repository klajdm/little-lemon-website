import React from 'react';

const Menu = () => {
    const menuItems = [
        {
            category: "Appetizers",
            items: [
                { name: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
                { name: "Bruschetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
                { name: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." }
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Mediterranean Grilled Fish", price: "$18.99", description: "Fresh catch of the day grilled with Mediterranean herbs and served with lemon rice." },
                { name: "Lamb Souvlaki", price: "$22.99", description: "Tender lamb skewers marinated in olive oil, lemon, and herbs, served with pita and tzatziki." },
                { name: "Pasta Primavera", price: "$16.99", description: "Fresh seasonal vegetables tossed with pasta in a light olive oil and herb sauce." }
            ]
        },
        {
            category: "Beverages",
            items: [
                { name: "Fresh Lemonade", price: "$3.99", description: "Made with fresh lemons and a hint of mint." },
                { name: "Mediterranean Iced Tea", price: "$2.99", description: "Refreshing blend of herbs and citrus." },
                { name: "Greek Coffee", price: "$4.99", description: "Traditional strong coffee served with a small sweet treat." }
            ]
        }
    ];

    return (
        <main>
            <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>Our Menu</h1>
                    <p style={{ fontSize: '1.2rem', color: '#495E57' }}>
                        Discover our selection of traditional Mediterranean dishes with a modern twist
                    </p>
                </div>

                {menuItems.map((category, index) => (
                    <div key={index} style={{ marginBottom: '3rem' }}>
                        <h2 style={{ 
                            color: '#495E57', 
                            borderBottom: '3px solid #F4CE14', 
                            paddingBottom: '0.5rem',
                            marginBottom: '2rem'
                        }}>
                            {category.category}
                        </h2>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                            gap: '2rem' 
                        }}>
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} style={{
                                    backgroundColor: '#EDEFEE',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    border: '1px solid #ddd'
                                }}>
                                    <div style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        <h3 style={{ margin: 0, color: '#495E57' }}>{item.name}</h3>
                                        <span style={{ 
                                            fontSize: '1.2rem', 
                                            fontWeight: 'bold', 
                                            color: '#F4CE14',
                                            backgroundColor: '#495E57',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '15px'
                                        }}>
                                            {item.price}
                                        </span>
                                    </div>
                                    <p style={{ 
                                        margin: 0, 
                                        lineHeight: '1.5',
                                        color: '#333'
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '3rem',
                    padding: '2rem',
                    backgroundColor: '#F4CE14',
                    borderRadius: '10px'
                }}>
                    <h3>Special Dietary Options Available</h3>
                    <p>We offer vegetarian, vegan, and gluten-free options. Please ask your server for details.</p>
                </div>
            </section>
        </main>
    );
};

export default Menu;
