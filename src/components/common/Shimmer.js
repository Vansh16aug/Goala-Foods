export default function Shimmer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-center justify-center mx-auto max-w-[1500px]">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden animate-pulse"
            >
              <div className="h-2/3 w-full bg-gray-300"></div>
              <div className="h-1/3 w-full p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
