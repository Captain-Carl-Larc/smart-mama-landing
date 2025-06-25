function Hero() {
  const heroImage = (
    <img src="https://picsum.photos/1920/1080" alt="Placeholder banner image" />
  );
  return (
    <section className="pt-20 md:pt-32 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-8 bg-gray-100">
      <div id="text-container">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">
          Discover amazing content and connect with our community. We are
          dedicated to providing you with the best experience possible.
        </p>
        <div className="buttons-container flex space-between justify-center items-center md:justify-start">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300 ml-4">
            Log In
          </button>
        </div>
      </div>
      <div id="visual-container" className="flex justify-center items-center">
        <div className="hero-image-container rounded-xl shadow-lg overflow-hidden ">
          {heroImage}
        </div>
      </div>
    </section>
  );
}

export default Hero;
