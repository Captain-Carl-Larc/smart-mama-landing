function Benefits() {
  return (
    <section className="bg-gray-100 py-8 p-4 md:p-8">
      <div className="benefit-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="benefit-text-container">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Embrace a Healthier, More Peaceful Pregnancy
          </h2>
          <p className="text-gray-700 mb-4">
            Move beyond guesswork and anxiety. SmartMama provides personalized
            guidance on prenatal nutrition, safe exercise, and holistic
            well-being. Feel empowered to nurture your body and mind, ensuring a
            confident, thriving journey for both you and your baby.
          </p>
          <button className="bg-blue-500  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 font-bold">
            Discover Your Personalized Plan
          </button>
        </div>
        <div className="benefit-image-container max-w-md">
          <img
            src="https://images.pexels.com/photos/7155530/pexels-photo-7155530.jpeg"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Placeholder banner"
          />
        </div>
      </div>
      <div className="benefit-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-20">
        <div className="benefit-image-container order-2 md:order-1 max-w-md">
          <img
            src="https://images.pexels.com/photos/7155530/pexels-photo-7155530.jpeg"
            alt="Benefit Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="benefit-text-container md:order-1">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Prepare for an Empowered Birth & Confident Motherhood{" "}
          </h2>
          <p className="text-gray-700 mb-4">
            Replace fear with foresight. Our expert-led resources and supportive
            community equip you with the knowledge, comfort techniques, and
            emotional readiness to confidently navigate labor, delivery, and the
            beautiful transition into parenthood.
          </p>
          <button className="bg-blue-500 font-bold  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Get Ready for Birth with Confidence
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
