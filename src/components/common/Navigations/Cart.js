import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cart/cartSlice";
import CartItem from "../../CartItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartShimmer = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 animate-pulse">
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        <div className="space-x-2 sm:space-x-5">
          <div className="inline-block h-10 w-24 bg-gray-300 rounded-lg"></div>
          <div className="inline-block h-10 w-24 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              <div className="h-6 bg-gray-300 rounded w-1/6"></div>
            </div>
            <div className="mt-4 h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/6"></div>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between">
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleOrder = () => {
    setIsCheckingOut(true);
    navigate("/checkout");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (isLoading) {
    return <CartShimmer />;
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Please log in to access your cart.
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Your Cart
        </h1>
        {cartItems.length > 0 && !isCheckingOut && (
          <div className="space-x-2 sm:space-x-5">
            <button
              onClick={() => {
                if (user) {
                  handleOrder();
                } else {
                  toast.error("Please login to add items to cart");
                }
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
            >
              Order Now
            </button>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between font-bold">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
