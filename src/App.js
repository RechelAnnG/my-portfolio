import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const blobRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(0);
  
  // Refs for navigation
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const tick = () => {
      const smoothing = 0.12; // smaller = more delay
      const { x: tx, y: ty } = targetRef.current;
      const { x: cx, y: cy } = currentRef.current;
      const nx = cx + (tx - cx) * smoothing;
      const ny = cy + (ty - cy) * smoothing;
      currentRef.current = { x: nx, y: ny };
      blob.style.left = `${nx}px`;
      blob.style.top = `${ny}px`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Navigation scroll functions
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  

  // Resume and Projects handlers
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1h1qq9-8B9F1fjNaJFq5pf08XKwnT4Tag/view?usp=sharing', '_blank');
  };

  const navigate = useNavigate();

  const goToNexaio = () => {
    navigate("/nexaio");
  };
  const goToPhilcon = () => {
    navigate("/philcon");
  };
  const goToKwisaysayan = () => {
    navigate("/kwisaysayan");
  };
  const goToNexus = () => {
    navigate("/nexus");
  };
  const goToUmak = () => {
    navigate("/umak");
  };
  const goToJurassic = () => {
    navigate("/jurassic");
  };
  const goToGrocery = () => {
    navigate("/grocery");
  };

  

  return (
    <div className="App">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
      <nav>
        <ul className="nav">
          <li onClick={scrollToAbout} style={{ cursor: 'pointer' }}>About</li>
          <li onClick={scrollToProjects} style={{ cursor: 'pointer' }}>Projects</li>
          <li onClick={scrollToContact} style={{ cursor: 'pointer' }}>Contact Me</li>
        </ul>
      </nav>
      <div className="container1">
        <div className="intro">
          <div className="intro__name">Rechel Ann De Guzman</div>
          <div className="intro__role">Web developer</div>
          <div className="intro__desc">specialized in Web Design, UI/UX, and Front-End Development.</div>
        </div>
        <div className="icons-marquee">
          <div className="icons-track">
            <img src={require('./icons/atom.png')} alt="atom" />
            <img src={require('./icons/c.png')} alt="c" />
            <img src={require('./icons/csharp.png')} alt="csharp" />
            <img src={require('./icons/css.png')} alt="css" />
            <img src={require('./icons/figma.png')} alt="figma" />
            <img src={require('./icons/github.png')} alt="github" />
            <img src={require('./icons/html.png')} alt="html" />
            <img src={require('./icons/java.png')} alt="java" />
            <img src={require('./icons/js.png')} alt="js" />
            <img src={require('./icons/php.png')} alt="php" />
            <img src={require('./icons/laravel.svg').default} alt="laravel" />
            <img src={require('./icons/wordpress.svg').default} alt="wordpress" />
            <img src={require('./icons/shopify.svg').default} alt="shopify" />
            <img src={require('./icons/liquid.svg').default} alt="liquid" />
            <img src={require('./icons/erpnext.svg').default} alt="erpnext" />
            <img src={require('./icons/docker.svg').default} alt="docker" />
            <img src={require('./icons/ubuntu.svg').default} alt="ubuntu" />
            <img src={require('./icons/hostinger.svg').default} alt="hostinger" />
            <img src={require('./icons/zapier.svg').default} alt="zapier" />
            <img src={require('./icons/n8n.svg').default} alt="n8n" />
            {/* duplicated set for seamless loop */}
            <img src={require('./icons/atom.png')} alt="atom-dup" />
            <img src={require('./icons/c.png')} alt="c-dup" />
            <img src={require('./icons/csharp.png')} alt="csharp-dup" />
            <img src={require('./icons/css.png')} alt="css-dup" />
            <img src={require('./icons/figma.png')} alt="figma-dup" />
            <img src={require('./icons/github.png')} alt="github-dup" />
            <img src={require('./icons/html.png')} alt="html-dup" />
            <img src={require('./icons/java.png')} alt="java-dup" />
            <img src={require('./icons/js.png')} alt="js-dup" />
            <img src={require('./icons/php.png')} alt="php-dup" />
            <img src={require('./icons/laravel.svg').default} alt="laravel-dup" />
            <img src={require('./icons/wordpress.svg').default} alt="wordpress-dup" />
            <img src={require('./icons/shopify.svg').default} alt="shopify-dup" />
            <img src={require('./icons/liquid.svg').default} alt="liquid-dup" />
            <img src={require('./icons/erpnext.svg').default} alt="erpnext-dup" />
            <img src={require('./icons/docker.svg').default} alt="docker-dup" />
            <img src={require('./icons/ubuntu.svg').default} alt="ubuntu-dup" />
            <img src={require('./icons/hostinger.svg').default} alt="hostinger-dup" />
            <img src={require('./icons/zapier.svg').default} alt="zapier-dup" />
            <img src={require('./icons/n8n.svg').default} alt="n8n-dup" />
          </div>
        </div>

        <div className="scroll-down"></div>

      </div>

      <div className="container2" ref={aboutRef}>
        <div className="aboutme">
            <div className="aboutme__header">About Me</div>
            <div className="aboutme__content">
              Welcome to my portfolio! I’m Rechel Ann De Guzman, an aspiring and passionate web developer from Taguig City.
              I graduated from the University of Makati with a Bachelor of Science in Computer Science major in Application Development.
              <br /><br />
              I specialize in Web Design, UI/UX, and Front-End Development, creating creative and interactive interfaces that enhance usability and user satisfaction.
              My skills include wireframing, prototyping, and user research to develop functional and visually pleasing websites.
              <br /><br />
              I’m passionate, dedicated, and always eager to learn, continuously improving my craft and exploring new technologies to deliver quality work
            </div>
        </div>
      </div>

      <div className="container3">
        <div className="skills__header">Technical Skills</div>

        <div className="skills">
          <div className="skills__category">
            <div className="skills__categoryTitle">Programming Languages</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/js.png')} alt="JavaScript" /><span>JavaScript</span></div>
              <div className="skill__chip"><img src={require('./icons/java.png')} alt="Java" /><span>Java</span></div>
              <div className="skill__chip"><img src={require('./icons/php.png')} alt="PHP" /><span>PHP</span></div>
              <div className="skill__chip"><img src={require('./icons/csharp.png')} alt="C#" /><span>C#</span></div>
              <div className="skill__chip"><img src={require('./icons/atom.png')} alt="React" /><span>React</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Web Development</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/wix.svg').default} alt="Wix" /><span>Wix</span></div>
              <div className="skill__chip"><img src={require('./icons/wordpress.svg').default} alt="WordPress" /><span>WordPress</span></div>
              <div className="skill__chip"><img src={require('./icons/shopify.svg').default} alt="Shopify" /><span>Shopify</span></div>
              <div className="skill__chip"><img src={require('./icons/html.png')} alt="HTML" /><span>HTML</span></div>
              <div className="skill__chip"><img src={require('./icons/css.png')} alt="CSS" /><span>CSS</span></div>
              <div className="skill__chip"><img src={require('./icons/liquid.svg').default} alt="Liquid" /><span>Liquid</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Framework</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/laravel.svg').default} alt="Laravel" /><span>Laravel</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Mobile Development</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/android.svg').default} alt="Android" /><span>Android</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Database Management</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/firebase.svg').default} alt="Firebase" /><span>Firebase</span></div>
              <div className="skill__chip"><img src={require('./icons/mysql.svg').default} alt="MySQL" /><span>MySQL</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">ERP Systems</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/erpnext.svg').default} alt="ERPNext" /><span>ERPNext</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">DevOps / Infrastructure</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/docker.svg').default} alt="Docker" /><span>Docker</span></div>
              <div className="skill__chip"><img src={require('./icons/ubuntu.svg').default} alt="Ubuntu" /><span>Ubuntu</span></div>
              <div className="skill__chip"><img src={require('./icons/vps.svg').default} alt="VPS Administration" /><span>VPS Administration</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Tools &amp; Platforms</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/figma.png')} alt="Figma" /><span>Figma</span></div>
              <div className="skill__chip"><img src={require('./icons/github.png')} alt="Github" /><span>Github</span></div>
              <div className="skill__chip"><img src={require('./icons/erpnext.svg').default} alt="ERPNext" /><span>ERPNext</span></div>
            </div>
          </div>

          <div className="skills__category">
            <div className="skills__categoryTitle">Automation</div>
            <div className="skills__items">
              <div className="skill__chip"><img src={require('./icons/n8n.svg').default} alt="n8n" /><span>n8n</span></div>
              <div className="skill__chip"><img src={require('./icons/zapier.svg').default} alt="Zapier" /><span>Zapier</span></div>
            </div>
          </div>
        </div>
      </div>

       <div className="container4" ref={projectsRef}>

         <div className="projects__header">Projects</div>

        <div className="projects__content">
          <div className="project__nexaio" onClick={goToNexaio} style={{ cursor: 'pointer' }}>
            <div className="project__header">NEXA.IO</div>
            <div className="project__desc">Nexa.io is a sample mock-up website for a technology solutions
              company focused on helping businesses adapt and grow in the digital era.</div>
            <div className="project__tools">
              <span className="tool-chip">Figma</span>
              <span className="tool-chip">Web Design</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__philcon" onClick={goToPhilcon} style={{ cursor: 'pointer' }}>
            <div className="project__header">PHILIPPINE CONSORTIUM WEBSITE</div>
            <div className="project__desc">During my internship at the Philippine Consortium, I was responsible for redesigning the company website. I created the new layout in Figma and
              successfully implemented it on Wix to improve its overall look and usability.</div>
            <div className="project__tools">
              <span className="tool-chip">Wix</span>
              <span className="tool-chip">Wix Studio</span>
              <span className="tool-chip">Web Design</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__kwisaysayan" onClick={goToKwisaysayan} style={{ cursor: 'pointer'}}>
            <div className="project__header">KWISAYSAYAN</div>
            <div className="project__desc">A web-based quiz game application designed to serve as a supplementary tool in teaching and
              learning Araling Panlipunan in a more engaging and interactive way.</div>
            <div className="project__tools">
              <span className="tool-chip">React</span>
              <span className="tool-chip">Firebase</span>
              <span className="tool-chip">Tailwind CSS</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__nexus"  onClick={goToNexus} style={{ cursor: 'pointer'}}>
            <div className="project__header">NEXUS FINTECH SALES</div>
            <div className="project__desc">A Point of Sale (POS) application designed for Admin and Cashier users to efficiently process orders,
              manage inventory, monitor sales, handle supplier records, and maintain user accounts.</div>
            <div className="project__tools">
              <span className="tool-chip">React</span>
              <span className="tool-chip">Firebase</span>
              <span className="tool-chip">Web Design</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__umak"  onClick={goToUmak} style={{ cursor: 'pointer'}}>
            <div className="project__header">UMAK NEXUS</div>
            <div className="project__desc">An Android application that serves as a one-stop platform for seamless and
              convenient campus shopping, designed specifically for the University of Makati community.</div>
            <div className="project__tools">
              <span className="tool-chip">Android</span>
              <span className="tool-chip">Firebase</span>
              <span className="tool-chip">Java</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__jurassic" onClick={goToJurassic} style={{cursor: 'pointer'}}>
            <div className="project__header">JURASSIC POT PH</div>
            <div className="project__desc">An e-commerce site showcasing fun, dinosaur-inspired plant pots that
              merge design creativity with a passion for low-maintenance greenery.</div>
            <div className="project__tools">
              <span className="tool-chip">PHP</span>
              <span className="tool-chip">MySQL</span>
              <span className="tool-chip">Web Design</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
          <div className="project-divider"></div>

          <div className="project__grocery" onClick={goToGrocery} style={{cursor: 'pointer'}}>
            <div className="project__header">GROCERY SHOP MANAGEMENT SYSTEM</div>
            <div className="project__desc">A desktop application built to streamline inventory,
              sales, and customer management for improved business efficiency.</div>
            <div className="project__tools">
              <span className="tool-chip">C#</span>
              <span className="tool-chip">SQL Server</span>
              <span className="tool-chip">.Net</span>
              <span className="tool-chip">UI/UX</span>
            </div>
          </div>
        </div>
      </div>

        <div className="contact" ref={contactRef}>
          <div className="contact__header">Let's Connect</div>
         <div className="contact__desc">Available for web development and UI/UX roles.
         Let's collaborate to build scalable, high-performance web solutions and drive innovation together.</div>
         <div className="contact__icons">
           <div className="contact__icon">
             <img src={require('./icons/apple.png')} alt="email" />
             <span className="contact__icon-text">rechelanndeguzman@gmail.com</span>
           </div>
           <div className="contact__icon">
             <img src={require('./icons/linkedin.png')} alt="linkedin" />
             <span className="contact__icon-text">Rechel Ann De Guzman</span>
           </div>
           <div className="contact__icon">
             <img src={require('./icons/github.png')} alt="github" />
             <span className="contact__icon-text">@RechelAnnG</span>
           </div>
         </div>
       </div>

       <footer className="footer">
         <div className="footer__copyright">@2025 Rechel Ann De Guzman. All rights reserved.</div>
         <div className="footer__actions">
           <button className="footer__button" onClick={openResume}>View Resume</button>
           <button className="footer__button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Go back to the top</button>
         </div>
       </footer>

    </div>
  );
}

export default App;
