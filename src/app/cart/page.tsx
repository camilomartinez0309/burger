'use client'
import useLocalStorageCart from '@/hooks/cart';
import React from 'react';

const CartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useLocalStorageCart();

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((product) => (
                        <div key={product.id} className="border p-4">
                            <img src={product.image} alt={product.name} className="mx-auto mb-4" style={{ maxWidth: '100px' }} />
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600">${product.newPrice.toFixed(2)}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                    className="w-16 text-center border rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
