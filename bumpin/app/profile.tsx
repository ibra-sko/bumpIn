import Image from "next/image";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-100">
      {/* Page Container */}
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold">Your Reservations & Favorites</h1>
        </div>

        {/* Reserved Houses */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Reserved Houses</h3>
          <div className="flex space-x-2 overflow-x-scroll">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md"
              >
                <Image
                  src="/house.jpg"
                  alt="Reserved House"
                  width={192}
                  height={108}
                  className="w-full h-32 rounded-t-lg"
                />
                <div className="p-2">
                  <h4 className="text-sm font-semibold">Reserved House</h4>
                  <p className="text-xs text-gray-500">10 km</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Houses */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Favorite Houses</h3>
          <div className="flex space-x-2 overflow-x-scroll">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md"
              >
                <Image
                  src="/house.jpg"
                  alt="Favorite House"
                  width={192}
                  height={108}
                  className="w-full h-32 rounded-t-lg"
                />
                <div className="p-2">
                  <h4 className="text-sm font-semibold">Favorite House</h4>
                  <p className="text-xs text-gray-500">12 km</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
