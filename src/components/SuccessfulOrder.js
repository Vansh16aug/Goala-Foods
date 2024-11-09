import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

const SuccessfulOrderPage = () => {
  const latestOrder = useSelector((state) => {
    const orders = state.order.items;
    return orders.length > 0 ? orders[orders.length - 1] : null;
  });

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            No Recent Orders Found
          </h1>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 transition ease-in-out"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-14 w-14 text-green-600" />
            </div>
            <h1 className="text-center text-4xl font-bold text-gray-900">
              Thank You for Your Purchase!
            </h1>
            <p className="mt-4 text-center text-md text-gray-600">
              Your order has been placed successfully. We are processing it and
              will update you soon.
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Order Summary
              </h2>
              <dl className="mt-4 divide-y divide-gray-200">
                <div className="py-4 flex justify-between text-base font-medium">
                  <dt className="text-gray-500">Order ID</dt>
                  <dd className="text-gray-900">{latestOrder._id}</dd>
                </div>
                <div className="py-4 flex justify-between text-base font-medium">
                  <dt className="text-gray-500">Total Amount</dt>
                  <dd className="text-gray-900">
                    ₹{latestOrder.totalAmount.toFixed(2)}
                  </dd>
                </div>
                <div className="py-4 flex justify-between text-base font-medium">
                  <dt className="text-gray-500">Shipping Address</dt>
                  <dd className="text-gray-900">
                    {latestOrder.shippingInfo.address},{" "}
                    {latestOrder.shippingInfo.city},{" "}
                    {latestOrder.shippingInfo.country}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800">
                Items in Your Order
              </h3>
              <ul className="mt-4 divide-y divide-gray-200">
                {latestOrder.items.map((item) => (
                  <li key={item._id} className="py-6 flex items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-cover rounded-lg border border-gray-200"
                    />
                    <div className="ml-6 flex-1">
                      <p className="text-lg font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-2 text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out"
          >
            <ShoppingBag className="mr-3 h-6 w-6" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrderPage;
