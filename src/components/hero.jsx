function Hero() {
    return ( 
        <section className="grid grid-rows-2">
            <div id="text-container">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-6">Discover amazing content and connect with our community. We are dedicated to providing you with the best experience possible.</p>
                <div className="buttons-container">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Sign Up
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300 ml-4">
                        Log In
                    </button>
                </div>
            </div>
            <div id="visual-container">
                image comes here
            </div>
        </section>
     );
}

export default Hero;