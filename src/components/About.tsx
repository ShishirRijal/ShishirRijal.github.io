import { Code2, Smartphone, Server, Database } from 'lucide-react';
import { FaFacebook, FaSwift, FaPython } from "react-icons/fa";  
import Services from './Services';


export default function About() {
  return (
    <article className="about">
      <header>
        <h2 className="article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          A passionate tech enthusiast from the enchanting landscapes of Nepal, where the mountains inspire me to
          reach new heights in technology. Currently pursuing Computer Engineering at IOE Paschimanchal Campus, I'm on
          an exciting journey exploring the bits and bytes of this binary world.
        </p>

        <p>
          From mobile app development to machine learning, I love diving into new technologies and bringing ideas to life through code.
          In my spare time, I focus on contributing to open-source projects, alongside working out, capturing
          street photography, and writing tech content.
        </p>

        <p className="font-medium text-green-500">
          Self-motivated • Team player • Love coding
        </p>
      </section>


      <section className="service">
      <Services />
      </section>


      {/* <section className="service">
        <h3 className="text-2xl font-bold mb-8">What I'm Doing</h3>

        <ul className="service-list">
        <li className="service-item">
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 rounded-xl bg-blue-500/80">
      <FaFacebook className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-medium">Flutter</h4>
  </div>
  <p className="text-gray-400">
    Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
  </p>
</li>

<li className="service-item">
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 rounded-xl bg-orange-500/80">
      <FaSwift className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-medium">Swift</h4>
  </div>
  <p className="text-gray-400">
    Develop high-performance, secure, and scalable iOS applications using Swift.
  </p>
</li>

<li className="service-item">
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 rounded-xl bg-green-600/80">
      <FaPython className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-medium">Django</h4>
  </div>
  <p className="text-gray-400">
    Build secure and scalable backend systems using Django, a high-level Python web framework.
  </p>
</li>

        </ul>
      </section>

      <section className="service"> */}
      
      {/* </section> */}
    </article>


  );
}