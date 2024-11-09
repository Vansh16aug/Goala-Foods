import React from "react";

export default function RestrauntMenuShimmer() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Restaurant Info Section Shimmer */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 sm:p-6 animate-pulse">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          {/* Restaurant Image Shimmer */}
          <div className="h-48 sm:h-60 w-full sm:w-64 bg-gray-300 rounded-lg"></div>

          {/* Restaurant Details Shimmer */}
          <div className="mt-4 sm:mt-0 flex-1">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

            {/* Cuisines Section Shimmer */}
            <div className="mt-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="h-6 w-16 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section Shimmer */}
      <div className="mt-8">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
        <ul className="bg-white shadow-md rounded-lg p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 bg-gray-100 rounded-lg"
            >
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-8 w-full sm:w-24 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
