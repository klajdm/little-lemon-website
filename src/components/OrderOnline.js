import React, { useState } from 'react';

const OrderOnline = () => {
    const [cart, setCart] = useState([]);
    const [orderType, setOrderType] = useState('delivery');

    const menuItems = [
        { id: 1, name: "Greek Salad", price: 12.99, category: "Appetizers" },
        { id: 2, name: "Bruschetta", price: 5.99, category: "Appetizers" },
        { id: 3, name: "Mediterranean Grilled Fish", price: 18.99, category: "Main Courses" },
        { id: 4, name: "Lamb Souvlaki", price: 22.99, category: "Main Courses" },
        { id: 5, name: "Pasta Primavera", price: 16.99, category: "Main Courses" },
        { id: 6, name: "Lemon Dessert", price: 5.00, category: "Desserts" }
    ];

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(itemId);
        } else {
            setCart(cart.map(item => 
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <main>
            <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>Order Online</h1>
                    <p style={{ fontSize: '1.2rem', color: '#495E57' }}>
                        Order your favorite Mediterranean dishes for delivery or pickup
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    {/* Menu Items */}
                    <div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ marginRight: '1rem' }}>
                                <input 
                                    type="radio" 
                                    value="delivery" 
                                    checked={orderType === 'delivery'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                    style={{ marginRight: '0.5rem' }}
                                />
                                Delivery
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="pickup" 
                                    checked={orderType === 'pickup'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                    style={{ marginRight: '0.5rem' }}
                                />
                                Pickup
                            </label>
                        </div>

                        <h2 style={{ color: '#495E57', marginBottom: '2rem' }}>Menu Items</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {menuItems.map(item => (
                                <div key={item.id} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    backgroundColor: '#EDEFEE',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd'
                                }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 0.5rem 0', color: '#495E57' }}>{item.name}</h3>
                                        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{item.category}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>${item.price}</span>
                                        <button 
                                            onClick={() => addToCart(item)}
                                            style={{
                                                backgroundColor: '#F4CE14',
                                                border: 'none',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cart */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        border: '1px solid #ddd',
                        height: 'fit-content'
                    }}>
                        <h2 style={{ color: '#495E57', marginBottom: '1rem' }}>Your Order</h2>
                        
                        {cart.length === 0 ? (
                            <p style={{ color: '#666', textAlign: 'center' }}>Your cart is empty</p>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <div key={item.id} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1rem',
                                        paddingBottom: '1rem',
                                        borderBottom: '1px solid #ddd'
                                    }}>
                                        <div>
                                            <h4 style={{ margin: '0 0 0.25rem 0' }}>{item.name}</h4>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                                                ${item.price} each
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                style={{
                                                    backgroundColor: '#495E57',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '3px',
                                                    width: '25px',
                                                    height: '25px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                -
                                            </button>
                                            <span style={{ minWidth: '20px', textAlign: 'center' }}>
                                                {item.quantity}
                                            </span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                style={{
                                                    backgroundColor: '#495E57',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '3px',
                                                    width: '25px',
                                                    height: '25px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                
                                <div style={{ 
                                    marginTop: '1rem', 
                                    paddingTop: '1rem', 
                                    borderTop: '2px solid #495E57' 
                                }}>
                                    <div style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        fontSize: '1.2rem', 
                                        fontWeight: 'bold',
                                        marginBottom: '1rem'
                                    }}>
                                        <span>Total:</span>
                                        <span>${getTotalPrice()}</span>
                                    </div>
                                    
                                    <button style={{
                                        width: '100%',
                                        backgroundColor: '#495E57',
                                        color: 'white',
                                        border: 'none',
                                        padding: '1rem',
                                        borderRadius: '5px',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OrderOnline;
