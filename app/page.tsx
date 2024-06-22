import Image from "next/image";
import Skills from "./components/skills";
import Intro from './components/intro';
import Navbar from "./components/nav";
import Projects from "./components/projects";
import Experiences from "./components/experience";
import Movies from "./components/movies";
import Contacts from "./components/contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-950 via-black-400 to-black-900 pb-9 pt-9">
      <Navbar />
       <Intro/>

       <Projects/>
       
      <Skills />
      <Experiences/>
      <Contacts/>
      <Movies />
    </main>
  );
}
