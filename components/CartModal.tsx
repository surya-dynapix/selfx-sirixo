"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { submitOrder } from "@/app/actions";

export default function CartModal() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, cartTotal } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Reset view when closing
      setTimeout(() => {
        setIsCheckout(false);
        setIsSuccess(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("company", formData.company);

    const result = await submitOrder(data, items, cartTotal);

    setLoading(false);
    if (result.success) {
      setIsSuccess(true);
      // We don't clear the cart context instantly so the user sees success first, 
      // they can close it and it clears on close. But let's just clear it.
      items.forEach(i => removeItem(i.id)); 
    } else {
      alert(result.message);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      
      {/* Sliding Drawer */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-zinc-900" />
            <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
              {isSuccess ? "Quote Requested" : isCheckout ? "Request Quote" : "Your Cart"}
            </h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors text-zinc-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-zinc-50">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 mb-2">Quote Requested!</h3>
            <p className="text-zinc-500 font-medium">
              We have received your hardware request. One of our specialists will contact you shortly to finalize the details.
            </p>
            <button 
              onClick={closeCart}
              className="mt-8 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all"
            >
              Continue Browsing
            </button>
          </div>
        ) : isCheckout ? (
          <form onSubmit={handleCheckoutSubmit} className="flex-grow flex flex-col overflow-y-auto bg-zinc-50/50">
            <div className="p-6 flex-grow flex flex-col gap-4">
              <p className="text-sm text-zinc-600 font-medium mb-2">
                Enter your details below and our team will prepare a formal quote for your selected hardware. No payment is required right now.
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-sm"
                  placeholder="john@restaurant.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-sm"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="p-6 bg-white border-t border-zinc-100 flex flex-col gap-3">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-zinc-500">Total Estimate</span>
                <span className="text-xl font-black text-zinc-900">₹{cartTotal.toLocaleString()}</span>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center"
              >
                {loading ? "Submitting Request..." : "Submit Quote Request"}
              </button>
              <button 
                type="button"
                onClick={() => setIsCheckout(false)}
                className="w-full py-3 text-zinc-500 font-semibold hover:text-zinc-800 transition-colors text-sm"
              >
                Back to Cart
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* Cart Items Area */}
            <div className="flex-grow overflow-y-auto p-6 bg-zinc-50/50">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-zinc-300" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Your cart is empty</h3>
                  <p className="text-zinc-500 text-sm mb-8">Looks like you haven't added any hardware to your cart yet.</p>
                  <button 
                    onClick={closeCart}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-600/20"
                  >
                    Browse Hardware
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex gap-4">
                      {/* Image Placeholder or actual Image */}
                      <div className="w-20 h-20 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0 border border-zinc-200 overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <ShoppingBag className="w-8 h-8 text-zinc-300" />
                        )}
                      </div>
                      
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-zinc-900 text-sm">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        {item.category && (
                          <span className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">
                            {item.category}
                          </span>
                        )}
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="font-black text-lg text-zinc-900">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                          
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-3 bg-zinc-100 rounded-lg p-1 border border-zinc-200">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 bg-white rounded-md shadow-sm flex items-center justify-center text-zinc-600 hover:text-red-600 transition-colors border border-zinc-200"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 bg-white rounded-md shadow-sm flex items-center justify-center text-zinc-600 hover:text-red-600 transition-colors border border-zinc-200"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-zinc-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zinc-500 font-medium">Subtotal Estimate</span>
                  <span className="text-2xl font-black text-zinc-900">₹{cartTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-zinc-400 mb-6 text-center">Shipping & final details calculated during quoting.</p>
                <button 
                  onClick={() => setIsCheckout(true)}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
