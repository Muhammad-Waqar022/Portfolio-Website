import "./App.css";
import About from "./Components/About/About.jsx";
import Skill from "./Components/Skills/Skill.jsx";
import Project from "./Components/Projects/Project.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer..jsx";
import DotGrid from "./Components/Hero/DotGrid";
import Certificate from "./Components/Certificate/Certificate.jsx";
import HeroContent from "./Components/Hero/HeroContent.jsx";
import CardNav from "./Components/Navbar/CardNav.jsx";
import AnimatedContent from "./Components/AnimateContent/AnimateContent.jsx";

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Download Cv", ariaLabel: "Download CV", href:"#downloadCv" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Frontend", ariaLabel: "Featured Projects", href:"#project"  },
        { label: "Wordpress", ariaLabel: "Project Case Studies", href:"#project"  },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href:"mailto:ranawaqar4343@gmail.com" },
        { label: "Github", ariaLabel: "Github", href:"https://github.com/Muhammad-Waqar022" },
        { label: "LinkedIn", ariaLabel: "LinkedIn",href:"http://linkedin.com/in/muhammad-waqar-ajmal20" },
      ],
    },
  ];
  return (
    <>
      <div id="home"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "580px",
          maxHeight: "700px",
          width: "100%",
        }}
      >
        <CardNav
          items={items}
          baseColor="rgba(35,35,50,0.8)"
          menuColor="#fff"
          buttonBgColor="#8b5cf6"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <DotGrid
            dotSize={8}
            gap={18}
            baseColor="rgb(30, 22,45)"
            activeColor="#7c3aed"
            proximity={100}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="content absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <HeroContent />
        </div>
      </div>

      <div id="about">
        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          delay={0}
        >
          <About />
        </AnimatedContent>
      </div>

      <div id="skill">
        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          delay={0}
        >
          <Skill/>
        </AnimatedContent>
      </div>
      <div id="project">
        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          delay={0}
        >
          <Project />
        </AnimatedContent>
      </div>
      <div id="certificates">
        <Certificate />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
