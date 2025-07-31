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
            {/* Hero Header Section */}
            <section className="bg-gradient-to-br from-[#495E57] to-[#3A4B47] text-white py-16 px-8 text-center mb-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
                        Our Menu
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                        Discover our selection of traditional Mediterranean dishes with a modern twist
                    </p>
                    <div className="mt-8 px-8 py-4 bg-[#F4CE14] bg-opacity-20 rounded-full inline-block border-2 border-[#F4CE14]">
                        <span className="text-[#F4CE14] font-medium">✨ Fresh • Authentic • Delicious ✨</span>
                    </div>
                </div>
            </section>
            
            <section className="px-8 py-8 max-w-6xl mx-auto">

                {menuItems.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-[#495E57] border-b-4 border-[#F4CE14] pb-2 mb-8 text-2xl font-medium">
                            {category.category}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="bg-[#EDEFEE] p-6 rounded-xl border border-gray-300">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="m-0 text-[#495E57] text-lg font-medium">{item.name}</h3>
                                        <span className="text-xl font-bold text-[#F4CE14] bg-[#495E57] px-3 py-1 rounded-full">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="m-0 leading-relaxed text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center mt-12 p-8 bg-[#F4CE14] rounded-xl">
                    <h3 className="text-[#495E57] text-xl font-medium mb-4">Special Dietary Options Available</h3>
                    <p className="text-[#495E57] m-0">We offer vegetarian, vegan, and gluten-free options. Please ask your server for details.</p>
                </div>
            </section>
        </main>
    );
};

export default Menu;
