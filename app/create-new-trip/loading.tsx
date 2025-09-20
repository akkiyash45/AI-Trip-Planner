export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 via-pink-500 to-red-600">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="mt-4 text-white font-semibold text-lg">
          Preparing your trip...
        </p>
      </div>
    </div>
  );
}
