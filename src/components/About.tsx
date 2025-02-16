import { FaAws, FaSwift, FaPython } from "react-icons/fa";
import { 
  SiFlutter, SiDart, SiSwift, SiDjango, SiPython, SiFastapi, 
  SiFlask, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, 
  SiDocker, SiTensorflow, SiPytorch, SiGit, SiGithub,
  SiFirebase, SiAndroidstudio, SiXcode,
    SiTypescript, SiKubernetes,
   SiPostman
} from "react-icons/si";

 

import {VscAzure} from "react-icons/vsc";
// import { FaSwift, FaPython } from "react-icons/fa";
// import { MdFilter } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";

// Skill groups for marquee
const skillsTop = [
  { icon: SiFlutter, name: 'Flutter', color: 'bg-blue-500/5 hover:bg-blue-500/20 text-[#02569B]' },
  { icon: SiDart, name: 'Dart', color: 'bg-blue-400/5 hover:bg-blue-400/20 text-[#0175C2]' },
  { icon: SiSwift, name: 'Swift', color: 'bg-orange-500/5 hover:bg-orange-500/20 text-[#F05138]' },
  { icon: SiPython, name: 'Python', color: 'bg-yellow-500/5 hover:bg-yellow-500/20 text-[#3776AB]' },
  { icon: SiDjango, name: 'Django', color: 'bg-green-500/5 hover:bg-green-500/20 text-[#092E20]' },
  { icon: SiFastapi, name: 'FastAPI', color: 'bg-teal-500/5 hover:bg-teal-500/20 text-[#009688]' },
  { icon: SiFlask, name: 'Flask', color: 'bg-gray-500/5 hover:bg-gray-500/20 text-[#000000]' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'bg-green-500/5 hover:bg-green-500/20 text-[#339933]' },
  { icon: SiTypescript, name: 'TypeScript', color: 'bg-blue-600/5 hover:bg-blue-600/20 text-[#3178C6]' },
];

const skillsMiddle = [
  { icon: SiMysql, name: 'MySQL', color: 'bg-blue-800/5 hover:bg-blue-800/20 text-[#4479A1]' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'bg-blue-400/5 hover:bg-blue-400/20 text-[#4169E1]' },
  { icon: SiMongodb, name: 'MongoDB', color: 'bg-green-500/5 hover:bg-green-500/20 text-[#47A248]' },
  { icon: SiFirebase, name: 'Firebase', color: 'bg-yellow-500/5 hover:bg-yellow-500/20 text-[#FFCA28]' },
  { icon: SiDocker, name: 'Docker', color: 'bg-blue-500/5 hover:bg-blue-500/20 text-[#2496ED]' },
  { icon: SiKubernetes, name: 'Kubernetes', color: 'bg-blue-600/5 hover:bg-blue-600/20 text-[#326CE5]' },
  { icon: SiTensorflow, name: 'TensorFlow', color: 'bg-orange-500/5 hover:bg-orange-500/20 text-[#FF6F00]' },
  { icon: SiPytorch, name: 'PyTorch', color: 'bg-red-500/5 hover:bg-red-500/20 text-[#EE4C2C]' },
];

const skillsBottom = [
  { icon: SiGit, name: 'Git', color: 'bg-orange-600/5 hover:bg-orange-600/20 text-[#F14E32]' },
  { icon: SiGithub, name: 'GitHub', color: 'bg-gray-500/5 hover:bg-gray-500/20 text-[#181717]' },
  { icon: SiAndroidstudio, name: 'Android Studio', color: 'bg-green-600/5 hover:bg-green-600/20 text-[#3DDC84]' },
  { icon: SiXcode, name: 'Xcode', color: 'bg-blue-500/5 hover:bg-blue-500/20 text-[#147EFB]' },
  { icon: VscAzure, name: 'Azure', color: 'bg-blue-600/5 hover:bg-blue-600/20 text-[#0078D4]' },
  { icon: FaAws, name: 'AWS', color: 'bg-yellow-600/5 hover:bg-yellow-600/20 text-[#FF9900]' },
  { icon: SiPostman, name: 'Postman', color: 'bg-orange-500/5 hover:bg-orange-500/20 text-[#FF6C37]' },
];

const SkillCard = ({ icon: Icon, name, color }: { icon: React.ElementType; name: string; color: string }) => (
  <div className={`skill-card ${color} group`}>
    <Icon className="text-[22px]" />
    <span className="text-[15px] font-medium text-white">{name}</span>
  </div>
);

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
      {/* Services Section */}
      <section className="service">
      <section className="text-white">
      <h3 className="text-2xl font-bold mb-8">What I'm Doing</h3>
 
      
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        

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

      

        {/* Backend Development */}
        <li className="service-item p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-green-600/80">
              <FaPython className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold">Backend Development</h4>
          </div>
          <p className="text-gray-400">
            Building secure & scalable backends using <strong className="text-green-400">Django & FastAPI</strong>.
          </p>
        </li>
      </ul>

    </section>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        {/* <h3 className="section-title mb-8">Tech Stack</h3> */}

        <h3 className="text-2xl font-bold mb-8">My Tech Stack</h3>

        <div className="skills-marquee-container">
          <div className="marquee-track to-left">
            <div className="marquee-content">
              {[...skillsTop, ...skillsTop].map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="marquee-track to-right">
            <div className="marquee-content">
              {[...skillsMiddle, ...skillsMiddle].map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="marquee-track to-left">
            <div className="marquee-content">
              {[...skillsBottom, ...skillsBottom].map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}