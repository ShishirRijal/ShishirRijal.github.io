import { FaSwift, FaPython } from "react-icons/fa";
import { MdFilter } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";
 
const Services = () => {
  return (
    <section className="text-white">
      <h3 className="text-2xl font-bold mb-8">What I'm Doing</h3>
 
      
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        
        {/* Native iOS Development */}
        <li className="service-item p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-orange-500/80">
              <FaSwift className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold">Native iOS Development</h4>
          </div>
          <p className="text-gray-400">
            Crafting high-performance, elegant iOS apps using <strong className="text-orange-400">Swift & SwiftUI</strong>.
          </p>
        </li>

        {/* Cross-Platform Development */}
        <li className="service-item p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-blue-500/80">
              <FaFlutter className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold">Cross-Platform Development</h4>
          </div>
          <p className="text-gray-400">
            Build beautiful apps for iOS & Android with <strong className="text-blue-400">Dart & Flutter</strong>.
          </p>
        </li>

        {/* Backend Development */}
        <li className="service-item p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-green-600/80">
              <FaPython className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold">Backend Development</h4>
          </div>
          <p className="text-gray-400">
            Building **secure & scalable** backends using <strong className="text-green-400">Django & FastAPI</strong>.
          </p>
        </li>
      </ul>

      {/* Minimalist Full-Stack Badge */}

    </section>
  );
};

export default Services;
