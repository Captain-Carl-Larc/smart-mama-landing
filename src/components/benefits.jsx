function Benefits() {
  return (
    <section className="bg-gray-100 py-8 p-4 md:p-8">
      <div className="benefit-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="benefit-text-container">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Benefit One
          </h2>
          <p className="text-gray-700 mb-4">
            This is a brief description of the first benefit. It highlights the
            key features and advantages that users can expect.
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            numquam sunt, officia nostrum optio veritatis molestias totam nam
            est a quasi at maxime. Optio, saepe.
          </p>
          <button className="bg-blue-500  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="benefit-image-container">
          <img
            src="https://placehold.co/1920x1080"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Placeholder banner"
          />
        </div>
      </div>
      <div className="benefit-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-20">
        <div className="benefit-image-container order-2 md:order-1">
          <img
            src="https://placehold.co/1920x1080"
            alt="Benefit Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="benefit-text-container md:order-1">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Benefit Two
          </h2>
          <p className="text-gray-700 mb-4">
            This is a brief description of the second benefit. It emphasizes the
            unique selling points and how it can help users.
          </p>
          <button className="bg-blue-500  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
