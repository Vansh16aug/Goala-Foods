
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <div className="space-y-6 max-w-md">
        <img
          src="https://res.cloudinary.com/vanshstorage/image/upload/v1731221951/rb_71_ombzxm.png"
          width={300}
          height={300}
          alt="404 Illustration"
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="text-base text-gray-600">
          Oops! It seems you've ventured into uncharted territory. The page
          you're looking for has gone on an adventure of its own.
        </p>
        <button asChild className="mt-6">
          <a href="/">Return to Home</a>
        </button>
      </div>
    </div>
  );
}
