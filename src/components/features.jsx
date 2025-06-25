//imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faToolbox,
  faGroupArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          How SmartMama Empowers Your Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-2 md:gap-x-4  items-start md:items-start justify-start ">
              <FontAwesomeIcon
                icon={faLeaf}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold mb-2  text-gray-900">
                Personalized Health & Wellness
              </h3>
            </div>
            <p className="text-gray-700">
              Receive tailored guidance on optimal prenatal nutrition, safe
              exercise routines, and holistic self-care designed to keep both
              you and your baby thriving through every stage.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-2 md:gap-x-4  items-start md:items-start  justify-start ">
              <FontAwesomeIcon
                icon={faToolbox}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold mb-2  text-gray-900">
                Confident Birth Preparation
              </h3>
            </div>
            <p className="text-gray-700">
              Gain invaluable knowledge and practical techniques for labor,
              delivery, and postpartum recovery through our comprehensive
              workshops and resources, empowering you for a positive birth
              experience.
            </p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-2 md:gap-x-4  items-start md:items-start  justify-start ">
              <FontAwesomeIcon
                icon={faGroupArrowsRotate}
                className=" text-gray-900 text-xl"
              />
              <h3 className="text-xl font-semibold  text-gray-900 mb-2">
                Supportive Community & Expert Access
              </h3>
            </div>
            <p className="text-gray-700">
              Connect with a caring community of fellow expectant mothers and
              get your questions answered directly by our team of prenatal
              health professionals and birth coaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
