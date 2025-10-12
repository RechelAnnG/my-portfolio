import logo from './logo.svg';
import './Philcon.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Philcon() {
  const blobRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(0);
  
  // Refs for navigation
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

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

  return (
    <div className="Philcon">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="philcon">
        <div className="philcon__text">Some of the figma designs</div>
        <div className="philcon__desc">You can visit their website at philippineconsortium.com, but take note that some layouts
          have changed since my internship.
        </div>
      </div>

      <div className="philcon__main">
        <div className="philcon__div">
          <div className="philcon__info">
            <div className="philcon__page">Home</div>
            <div className="philcon__img">
              <img src={require('./icons/philcon-home.png')} alt="philcon-home" />
            </div>
          </div>

          <div className="philcon__info">
            <div className="philcon__page">Product</div>
            <div className="philcon__img">
              <img src={require('./icons/philcon-prodPage.png')} alt="philcon-prodPage" />
            </div>
          </div>
        </div>

        <div className="philcon__div">
          <div className="philcon__info">
            <div className="philcon__page">Category</div>
            <div className="philcon__img">
              <img src={require('./icons/philcon-category.png')} alt="philcon-category" />
            </div>
          </div>

          <div className="philcon__info">
            <div className="philcon__page">Platform & Solutions</div>
            <div className="philcon__img">
              <img src={require('./icons/philcon-ps.png')} alt="philcon-prod-ps" />
            </div>
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

export default Philcon;
