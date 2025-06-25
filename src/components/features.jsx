//imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-1 items-start justify-start ">
              <FontAwesomeIcon
                icon={faHouse}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold mb-2  text-gray-900">
                Feature One
              </h3>
            </div>
            <p className="text-gray-700">
              Description of feature one goes here. It provides great value to
              the users.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-1 items-start justify-start ">
              <FontAwesomeIcon
                icon={faHouse}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold mb-2  text-gray-900">
                Feature One
              </h3>
            </div>
            <p className="text-gray-700">
              Description of feature one goes here. It provides great value to
              the users.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-1 items-start justify-start ">
              <FontAwesomeIcon
                icon={faHouse}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold  text-gray-900 mb-2">
                Feature One
              </h3>
            </div>
            <p className="text-gray-700">
              Description of feature one goes here. It provides great value to
              the users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
