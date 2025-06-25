//imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <FontAwesomeIcon icon={faHouse} className="text-green-700"/>
            <p className="text-gray-700">
              Description of feature one goes here. It provides great value to
              the users.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-gray-700">
              Description of feature two goes here. It enhances user experience
              significantly.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-700">
              Description of feature three goes here. It is designed to be
              user-friendly and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
