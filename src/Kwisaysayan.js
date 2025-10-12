import logo from './logo.svg';
import './Kwisaysayan.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Kwisaysayan() {
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
    <div className="Kwisaysayan">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="kwisaysayan">
        <div className="kwisaysayan__text">Kwisaysayan's initial design in Figma</div>
        <div className="kwisaysayan__desc">You can visit the website at kwisaysayan.online
          to see the final output.
        </div>
      </div>

      <div className="kwisaysayan__main">
        <div className="kwisaysayan__div">
          <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Login</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-login.png')} alt="kwisaysayan-login" />
            </div>
        </div>

          <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Dashboard</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-dashboard.png')} alt="kwisaysayan-dashboard" />
            </div>
          </div>

          <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Published Page</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-published.png')} alt="kwisaysayan-published" />
            </div>
          </div>

           <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Reports</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-reports.png')} alt="kwisaysayan-reports" />
            </div>
          </div>
        </div>

        <div className="kwisaysayan__div">
          <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Sign up</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-signup.png')} alt="kwisaysayan-signup" />
            </div>
          </div>

          <div className="kwisaysayan__info">
            <div className="kwisaysayan__page">Library</div>
            <div className="kwisaysayan__img">
              <img src={require('./icons/kwisaysayan-library.png')} alt="kwisaysayan-library" />
            </div>
        </div>

            <div className="kwisaysayan__info">
              <div className="kwisaysayan__page">Question Bank</div>
              <div className="kwisaysayan__img">
                <img src={require('./icons/kwisaysayan-questionBank.png')} alt="kwisaysayan-questionBank" />
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

export default Kwisaysayan;
